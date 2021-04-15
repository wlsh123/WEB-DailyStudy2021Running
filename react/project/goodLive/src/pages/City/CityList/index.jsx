import React, { Component } from "react";
import "./style.less";
class CityList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityList: ["成都", "北京", "上海", "广州", "深圳", "杭州"],
    };
  }
  clickChangeCity(data) {
    console.log(data);
  }
  render() {
    const cityList = this.state.cityList;
    // console.log(cityList);
    return (
      <div className="city-list-container">
        <h3>热门城市</h3>
        <ul className="clear-fix">
          {cityList.map((city, index) => {
            return (
              <li key={index} onClick={this.clickChangeCity.bind(this, city)}>
                <span>{city}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CityList;
