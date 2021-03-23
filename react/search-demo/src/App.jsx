import React, { Component } from 'react';
import Search from './components/Search'
import List from './components/List'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="container">
        <Search />
        <List />
      </div>
     );
  }
}
 
export default App;