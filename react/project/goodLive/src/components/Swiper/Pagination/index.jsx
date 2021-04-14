import React, { Component } from 'react';
import './style.less'
class Pagination extends Component {
    render() {
        const {dots, index} = this.props
        const arr = new Array(dots).fill(1)
        return (
           <div className='swiper-pagination'>
                <ul>
                    {
                        arr.map((ele, i)=>{
                            return <li key={i} className={index === i ? 'selected':''}></li>
                        })
                    }
                </ul>
           </div>
        );
    }
}

export default Pagination;