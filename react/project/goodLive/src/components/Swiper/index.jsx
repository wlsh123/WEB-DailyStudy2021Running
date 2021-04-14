import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import bannar1 from '../../static/images/image1.jpg'
import bannar2 from '../../static/images/image2.jpg'
import bannar3 from '../../static/images/image3.jpg'

class Swiper extends Component {
    render() {
        return (
           <div className='swiper'>
                <SwipeableViews>
                    <div className='swiper-view'>
                        <img src={bannar1} alt='' />
                    </div>
                    <div className='swiper-view'>
                        <img src={bannar2} alt='' />
                    </div>
                    <div className='swiper-view'>
                        <img src={bannar3} alt='' />
                    </div>
                </SwipeableViews>
           </div>
        );
    }
}

export default Swiper;