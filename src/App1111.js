import React, { Component } from 'react';
import Lista from './components/Lista';
import axios from 'axios';
import './App.css';
// import { Carousel } from 'react-bootstrap';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=cher&api_key=22bf14aab4875164b7d77ed04d0ef52f&format=json")
        .then(res => res.json())
        .then((result) => {
            this.setState({
              isLoaded: true,
              items: result,
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {items.map(item => (
              <li key={item.name}>
                {item.name} {item.price}
              </li>
            ))}
          </ul>
        );
      }
    }
  }
  export default App;
  
//   var mountNode = document.getElementById('container');
//   ReactDOM.render(<App />, mountNode);