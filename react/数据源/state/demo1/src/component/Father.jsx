import React, { Component } from 'react';
import Child from './Child'
class Father extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:'father',
            date:'1111'
         }
    }
    render() { 
        return ( 
            <div>
                <div>father</div>
                <Child {...this.state}>123</Child>
            </div>
         );
    }
}
 
export default Father;