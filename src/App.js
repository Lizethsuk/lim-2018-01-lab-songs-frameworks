import React, { Component } from 'react';
// import Item from './components/Item';
import axios from 'axios';
import './App.css';
import { Carousel } from 'react-bootstrap';
// import { Carousel.Item } from 'react-bootstrap';


class App extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      cantante: ['Sting', 'Cher', 'Sia'],
      canciones:{},
      index: 0,
      direction: null
    };
    this.addWork=this.addWork.bind(this);
  }

  componentDidMount() {

    axios({
      metodo:'get',
      url: 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Sting&api_key=22bf14aab4875164b7d77ed04d0ef52f&format=json',
      // responseType: 'stream'
    })
      .then((responseType)=>{
        // console.log(response.data.artist.name);
        const cantante=responseType.data.artist.image[3]['#text'];
        const canciones=responseType.data.tracks
        this.setState({cantante})
        this.setState({canciones})
        // console.log(response.data.artist);
        // console.log(response)
        
      });
      axios({
        metodo:'get',
        url: 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=22bf14aab4875164b7d77ed04d0ef52f&format=json',
        // responseType: 'stream'
      })
        .then((responseSting)=>{
          // console.log(response.data.artist.name);
          const cantanteCher=responseSting.data.artist.image[3]['#text'];
          this.setState({cantanteCher})
          // console.log(response.data.artist);
          // console.log(response)
          
        });
        axios({
          metodo:'get',
          url: 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Sia&api_key=22bf14aab4875164b7d77ed04d0ef52f&format=json',
          // responseType: 'stream'
        })
          .then((responseCher)=>{
            // console.log(response.data.artist.name);
            const cantanteSia=responseCher.data.artist.image[3]['#text'];
            this.setState({cantanteSia})
            // console.log(response.data.artist);
            // console.log(response)
            
          });
          axios({
            metodo:'get',
            url: 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Sia&api_key=22bf14aab4875164b7d77ed04d0ef52f&format=json',
            // responseType: 'stream'
          })
            .then((responseCher)=>{
              // console.log(response.data.artist.name);
              const cantanteSia=responseCher.data.artist.image[3]['#text'];
              this.setState({cantanteSia})
              // console.log(response.data.artist);
              // console.log(response)
              
            });
            axios({
              metodo:'get',
              url: 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Michael+Jackson&api_key=22bf14aab4875164b7d77ed04d0ef52f&format=json',
              // responseType: 'stream'
            })
              .then((response)=>{
                // console.log(response.data.artist.name);
                const cantanteMichel=response.data.artist.image[3]['#text'];
                this.setState({cantanteMichel})
                // console.log(response.data.artist);
                // console.log(response)
                
              });
              axios({
                metodo:'get',
                url: 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Paul+McCartney&api_key=22bf14aab4875164b7d77ed04d0ef52f&format=json',
                // responseType: 'stream'
              })
                .then((response)=>{
                  // console.log(response.data.artist.name);
                  const cantanteBe=response.data.artist.image[3]['#text'];
                  this.setState({cantanteBe})
                  // console.log(response.data.artist);
                  // console.log(response)
                });
                



    axios.get('http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=22bf14aab4875164b7d77ed04d0ef52f&artist=Cher&album=Believe&format=json')  
      .then(responseSingCher=>{
        const singCher=responseSingCher.data.album.tracks;
        this.setState({canciones:singCher})
      })
  };

  addWork(response){
      const nameSing = response.data.album.tracks.track[0].name;
      this.setState({canciones: nameSing});
  };

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }



  render() {
    const { index, direction } = this.state;

    return (
     
    <div>
      <h1>canciones</h1>
        <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <img width={550} height={290} alt="900x500" src={this.state.cantante} />
          <Carousel.Caption>
            <h3>Sting</h3>
            <p></p>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={550} height={290} alt="900x500" src={this.state.cantanteCher} />
          <Carousel.Caption>
            
            <h3>Cher</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img width={550} height={290} alt="900x500" src={this.state.cantanteSia} />
          <Carousel.Caption>
            <h3>Sia</h3>
            <p>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img width={550} height={290} alt="900x500" src={this.state.cantanteMichel} />
          <Carousel.Caption>
            <h3>Michael Jackson</h3>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img width={550} height={290} alt="900x500" src={this.state.cantanteBe} />
          <Carousel.Caption>
            <h3>Paul McCartney</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    )
  }
}


export default App;