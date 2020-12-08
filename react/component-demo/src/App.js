import React, { Component } from 'react';
import Home from './components/Home.js';
import News from './components/News.js';

class App extends Component{
  render(){
    return(
      <div className="App">
        你好react根组件
        <Home />
        <News />
      </div>
    );
  }
}
export default App;
