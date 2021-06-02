import React, { Component } from 'react';
import { Consumer } from '../util/context';
class GrandSon extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Consumer>
                {context => (
                    <div>
                        孙组件 fruit={context.fruit}
                        <br />
                        <button type="button" onClick={()=>context.countUtil.addCount(2)}>+2</button>
                        <button type="button" onClick={()=>context.countUtil.delCount(3)}>-3</button>
                        <hr />
                    </div>
                )}
            </Consumer>
         );
    }
}
 
export default GrandSon;