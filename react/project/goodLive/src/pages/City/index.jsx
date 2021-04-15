import React, { Component } from 'react';
import CityHead from '../../components/CityHead'
import CityCurrent from './CityCurrent'
import CityList from './CityList'
class Citys extends Component {
  render() { 
    return ( 
      <div>
        <CityHead title={'城市选择'} />
        <CityCurrent />
        <CityList />
      </div>
     );
  }
}
 
export default Citys;