import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import FootNav from '../../components/FootNav'
import Header from '../../components/Head'
import HomeSwiper from '../../components/Swiper'
import bannar1 from '../../static/images/image1.jpg'
import bannar2 from '../../static/images/image2.jpg'
import bannar3 from '../../static/images/image3.jpg'
import HomeHot from './HomeHot';
import { connect } from "react-redux";
class Home extends Component {
  render() { 
    return ( 
      <div>
        <Header cityName={this.props.city.cityName}/>
        <HomeSwiper banners = {[bannar1,bannar2,bannar3]} />
        <HomeHot />
        Home
        <FootNav />
      </div>
     );
  }
}

const mapStateToPropos = (state)=>{
  return{
    city:state.city
  }
}
 
export default connect(mapStateToPropos)(Home);