import React, { Component } from 'react';
import pubSub from 'pubsub-js'
import './index.css'
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isFirst: true,
      isLoading: false,
      err: '',
    }
  }
  componentDidMount() {
    //订阅消息
    this.token = pubSub.subscribe('PUBSUB', (msg, stateObj) => {
      console.log(msg + '----' + stateObj);
      this.setState(stateObj)
    })
  }

  componentWillUnmount() {
    //取消消息
    pubSub.unsubscribe(this.token)
  }
  render() {
    const { users, isFirst, isLoading, err } = this.state
    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> :
            isLoading ? <h2>Loading...</h2> :
              err ? <h2 style={{ color: 'red' }}>{err}</h2> :
                users.map(userObj => {
                  return (
                    <div key={userObj.id} className="card">
                      <a rel="noreferrer" href={userObj.html_url} target="_blank">
                        <img alt="head_portrait" src={userObj.avatar_url} style={{ width: '100px' }} />
                      </a>
                      <p className="card-text">{userObj.login}</p>
                    </div>
                  )
                })
        }
      </div>
    );
  }
}

export default List;