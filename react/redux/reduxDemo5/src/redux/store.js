/**
 * 该文件专门用于暴露一个store对象，整个应用只有一个store对象
 */
//引入createStore，专门用于创建redux中最为核心的store
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/index'


//暴露store
export default createStore(reducer, applyMiddleware(thunk))