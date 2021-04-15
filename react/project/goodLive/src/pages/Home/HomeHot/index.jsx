import React, { Component } from 'react';
import HomeHotView from '../HomeHotView';
import api from '../../../api'
class HomeHot extends Component {
  constructor(props){
    super(props)
    this.state={
      homehot1:[],
      homehot2:[]
    }
  }

  componentDidMount(){ 
    api.getHomehot1().then(res=>res.json()).then(data=>{
      // console.log(data);
      this.setState({
        homehot1:data
      })
    })

    api.getHomehot2().then(res => res.json()).then(data => {
      this.setState({
        homehot2:data
      })
    })
   }
  render() { 
    const {homehot1, homehot2} = this.state
    return ( 
      <div>
        {
          homehot1 > 0 ? <HomeHotView data={homehot1} title={"热销单品"} /> : <div>等待数据加载...</div>
        }
        {
          homehot2 > 0 ? <HomeHotView data={homehot2} title={"家庭常用"} /> : <div>等待数据加载...</div>
        }
      </div>
     );
  }
}
 
export default HomeHot;