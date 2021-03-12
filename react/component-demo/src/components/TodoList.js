import React, { Component } from 'react';
import '../asserts/css/index.css';
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:"",
            list:[]
        };
    }
    // inputChange=(e)=>{
    //     this.setState({
    //         username:e.target.value
    //     })
    // }
    /** 
     * 约束性组件和非约束性组件：
     * 非约束性：<input type="text" defaultValue="a"/>  这个defaultValue其实就是原生DOM中的value属性
     * 这样写出来的组件，其value值就是用户输入的内容，react完全不管理输入的过程。
     * 
     * 约束性组件：<input type="text" value={this.state.username} onChange={this.handleUsername} />
     * 这里的value不再是一个写死的值，他是this.state.username,是由this.handleUsername管理的。
     * 这个时候实际上input的value根本不是用户输入的内容，而是onChange事件触发后，由于this.setState导致了一次重新渲染
    */
   addData=(e)=>{
        // alert(this.state.msg);
        let tempList = this.state.list;
        // console.log(this.state.list)
        tempList.push(this.state.msg);
        // console.log(tempList);
        this.state.msg="";
        this.setState({
            list:tempList
        })
    }
   inputData=(e)=>{
    this.setState({
        msg:e.target.value
    })
   }
   removeData=(key)=>{
        let tempList = this.state.list;
        tempList.splice(key, 1);
        this.setState({
            list:tempList
        })

   }
    render() {
        return (
            // <div>
            //     <h2>双向数据绑定</h2>
            //     {/* MVVM */}
            //     <p>{this.state.username}</p><input type="text" value={this.state.username} onChange={this.inputChange}/>
            //     {/* MV */}
            //     <input defaultValue={this.state.username} type="text"/>
            // </div>

            <div>
                <h2>React TodoList</h2>
                <input onChange={this.inputData} value={this.state.msg} /><button onClick={this.addData}>增加+</button>
                <hr />
                <ul className="list">
                    {
                        this.state.list.map((value, key)=>{
                            return (
                                <li key={key}>{value} ---<button onClick={this.removeData.bind(this,key)}>删除-</button></li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default TodoList;