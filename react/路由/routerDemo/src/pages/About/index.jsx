import React, { Component } from 'react';
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    console.log('About组件收到的props是',this.props)
    return ( 
      <h3>我是About组件</h3>
     );
  }
}
 
export default About;