import React, {Component} from 'react';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            msg:"我是一个home组件.",
            message:"我是一个message",
            title:"我是一个title",
            userName:"itYing",
            style:{
                color:"red",
                fontSize:"40px"
            }
        }
        this.message = this.getMessage.bind(this);   
    };
    run(){
        alert("我是一个run方法！");
    };
    getData(){
        alert(this.state.msg);
    };
    getMessage(){
        alert(this.state.message);
    };
    getName=()=>{
        alert(this.state.userName);
    }
    setMessage=()=>{
        this.setState({
            message:"这是修改后的message"
        })
    }
    render(){
        return(
            <div>
                <h2>{this.state.message}</h2>
                <div title={this.state.title}>我是一个div</div>

                <br/>
                <label htmlFor="name">姓名</label>
                <input id="name"/>

                <br/>
                <div style={this.state.style}>11111111111</div>
                <button onClick={this.run}>执行方法</button>
                <br />
                <br />
                <button onClick={this.getData.bind(this)}>获取数据---第一种改变this指向的方法</button>
                <button onClick={this.message}>获取数据---第二种改变this指向的方法</button>
                <button onClick={this.getName}>获取数据---第三种改变this指向的方法</button>

                <button onClick={this.setMessage}>改变state属性的值</button>
            </div>
        )
    }
}
export default Home;