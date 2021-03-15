//React.createRef()
import React from "react";

class Bpp extends React.Component{
  // React.createRef()调用后可以返回一个容器，该容器可以存储被ref所标识的节点,该容器是“专人专用”的。
  myRef = React.createRef();
  showData = ()=>{
    // console.log(this.myRef.current);
    alert(this.myRef.current.value);
  }
  render(){
    return(
      <div>
        <input ref={this.myRef} type="text" placeholder="please input"/>
        <button onClick={this.showData}>Click</button>
      </div>
    )
  }
}
export default Bpp;