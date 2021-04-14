import React, { Component } from 'react';
import HomeHotView from '../HomeHotView';
import api from '../../../api'
class HomeHot extends Component {

  componentDidMount(){
    // api.getHomehot1().then(res=>res.json()).then(data=>{
    //   console.log(data);
    // })
    api.getHomehot1().then(res => {
      console.log(res)
    })
  }
  render() { 
    return ( 
      <div>
        <HomeHotView />
      </div>
     );
  }
}
 
export default HomeHot;