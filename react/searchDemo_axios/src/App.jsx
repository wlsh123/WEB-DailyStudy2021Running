import React, { Component } from 'react';
import Search from './components/Search'
import List from './components/List'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      users:[],
      isFirst:true,
      isLoading:false,
      err:'',
     }
  }
  updateAppState = (stateObj)=>{
    this.setState(stateObj)
  }
  render() { 
    return ( 
      <div className="container">
        <Search updateAppState={this.updateAppState} />
        <List {...this.state} />
      </div>
     );
  }
}
 
export default App;