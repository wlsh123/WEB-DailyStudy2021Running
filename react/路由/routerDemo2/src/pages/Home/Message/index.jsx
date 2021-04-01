import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
    messageArr:[
      {id:'01', title:'消息1'},
      {id:'02', title:'消息2'},
      {id:'03', title:'消息3'}
    ]
  }
  replaceShow=(id, title)=>{
    //编写一段代码，实现跳转到Detail组件，且为replace跳转
    //replace跳转+携带params参数
    // this.props.history.replace(`/home/message/detail/${id}/${title}`);
    //replace跳转+携带search参数
    // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`);
    //replace跳转+携带state参数
    this.props.history.replace(`/home/message/detail`, {id, title});
  }

  pushShow=(id, title)=>{
    //push跳转+携带params参数
    // this.props.history.push(`/home/message/detail/${id}/${title}`)
    //push跳转+携带search参数
    // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`);
    //push跳转+携带state参数
    this.props.history.push(`/home/message/detail`, { id, title });
  }

  back=()=>{
    this.props.history.goBack();
  }
  forward=()=>{
    this.props.history.goForward();
  }
  go=()=>{
    this.props.history.go(-2);
  }
  render() {
    const {messageArr} = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map((message)=>{
              return(
                <li key={message.id}>
                  {/* 向路由组件传递params参数 */}
                  {/* <Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link>&nbsp;&nbsp; */}
                  {/* 向路由组件传递search参数 */}
                  {/* <Link to={`/home/message/detail/?id=${message.id}&title=${message.title}`}>{message.title}</Link>&nbsp;&nbsp; */}
                  {/* 向路由组件传递state参数 */}
                  <Link replace to={{ pathname: '/home/message/detail', state: { id: message.id, title: message.title}}}>{message.title}</Link>&nbsp;&nbsp;

                  <button onClick={() => this.pushShow(message.id, message.title)}>push查看</button>&nbsp;
                  <button onClick={() => this.replaceShow(message.id, message.title)}>replace查看</button>
                </li>
              )
            })
          }
        </ul>
        <hr/>
        {/* 声明接收params参数 */}
        {/* <Route path='/home/message/detail/:id/:title' component={Detail}/> */}
        {/* search参数无需声明接收 正常注册路由即可*/}
        {/* <Route path='/home/message/detail' component={Detail} /> */}
        {/* state参数无需声明接收，正常注册路由即可 */}
        <Route path='/home/message/detail' component={Detail} />

        <button onClick={this.back}>回退</button>
        <button onClick={this.forward}>前进</button>
        <button onClick={this.go}>GO</button>
      </div>
    )
  }
}
