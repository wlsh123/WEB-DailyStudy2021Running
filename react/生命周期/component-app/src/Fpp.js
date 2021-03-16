import React from 'react';

class Fpp extends React.Component{
  constructor(props){
    super(props)
    this.state={
      newsArr:[]
    }
  }
  componentDidMount(){
    setInterval(() => {
      const { newsArr } = this.state;
      const news = '新闻' + (newsArr.length + 1)
      this.setState({ newsArr: [news, ...newsArr] })
    }, 1000);
  }
  getSnapshotBeforeUpdate(){
    return this.refs.list.scrollHeight
  }
  componentDidUpdate(preProps, preState, height){
    this.refs.list.scrollTop += this.refs.list.scrollHeight - height;
  }
  render(){
    return(
      <div className="list" ref="list">
        {
          this.state.newsArr.map((n, index) => {
            return <div key={index} className="news">{n}</div>
          })
        }
      </div>
    )
  }
}
export default Fpp;