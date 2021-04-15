import React, { Component } from 'react';
import CityHead from '../../components/HeadComponent'
import CityCurrent from './CityCurrent'
import CityList from './CityList'
import {connect} from 'react-redux'
import {initCity, changeCity} from '../../actions/city'
class Citys extends Component {
  render() { 
    return ( 
      <div>
        <CityHead title={'城市选择'} />
        <CityCurrent cityName={this.props.city.cityName} />
        <CityList changeCity={this.props.changeCity}/>
      </div>
     );
  }
}
const mapStateToProps = (state)=>{
  return {
    city: state.city
  }
}
 
export default connect(mapStateToProps,{initCity, changeCity})(Citys);