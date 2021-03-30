import React, { Component } from 'react';
// import {Link, Route} from 'react-router-dom';
import {NavLink, Route, Switch, Redirect} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About'
import Header from './component/Header';
// import MyNavLink from './component/MyNavLink';
class APP extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生html中，靠<a>跳转不同的页面 */}
              {/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item active" href="./home.html">Home</a> */}

              {/* 在react中靠路由链接实现切换组件 */}
                {/* <Link className="list-group-item" to='/about'>About</Link><br />
                <Link className="list-group-item" to='/home'>Home</Link> */}

              <NavLink activeClassName="atguigu" className="list-group-item" to='/about'>About</NavLink>              
              <NavLink activeClassName="atguigu" className="list-group-item" to='/home'>Home</NavLink>

              {/* 使用自己封装的NavLink */}
              {/* <MyNavLink to='/about' >About</MyNavLink>
              <MyNavLink to='/home' >Home</MyNavLink> */}
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Switch>
                  <Route exact path="/about" component={About} />
                  <Route exact path="/home" component={Home} />
                  <Redirect to="/about"/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
 
export default APP;