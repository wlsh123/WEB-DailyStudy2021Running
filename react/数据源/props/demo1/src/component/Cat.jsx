import React, { Component } from 'react';
import aotem from '../assets/aotm.jpg';
class Cat extends Component {
    render() { 
        return ( 
            <img src={aotem} style={{position:'absolute', left:this.props.mouse.x, top:this.props.mouse.y}}/>
         );
    }
}
 
export default Cat;