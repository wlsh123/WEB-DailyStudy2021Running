import React from 'react';
import Epp from './Epp';
class Dpp extends React.Component{
  state={
    carName:'benci'
  }
  changeCar=()=>{
    this.setState({
      state:this.state.carName = 'aotu'
    })
  }
  render(){
    return(
      <div>
        <div>Dpp</div>
        <button onClick={this.changeCar}>Change Car</button>
        <Epp carName={this.state.carName}/>
      </div>
    );
  }
}
export default Dpp;