import React from "react";
import {
  Container,
  Form,
  Card,
  Button,
  Row,
  Col,
  Alert,
} from "react-bootstrap";
import axios from "axios";

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      results: {},
      loading: false,
      message: "",
    };

    this.cancel = "";
  }

  //   call api
  fetchSearchResult = (query) => {
    const searchUrl = `https://newsapi.org/v2/top-headlines?country=us&q=${query}&apiKey=e6bf3ac3a85e45fea8b4c157156bf036`;

    if (this.cancel) {
      this.cancel.cancel();
    }

    this.cancel = axios.CancelToken.source();

    axios
      .get(searchUrl, {
        cancelToken: this.cancel.token,
      })
      .then((res) => {
        const resultNotFoundMsg = !res.data.articles.length
          ? "Tidak ada data yang ditemukan, tolong ketik ulang"
          : "";

        this.setState({
          results: res.data.articles,
          message: resultNotFoundMsg,
          loading: false,
        });
        console.log(res.data.articles);
      })
      .catch((error) => {
        if (axios.isCancel(error) || error) {
          this.setState({
            loading: false,
            message: "Gagal mengambil data",
          });
        }
      });
  };

  //   search bar
  handleOnInputChange = (event) => {
    const query = event.target.value;
    this.setState(
      {
        query: query,
        loading: true,
        message: "",
      },
      () => {
        this.fetchSearchResult(query);
      }
    );
  };

  //render search
  renderSearchResult = () => {
    const { results } = this.state;
    if (Object.keys(results).length && results.length) {
      return (
        <Row className="row align-items-center justify-content-md-center">
          {results.map((result, i) => {
            return (
              <Col md="4" className="mx-auto mb-3" key={i}>
                <Card className="shadow">
                  <Card.Img
                    variant="top"
                    src={result.urlToImage}
                    alt={`${result.author}`}
                  />
                  <Card.Body>
                    <Card.Title>{result.title}</Card.Title>
                    <Card.Text>
                      <small className="text-muted">
                        {result.source.name} -
                        {new Date(result.publishedAt).toLocaleDateString()}
                      </small>
                    </Card.Text>
                    <Card.Text>{result.description}</Card.Text>
                    <Button variant="primary" target="_blank" href={result.url}>
                      Read More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      );
    }
  };

  componentDidMount() {
    this.fetchSearchResult("");
  }

  render() {
    const { query, loading, message } = this.state;
    // console.log(this.state);

    return (
      <div>
        <Container>
          <Form.Label htmlFor="search-input"></Form.Label>
          <Form.Control
            type="text"
            name="query"
            value={query}
            id="search-input"
            placeholder="Search..."
            onChange={this.handleOnInputChange}
          />
          <br />
          {/* error message */}

          {message && <Alert variant="danger">{message}</Alert>}

      

          {this.renderSearchResult("")}
        </Container>

        <div class="spinner-border text-primary">
            <span class="visuality-hidden"></span>
        </div>
      </div>
    );
  }
}