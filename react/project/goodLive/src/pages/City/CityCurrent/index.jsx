import React, { Component} from 'react';
import './style.less'
class CityCurrent extends Component {
  render() { 
    return ( 
      <div className='current-city'>
        <h2>当前城市:{this.props.cityName}</h2>
      </div>
     );
  }
}
 
export default CityCurrent;