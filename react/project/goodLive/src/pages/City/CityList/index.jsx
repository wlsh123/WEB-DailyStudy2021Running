import React, { Component } from 'react';
import './style.less'

class CityList extends Component {
  state={
    city:['成都','北京','广州','上海','深圳','杭州','苏州','扬州','西安','昆明','桂林','沈阳']
  }
  clickChangeCity(c){
    // console.log(c);
    this.props.changeCity({
      cityName:c
    })
    window.history.back();
  }
  render() { 
    const city = this.state.city
    // console.log(city)
    return ( 
      <div className='city-list-container'>
        <h3>热门城市</h3>
        <ul className='clear-fix'>
          {
            city.map((city,index)=>{
              return(
                <li key={index} onClick={this.clickChangeCity.bind(this,city)}>
                  <span>{city}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
     );
  }
}
 
export default CityList;