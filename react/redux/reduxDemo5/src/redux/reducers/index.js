// 该文件用于汇总所有的reducer
//引入为count组件服务的reducer
import count from './count'
import persons from './person'
// 引入combineReducers用于汇总多个reducer
import { combineReducers } from 'redux'
export default combineReducers({
  // count: count,
  // persons: person
  count,
  persons
})