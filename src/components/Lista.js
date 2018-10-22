import React, { Component } from 'react';
// import axios from 'axios';
// import Counter from './Counter'


const Lista = (props) => {
    const listaCanciones = props.listaCanciones;
    console.log(listaCanciones)

        // const listSing = listaCanciones.map((sing) =>
        //     <li>{sing}</li>
        // );
    // }
    return (
        <p>{listaCanciones}</p>
    )

}



export default Lista

