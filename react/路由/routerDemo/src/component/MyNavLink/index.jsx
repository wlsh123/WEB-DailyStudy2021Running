import React, { Children, Component } from 'react';
import {NavLink} from 'react-router-dom';
class MyNavLink extends Component {
  render() { 
    // const {children} = this.props
    return ( 
      // <NavLink activeClassName='atguigu' className='list-group-item' {...this.props}>{children}</NavLink>
      < NavLink activeClassName='atguigu' className='list-group-item' {...this.props} />
     );
  }
}
 
export default MyNavLink;