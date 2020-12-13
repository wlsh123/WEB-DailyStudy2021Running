import React, { Component } from 'react';
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:""
         };
    }
    inputChange=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    /** 
     * 约束性组件和非约束性组件：
     * 非约束性：<input type="text" defaultValue="a"/>  这个defaultValue其实就是原生DOM中的value属性
     * 这样写出来的组件，其value值就是用户输入的内容，react完全不管理输入的过程。
     * 
     * 约束性组件：<input type="text" value={this.state.username} onChange={this.handleUsername} />
     * 这里的value不再是一个写死的值，他是this.state.username,是由this.handleUsername管理的。
     * 这个时候实际上input的value根本不是用户输入的内容，而是onChange事件触发后，由于this.setState导致了一次重新渲染
    */
    render() {
        return (
            <div>
                <h2>双向数据绑定</h2>
                {/* MVVM */}
                <p>{this.state.username}</p><input type="text" value={this.state.username} onChange={this.inputChange}/>
                {/* MV */}
                <input defaultValue={this.state.username} type="text"/>
            </div>
        );
    }
}

export default TodoList;