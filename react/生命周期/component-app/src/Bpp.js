import React, { Component } from 'react'

class Bpp extends Component{
  state={opacity:1}
  death=()=>{
    clearInterval(this.timer);
    // React.unmountComponentAtNode(document.getElementById('root'))
  };
  componentDidMount(){
    this.timer = setInterval(() => {
      let { opacity } = this.state;
      opacity -= 0.1;
      if (opacity <= 0) {
        opacity = 1;
      }
      this.setState({ opacity })//变量和属性名重名的简写
    }, 200);
  };
  componentWillUnmount(){
    clearInterval(this.timer);
  }
  render(){
    return(
      <div>
        <h1 style={{opacity:this.state.opacity}}>react学不会怎么办呢</h1>
        <button onClick={this.death}>不活了</button>
      </div>
    );
  }
}
export default Bpp;