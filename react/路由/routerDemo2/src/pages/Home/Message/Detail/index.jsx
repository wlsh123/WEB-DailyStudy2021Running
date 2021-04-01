import React, { Component } from 'react';
// import qs from 'querystring';
const DetailData = [
  {id:'01', content:'你好，中国'},
  {id:'02', content:'你好，北京'},
  {id:'03', content:'你好，望京'}
]
class Detail extends Component {
  render() { 
    // console.log(this.props.location.state)
    // 接收params参数
    // const {id, title} = this.props.match.params

    // 接收search参数
    // const {search} = this.props.location
    // console.log(search.slice(1));
    // const {id, title} = qs.parse(search.slice(1));
    // 接收state参数
    const {id ,title} = this.props.location.state || {}
    // console.log(params)
    const findResult = DetailData.find(detailObj=>{
      return detailObj.id === id;
    }) || {};
    // console.log(findResult);
    return ( 
      <div>
        <ul>
          <li>编号:{id}</li>
          <li>标题:{title}</li>
          <li>内容:{findResult.content}</li>
        </ul>
      </div>
     );
  }
}
 
export default Detail;