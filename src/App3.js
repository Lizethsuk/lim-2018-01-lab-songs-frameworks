import React, { Component } from 'react';
import Lista from './components/Lista';
import axios from 'axios';
import './App.css';
import { Carousel } from 'react-bootstrap';


class App extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
        cantante: ['Sting', 'Cher', 'Sia', 'Michael Jackson', 'Bruno Mars'],
        canciones: [],
      };
    };
    componentDidMount(){
        const arrayPromise= this.state.cantante.map(sing=>{
            fetch('http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist='+sing+'&api_key=22bf14aab4875164b7d77ed04d0ef52f&format=json')
            .then((r)=>{
                return r.json();
            })
            
            .then((response)=>{
                const imagen= response.data.toptracks.track[0].image[3]['#text'];
                console.log(imagen);

            })

        });

        console.log(arrayPromise);
        
        
        return Promise.all(arrayPromise)
        .then((response)=>
    console.log(response))
    }
  
    handleSelect(selectedIndex, e) {
      alert(`selected=${selectedIndex}, direction=${e.direction}`);
      this.setState({
        index: selectedIndex,
        direction: e.direction
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="/carousel.png" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="/carousel.png" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="/carousel.png" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
  }
  
//   render(<ControlledCarousel />);










export default App;