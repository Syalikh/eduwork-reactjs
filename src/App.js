import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class Timer extends Component {
      constructor(props){
        super(props)
        this.state = {
          time : props.start
        }
      }

      componentDidMount(){
        this.addInterval = setInterval( () => this.increase(), 1000);
      }

      componentWillUnmount(){
        clearInterval(this.addInterval)
      }


      increase() {
        this.setState((state, props) => ({
          time : parseInt(state.time) +1
        }))
      }


    render() {
      return (
        <div> {this.state.time} Detik </div>
      )
    }

}

function Mentor(props){
  return <span> its {props.age} </span>
}

function Greeting(props){
  return <h1> Halo {props.name} - <Mentor age={props.age} /></h1>
}


    class app extends Component {
      render() {  
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Greeting name= 'Syalikh fadin' age='My first react' />
              <Timer start="0" />
            </header>
          </div>
        );
      }
    }

    export default app;
  


