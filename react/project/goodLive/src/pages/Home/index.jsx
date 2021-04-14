import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import FootNav from '../../components/FootNav'
import Header from '../../components/Head'
import HomeSwiper from '../../components/Swiper'
class Home extends Component {
  render() { 
    return ( 
      <div>
        <Header />
        <HomeSwiper />
        Home
        <FootNav />
      </div>
     );
  }
}
 
export default Home;