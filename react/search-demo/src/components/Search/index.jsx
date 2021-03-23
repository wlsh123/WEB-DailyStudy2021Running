import React, { Component } from 'react';
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  search=()=>{
    // const {keyWordElement:{value}} = this;  //连续解构赋值
    const {keyWordElement:{value:keyword}} = this; //连续解构赋值并重命名
    console.log(keyword);
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