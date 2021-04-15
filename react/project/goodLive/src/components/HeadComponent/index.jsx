import React, { Component } from 'react';
import './style.less'
class HeadComponent extends Component {
  clickBackHandle=()=>{
    window.history.back()
    // this.props.history.push('/')
  }
  render() { 
    return ( 
      <div id='common-header'>
        <span className='back-icon' onClick={this.clickBackHandle}>
          <i className='iconfont icon-shouye'></i>
        </span>
        <h1>{this.props.title}</h1>
      </div>
     );
  }
}
 
export default HeadComponent;