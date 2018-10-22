import React, { Component } from 'react';
import Imagen from './components/Imagen';
import Lista from './components/Lista';
import Counter from './components/Counter';
import Carousel from './container/Carousel';
import axios from 'axios';
import Inf from './info/data.json'
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            properties: Inf,
            property: Inf[0],
            arrCanciones: this.componentDidMount(Inf[0].canciones)
        }

    }


    componentDidMount=(can)=>{
        axios.get(can)
            .then((res)=>{
                const arr=[]
                for(let i=0; i<10; i++){
                    arr.push(res.data.toptracks.track[i].name)
                }
                this.setState({
                    arrCanciones: arr
                })
            })
            // console.log(arrCanciones)
    }

    // renderCanciones=()=>{
    //     const {arrCanciones} = this.state;
    //     return arrCanciones.map(song=>{
    //         const { nameSong, counter, id}= song;
    //         return (
    //             <Song
    //              key={id}
    //              namesong={nameSong}
    //              counter={counter}
    //               />
    //         )
    //     })
    // }

    //   componentDidMount=()=>{
    //     //    cant= this.state.property
    //   axios.get(this.state.property.cancion)
    //     .then((response)=>{
    //         const track = (response.data.toptracks.track);
    //         const arr = [];
    //          for (let i = 0; i < 10; i++) {
    //           arr.push({name: track[i].name,
    //                     score: 0});
    //           this.setState({
    //             canciones: arr
    //           })
    //         }


    //     })
    // }
    nextSelect = () => {
        if (this.state.property.index >= 0 && this.state.property.index< 4) {
            this.setState({
                property: Inf[this.state.property.index + 1],
                arrCanciones: this.componentDidMount(Inf[this.state.property.index + 1].canciones)


            });
        } else if (this.state.property.index === 4) {
            this.setState({
                properties: Inf,
                property: Inf[0],
                arrCanciones: this.componentDidMount(Inf[0].canciones)

            });
        }

    }

    afterSelect = () => {
        if (this.state.property.index >0 ) {
            this.setState({
                property: Inf[this.state.property.index -1],
                arrCanciones: this.componentDidMount(Inf[this.state.property.index -1].canciones)

            });
        } else if (this.state.property.index === 0) {
            this.setState({
                properties: Inf,
                property: Inf[4],
                arrCanciones: this.componentDidMount(Inf[4].canciones)
            });
        }

    }

    render() {
        const {arrCanciones}=this.state;
        return (
            <div>
                <h1>Canciones Top</h1>
                {/* <Carousel/> */}
                {this.state.property.name}
                <Imagen imgCantante={this.state.property.image} />
                <p>
                    <button onClick={this.nextSelect}>siguiente</button>
                </p>
                <p>
                    <button onClick={this.afterSelect}>anterior</button>
                </p>
                <p>
                    {arrCanciones}
                </p>

                <Lista listaCanciones={this.state.arrCanciones} />



            </div>
        )

    }
}









export default App;