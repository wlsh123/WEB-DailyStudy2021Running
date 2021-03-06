import React, {Component} from 'react';

class Like extends Component{
    constructor(props){
        super(props);
        this.state={
            msg: "abc",
            username:""
        }
    }
    run=(event)=>{
        console.log(event);
        console.log(event.target);
        alert(event.target.getAttribute('sid'));
    }
    inputChange=(e)=>{
        this.setState({
            username:e.target.value
        });
        console.log(this.state.username);
    }
    getInput=()=>{
        alert(this.state.username);
    }
    render(){
        return(
            <div>
                <button sid={this.state.msg} onClick={this.run}>事件对象</button>
                <br/>
                {/* 获取表单事件 */}
                <input onChange={this.inputChange}/><button onClick={this.getInput}>获取Input的值</button>
            </div>
        )
    }
}
export default Like;