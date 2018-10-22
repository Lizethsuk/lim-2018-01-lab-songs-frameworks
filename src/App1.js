import React, { Component } from 'react';
import Imagen from './components/Imagen';
import Lista from './components/Lista';
import Counter from './components/Counter';
import Carousel from './container/Carousel'

import axios from 'axios';
// import { Carousel } from 'react-bootstrap';
// import { GithubCounter } from 'react-reactions'

// import Carousel.Caption from '.Components/Carousel.Caption.css';
const App=()=>{
    // cant = ['Katy Perry', 'Taylor Swift', 'Ariana Grande', 'Lady Gaga', 'Adele'];

  // const {cant}= 'Katy Perry'  
  // constructor(props) {
  //   super(props);
  //   // this.afterSelect = this.afterSelect.bind(this);
  //   this.state = {
  //     cantante: 'katy Perry',
  //     index: 0,
  //     direction: 'initial'
  //   };
  // };

  
  // componentDidMount=()=> {
  //   axios.get('https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=' + this.state.cantante  + '&api_key=22bf14aab4875164b7d77ed04d0ef52f&format=json')
  //     .then((response) => {
  //       const infAxios = response.data.toptracks.track;
  //       this.setState({
  //         imagen: infAxios[1].image[3]['#text'],
  //         // cantante: 'katy Perry',
  //         canciones: infAxios,
  //       });
  //     })
  //     .catch(() => {
  //       this.setState({ success: false });
  //     });
  // };

//   componentWillReceiveProps=(singer)=> {
//   axios.get('https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=' + singer + '&api_key=22bf14aab4875164b7d77ed04d0ef52f&format=json')
//     .then((response)=>{
//         // const track = (response.data.toptracks.track);
//         // const arr = [];
//         //  for (let i = 0; i < 10; i++) {
//         //   arr.push(track[i].name);
//         // }
//         this.setState({
//           canciones: response.data.toptracks.track
//         })

//     })
// }


// afterSelect=()=> {
//   const cantante = ['Katy Perry', 'Backstreet Boys', 'Ariana Grande', 'Aleks Syntek', 'Erreway'];
// if(this.state.state==='initial'){
//   this.setState({
//     cantante: cantante[cantante[cantante.length-1]],
//     imagen: this.componentDidMount(cantante[cantante.length-1]),
//     canciones: this.componentDidMount(cantante[cantante.length-1]),
//     index: cantante.length -1,
//     direction: 'direction'
//   })

// }else if(this.state.index>=1 ){
//   this.setState({
//     index: this.state.index -1,
//     // direction: e.direction,
//     cantante: cantante[this.state.index -1],
//     imagen: this.componentDidMount(cantante[this.state.index -1]),
//     canciones: this.componentDidMount(cantante[this.state.index -1]),
//     direction: 'direction'
//   });
//  }else if(this.state.index===0 ){
//   this.setState({
//     index: cantante.length-1,
//     // direction: e.direction,
//     cantante: cantante[cantante.length-1],
//     imagen: this.componentDidMount(cantante.length -1),
//     canciones: this.componentDidMount(cantante.length-1),
//     direction: 'direction'

//   })
//  }
// };

nextSelect=()=>{
  const cantante = ['Katy Perry', 'Taylor Swift', 'Ariana Grande', 'Lady Gaga', 'Adele'];
  if(this.state.state === 'initial' ){
    this.setState({
    
      // direction: e.direction,
      
      imagen: this.componentDidMount(cantante[1]),
      canciones: this.componentDidMount(cantante[1]),
      direction: 'direction'

    })
   
   }else if(this.state.index>=0 ){
    this.setState({
      index: this.state.index +1,
      // direction: e.direction,
      cantante: cantante[this.state.index +1],
      imagen: this.componentDidMount(cantante[this.state.index +1]),
      canciones: this.componentDidMount(cantante[this.state.index +1]),
      direction: 'direction'

    });
   }

}

// render() {
  return (
    <Carousel/>
//     <div>
//       <div>

//         <h1>{this.state.cantante}</h1>
//         <Imagen imgCantante={this.state.imagen}/>
//         {/* <img src={this.state.imagen}/> */}
//       </div>
      
//       <p>
//           <button onClick={this.afterSelect}>anterior</button>
//       </p>
//       <p>        
//           <button onClick={this.nextSelect}>siguiente</button> 
//       </p>
//        <Lista listaCanciones={this.state.canciones}>
//        </Lista>  
//               <Counter/>
  
//     </div>            
  )
// }
}



export default App;