import React, { Component } from 'react';
import './style.less'
class HomeHotView extends Component {
  render() {
    const data = this.props.data;
    const title = this.props.title
    return (
      <div className='hotproduct'>
        <h3>{title}</h3>
        <div className='hot-container'>
          <ul className='clear-fix'>
            {
              data.map((ele, index)=>{
                return(
                  <li key={ele.id}>
                    <a href={ele.link}>
                      <img src={ele.img} alt={ele.title} />
                      <span>{ele.title}</span>
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default HomeHotView;