
import React, { Component } from 'react';
import Count from './containers/count';
import store from './redux/store';
class App extends Component {
  render() { 
    return ( 
      <Count store={store}/>
     );
  }
}
 
export default App;