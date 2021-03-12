import React, { Component } from 'react'

export default class App extends Component {
    constructor(props){
        console.log("01.构造函数")
        super(props);
        this.state={

        }
    }
    static getDerivedStateFromProps(props, state){
        console.log("02.getDerivedStateFromProps执行")
        return{
            
        }
    }
    componentWillMount(){//将要过时的函数

    }
    render() {
        return (
            <div>
                11111
            </div>
        )
    }
}
