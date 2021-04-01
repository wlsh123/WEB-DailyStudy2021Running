import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  back=()=>{
    this.props.history.goBack();
  }
  forward=()=>{
    this.props.history.goForward();
  }
  render() { 
    console.log('Header组件收到的props是：',this.props)
    return ( 
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router Demo</h2>
            <button onClick={this.back}>回退</button>&nbsp;
            <button onClick={this.forward}>前进</button>
          </div>
        </div>
      </div>
     );
  }
}
 
export default withRouter(Header);
//withRouter可以加工一般组件，让一般组件具备路由组件所特有的API，
//withRouter的返回值是一个新组件