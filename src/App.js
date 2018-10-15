import React, { Component } from 'react';
import Lista from './components/Lista';
import axios from 'axios';
import './App.css';
import { Carousel } from 'react-bootstrap';
// import Carousel.Caption from '.Components/Carousel.Caption.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    // const listCantante= ['Sting', 'Cher', 'Sia', 'Michael Jackson', 'Bruno Mars'];

    this.state = {
      cantante: '',
      canciones: [],
      imagen: [],
      index: 0,
      direction: null
    };
    // this.addWork = this.addWork.bind(this);
  };

  componentWillMount(cant) {
    axios.get('http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=' + cant + '&api_key=22bf14aab4875164b7d77ed04d0ef52f&format=json')
      .then((response) => {
        const img = response.data.toptracks.track[0].image[3]['#text'];
        // const track = (response.data.toptracks.track);
        // const arr = [];
        // for (let i = 0; i < 10; i++) {
        //   arr.push(track[i].name);
        //   // this.state.canciones.sing
        // }
        // console.log(track)
        // console.log(arr)
        this.setState({
          imagen: img,
          // canciones: arr
        });
      })
      .catch(() => {
        this.setState({ success: false });
      });
  };

  componentWillReceiveProps(singer) {
  axios.get('http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=' + singer + '&api_key=22bf14aab4875164b7d77ed04d0ef52f&format=json')
    .then((response)=>{
        const track = (response.data.toptracks.track);
        const arr = [];
         for (let i = 0; i < 10; i++) {
          arr.push(track[i].name);
          // this.state.canciones.sing
        }
        this.setState({
          canciones: arr
        })


    })
}



//   componentWillReceiveProps(nextProps) {
//     axios.get('http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=' + this.nextProps.cantante + '&api_key=22bf14aab4875164b7d77ed04d0ef52f&format=json')
//       .then((response) => {
//         const img = response.data.toptracks.track[0].image[3]['#text'];
//         const track = (response.data.toptracks.track);
//         const arr = [];
//         for (let i = 0; i < 10; i++) {
//           arr.push(track[i].name);
//           // this.state.canciones.sing
//         }
//         this.setState({
//           imagen: img,
//           canciones: arr
//         });
//       })
//       .catch(() => {
//         this.setState({ success: false });
//       })
  
// }






// addWork(response){
//     const nameSing = response.data.album.tracks.track[0].name;
//     this.setState({canciones: nameSing});
// };

handleSelect(selectedIndex, e) {
  const cantante = ['Katy Perry', 'Taylor Swift', 'Ariana Grande', 'Lady Gaga', 'Rihanna'];
  this.setState({
    index: selectedIndex,
    direction: e.direction,
    cantante: cantante[selectedIndex],
    imagen: this.componentWillMount(cantante[selectedIndex]),
    canciones: this.componentWillReceiveProps(cantante[selectedIndex])
  });
};

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
          <img width={550} height={290} alt="900x500" src={this.state.imagen} />
          <Carousel.Caption>
            <h3>{this.state.cantante}</h3>
            <p>{this.state.canciones}</p>
            <Lista />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={550} height={290} alt="900x500" src={this.state.imagen} />
          <Carousel.Caption>
            <h3>{this.state.cantante}</h3>
            <p>{this.state.canciones}</p>
            <Lista />
            <p>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={550} height={290} alt="900x500" src={this.state.imagen} />
          <Carousel.Caption>
            <h3>{this.state.cantante}</h3>
            <p>{this.state.canciones}</p>
            <Lista />
            <p>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={550} height={290} alt="900x500" src={this.state.imagen} />
          <Carousel.Caption>
            <h3>{this.state.cantante}</h3>
            <p>{this.state.canciones}</p>
            <Lista />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={550} height={290} alt="900x500" src={this.state.imagen} />
          <Carousel.Caption>
            <h3>{this.state.cantante}</h3>
            <p>{this.state.canciones}</p>
            <Lista />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
}



export default App;