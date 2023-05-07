import React, { useState, useEffect, useRef } from "react";
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

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const cancelRef = useRef(null);

  // call api
  const fetchSearchResult = (query) => {
    const searchUrl = `https://newsapi.org/v2/top-headlines?country=us&q=${query}&apiKey=e6bf3ac3a85e45fea8b4c157156bf036`;

    if (cancelRef.current) {
      cancelRef.current.cancel();
    }

    cancelRef.current = axios.CancelToken.source();

    axios
      .get(searchUrl, {
        cancelToken: cancelRef.current.token,
      })
      .then((res) => {
        const resultNotFoundMsg = !res.data.articles.length
          ? "Tidak ada data yang ditemukan, tolong ketik ulang"
          : "";

        setResults(res.data.articles);
        setMessage(resultNotFoundMsg);
        setLoading(false);
        console.log(res.data.articles);
      })
      .catch((error) => {
        if (axios.isCancel(error) || error) {
          setLoading(false);
          setMessage("Gagal mengambil data");
        }
      });
  };

  // search bar
  const handleOnInputChange = (event) => {
    const query = event.target.value;
    setQuery(query);
    setLoading(true);
    setMessage("");
    fetchSearchResult(query);
  };

  // render search
  const renderSearchResult = () => {
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

  useEffect(() => {
    fetchSearchResult("");
  }, []);

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
          onChange={handleOnInputChange}
        />
        <br />
        {/* error message */}

        {message && <Alert variant="danger">{message}</Alert>}


        <br />

        {renderSearchResult("")}
      </Container>
    </div>
  );
}