import React, { Component } from 'react';
import './style.less'
class HomeHotView extends Component {
  render() {
    const data = this.props.data;
    const title = this.props.title
    // console.log(data)
    return (
      <div className='hotproduct'>
        <h3>{title}</h3>
        <div className='hot-container'>
          <ul className='clear-fix'>
            {
              data.map((d, index)=>{
                return(
                  <li key={d.id}>
                    <a href={d.link}>
                      <img src={d.img} alt={d.title} />
                      <span>{d.title}</span>
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