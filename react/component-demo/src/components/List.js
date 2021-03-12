import React, { Component } from 'react';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:""
         };
    }
    inputChange=()=>{
        // 1.ref字符串已被弃用
        let val = this.refs.username.value;
        this.setState({
            username:val
        })
    }
    getInput=()=>{
        alert(this.state.username)
    }
    inputKeyUp=(e)=>{
        console.log(e);
        console.log(e.keyCode);
        if(e.keyCode===13){
            alert(e.target.value);
        }
    }
    render() {
        return (
            <div>
                {/* 我是list组件 */}
                <input ref="username" onChange={this.inputChange}/><button onClick={this.getInput}>获取input的值</button>
                <br/><br/><br/>
                {/* 键盘事件 */}
                <input onKeyUp={this.inputKeyUp}/>
            </div>
        );
    }
}

export default List;