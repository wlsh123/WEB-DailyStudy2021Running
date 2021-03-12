import React, { Component } from 'react';
class TodoListNew extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {
                    title:'学习h5',
                    checked:true
                },{
                    title:'学习css',
                    checked:false
                },{
                    title:'学习js',
                    checked:true
                },{
                    title:'学习vue.js',
                    checked:false
                }
            ]
         };
    }
    addData=(e)=>{

    }
    render() {
        return (
            <div>
                <h2>待办事项</h2>
                <hr/>
                <ul>
                    {
                        this.state.list.map(function(value, key){
                            if(!value.checked){
                                return(
                                    <li>
                                        <input type="checkbox" checked={value.checked} />
                                        {value.title}   --<button>delete</button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
                <h2>已完成事项</h2>
                <hr/>
                <ul>
                {
                        this.state.list.map(function(value, key){
                            if(value.checked){
                                return(
                                    <li>
                                        <input type="checkbox" checked={value.checked} />
                                        {value.title}   --<button>delete</button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default TodoListNew;