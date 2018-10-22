
import React, { Component } from 'react';
import axios from 'axios';




class Carousel extends Component {

    constructor(props){
        super(props);

        const ExtracInfo=()=>{
                axios.get('../info/data.json')
                .then((respuesta)=>{
                    return(
                    console.log(respuesta) 
                    )       
                })
        }


    }

    render(){
        return(
            <div ExtracInfo>
                kamskamsamsoiamosimaiosmoia
                {this.ExtracInfo()}
            </div>
        )
    }

}



export default Carousel;

