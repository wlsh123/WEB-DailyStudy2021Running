import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from './Pagination'
import './style.less'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
class Swiper extends Component {
    constructor(props){
        super(props)
        this.state = {
            index: 0,
          };    
    }
    handleChangeIndex = index => {
        // console.log(index)
        this.setState({
          index:index,
        });
      };
    render() {
        const banners = this.props.banners
        const {index} = this.state
        return (
           <div className='swiper'>
                <AutoPlaySwipeableViews interval={3000} onChangeIndex={this.handleChangeIndex}>
                    {
                        banners.map((bannar,index)=>{
                            return(
                                <div className='swiper-view' key={index}>
                                    <img src={bannar} alt=''/>
                                </div>
                            )
                        })    
                    }
                </AutoPlaySwipeableViews>
                <Pagination dots={3} index={index} />
           </div>
        );
    }
}

export default Swiper;