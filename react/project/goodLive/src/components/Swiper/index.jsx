import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import Pagination from './Pagination'
import './style.less'
class Swiper extends Component {
    constructor(props){
        super(props)
        this.state = {
            index: 0,
          };    
    }
    handleChangeIndex = index => {
        console.log(index)
        this.setState({
          index,
        });
      };
    render() {
        const banners = this.props.banners
        const {index} = this.state
        return (
           <div className='swiper'>
                <SwipeableViews onChangeIndex={this.handleChangeIndex}>
                    {
                        banners.map((bannar,index)=>{
                            return(
                                <div className='swiper-view' key={index}>
                                    <img src={bannar} alt=''/>
                                </div>
                            )
                        })    
                    }
                </SwipeableViews>
                <Pagination dots={3} index={index} onChangeIndex={this.handleChangeIndex} />
           </div>
        );
    }
}

export default Swiper;