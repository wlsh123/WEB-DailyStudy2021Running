import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import FootNav from '../../components/FootNav'
import Header from '../../components/Head'
class Home extends Component {
  render() { 
    return ( 
      <div>
        <Header />
        
        Home
        <FootNav />
      </div>
     );
  }
}
 
export default Home;