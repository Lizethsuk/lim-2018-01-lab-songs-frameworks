import React, { Component } from 'react';
import axios from 'axios';


class Lista extends Component {
   constructor(props){
       super(props);
       this.song=props.song,
       this.like=props.like,
       this.dislike=props.dislike
   }
  componentDidMount(){
    axios({
        metodo:'get',
        url: 'http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=cher&api_key=22bf14aab4875164b7d77ed04d0ef52f&format=json',
        // responseType: 'stream'
      })
        .then((responseType)=>{
          // console.log(response.data.artist.name);
          const canciones=responseType.data.tracks
          this.setState({canciones})
          // console.log(response.data.artist);
        const listCanciones= responseType.data.toptracks.track;
            listCanciones.map(obje=>
        {
        //    console.log(obje.name)
        })
          
        });

        

        

  }
  handleClick(e){
    //    console.log('hola')
}
    render(){
        return(
            <p>{this.song}
            <button
             onclick={this.handleClick(this.like)}
             >Like
             </button> 
             <button
             onclick={this.handleClick(this.like)}
             >Dislike</button>{this.handleClick}
             </p>
        )
    }
}

export default Lista

