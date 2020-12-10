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
    render() {
        return (
            <div>
                <h2>双向数据绑定</h2>
                <p>{this.state.username}</p><input value={this.state.username} onChange={this.inputChange}/>
            </div>
        );
    }
}

export default TodoList;