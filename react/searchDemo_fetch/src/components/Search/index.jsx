import React, { Component } from 'react';
import pubSub from 'pubsub-js'
// import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  search=async ()=>{
    // const {keyWordElement:{value}} = this;  //连续解构赋值
    const {keyWordElement:{value:keyWord}} = this; //连续解构赋值并重命名
    console.log(keyWord);
    //发送请求前通知App更新状态
    pubSub.publish('atguigu', { isFirst: false, isLoading: true })
    //发送网络请求---使用fetch发送（未优化）
    /*fetch(`/api1/search/users2?q=${keyWord}`).then(
      response=>{
        console.log('联系服务器成功了');
        return response.json()
      },
      error=>{
        console.log('联系服务器失败了', error);
        return new Promise(()=>{});
      }
    ).then(
      response => { console.log('获取数据成功了', response); },
      error => { console.log('获取数据失败了', error); }
    )*/

    //发送网络请求---使用fetch发送（优化)
    try {
      const response = await fetch(`/api1/search/users2?q=${keyWord}`)
      const data = await response.json()
      console.log(data);
      pubSub.publish('atguigu', { isLoading: false, users: data.items })
    } catch (error) {
      console.log('请求出错', error);
      pubSub.publish('atguigu', { isLoading: false, err: error.message })
    }
  }
  render() { 
    return ( 
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <div>
          <input ref={c=>{this.keyWordElement = c}} type="text" placeholder="输入关键词点击搜索" />&nbsp;
					<button onClick={this.search}>搜索</button>
        </div>
      </section>
     );
  }
}
 
export default Search;