import React, { Component } from 'react';
// import Home from './components/Home.js';
// import Like from './components/Like.js';
import List from './components/List.js';
import TodoList from './components/TodoList.js';
import ReactForm from './components/ReactForm.js';
// import News from './components/News.js';
class App extends Component{
  render(){
    return(
      <div className="App">
        你好react根组件
        {/* <Home />
        <News /> */}
        {/* <Like /> */}
        <List/>
        <hr/>
        <TodoList />
        <hr />
        <ReactForm />
      </div>
    );
  }
}
export default App;
