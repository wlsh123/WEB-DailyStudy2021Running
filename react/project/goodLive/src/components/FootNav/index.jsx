import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import './style.less'
import '../../static/css/font/iconfont.css'
class FootNav extends Component {
  render() {
    return (
      <div className='nav-footer'>
        <ul className='clear-fix'>
          <li>
            <NavLink exact to='/'>
              <i className='iconfont icon-shouye'></i>
              首页
            </NavLink>
          </li>
          <li>
            <NavLink to='/shop'>
              <i className='iconfont icon-shangcheng'></i>
              商城
            </NavLink>
          </li>
          <li>
            <NavLink to='/life'>
              <i className='iconfont icon-qunfengshenghuofuwuxian'></i>
              生活服务
            </NavLink>
          </li>
          <li>
            <NavLink to='/mine'>
              <i className='iconfont icon-wode'></i>
              我的
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default FootNav;