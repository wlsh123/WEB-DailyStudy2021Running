import React, { Component } from 'react'

class Cpp extends Component {
  constructor(props){
    super(props);
    this.state={
      data:0
    }
  };
  add=()=>{
    this.setState({
      data:this.state.data+1
    })
  };

  flush=()=>{
    this.forceUpdate()
  };
  //新版钩子，构造器后，render前。
  static getDerivedStateFromProps(props){
    console.log('getDerivedStateFromProps');
    return null
  };
  //组件将要挂载的钩子
  componentWillMount(){
    console.log('componentWillMount执行了！');
  }

  //组件挂载完毕的钩子
  componentDidMount() {
    console.log('componentDidMount执行了！');
  };

  //控制组件更新的“阀门”
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate执行了！');
    return true;
  }

  //组件将要卸载的钩子
  componentWillUnmount() {
    console.log('componentWillUnmount执行了！');
  }

  //组件将要更新的钩子
  componentWillUpdate(){
    console.log('componentWillUpdate执行了！');
  }

  getSnapshotBeforeUpdate(){
    console.log('getSnapshotBeforeUpdate');
    return 'snapshot快照';
  }
  //组件更新完毕的钩子
  componentDidUpdate(preProps,preState,snapshotValue){
    console.log('componentDidUpdate执行了！' + preProps + preState+ snapshotValue);
  }
  render() {
    console.log('render执行了！');
    return (
      <div>
        <h1 >现在值为：{this.state.data}</h1>
        <button onClick={this.add}>+1</button>        
        <button onClick={this.flush}>不更改state，更新</button>
      </div>
    );
  }
}
export default Cpp;