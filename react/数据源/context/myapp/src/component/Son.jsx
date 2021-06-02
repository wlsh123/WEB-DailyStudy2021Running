import React, { Component } from 'react';
import { Consumer } from '../util/context';
import GrandSon from './GrandSon';
class Son extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Consumer>
                {context => (
                    <div>
                        子组件 fruit = {context.fruit}
                        <hr />
                        <GrandSon />
                    </div>
                )}
            </Consumer>
         );
    }
}
 
export default Son;