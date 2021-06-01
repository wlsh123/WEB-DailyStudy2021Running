import React, { Component } from 'react';
class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(this.props)
        return ( 
            <div>child</div>
         );
    }
}
 
export default Child;