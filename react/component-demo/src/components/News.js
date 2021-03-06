import React, {Component} from "react";
//import logo from '../asserts/images/logo.svg';
class News extends Component{
    constructor(props){
        super(props);
        this.state={
            msg:"新闻",
            list:["aaa","bbb","ccc","ddd"],
            list2:[<h2 key="1">我是一个h2</h2>,<h2 key="2">我是一个h2</h2>,<h2 key="3">我是一个h2</h2>],
            list3:[
                {title:"新闻111"},
                {title:"新闻111"},
                {title:"新闻111"}
            ],
            color:"red",
            style:{
                color: "red",
                fontSize:"10px"
            }
        }
    }
    render(){
        let listResult = this.state.list2.map(function(value,key){
            return <li key={key}>{value}</li>
        })
        // let list3Result = this.state.list3.map(function(value,key){
        //     return <li>{value.title}</li>
        // })
        return(
            <div>
                <div>{this.state.msg}</div>
                {/* <img src={logo} alt="111" style={this.state.style}/> */}
                <div className="this.state.color">222222222</div>
                <div style={this.state.style}>33333333</div>
                <ul>{listResult}</ul>
                {/* <li>{this.state.list}</li> */}
                {
                    this.state.list3.map(function(value,key){
                        return <li>{value.title}</li>
                    })
                }
            </div>
        )
    }
}
export default News;