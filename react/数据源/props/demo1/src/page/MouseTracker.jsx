import React, { Component } from 'react';
import Cat from '../component/Cat';
import Mouse from '../component/Mouse';
class MouseTracker extends Component {
    render() { 
        return ( 
            <div>
                <h1>移动鼠标！</h1>
                <Mouse render={mouse=>(<Cat mouse={mouse}/>)} />
            </div>
         );
    }
}
 
export default MouseTracker;