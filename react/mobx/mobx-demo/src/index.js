import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import {observable, action} from 'mobx';
import {observer} from 'mobx-react';
//1.初始化mobx容器仓库
//2.在组件中使用mobx容器状态
//3.在组件中发起action修改容器状态
class Store{//初始化mobx容器仓库
  @observable 
  count = 0
  @action.bound 
  increment(){
    console.log(this.count);
  }
}
//在组件中使用mobx容器状态
@observer
class App extends React.Component{
  render(){
    const {store} = this.props
    return(
      <div>
        <h1>App Component</h1>
        <p>{store.count}</p>
        <p><button onClick={store.increment}>Increment</button></p>
      </div>
    )
  }
}
ReactDOM.render(
  <React.StrictMode>
    <App store={new Store()}/>
  </React.StrictMode>,
  document.getElementById('root')
);