import {ADD_PERSON} from '../constant'
//初始化
const initState = [{id:'01', name:'zhang3', age:18}]

export default function personReducer(preState=initState, action){
  const {type, data} = action
  switch (type) {
    case ADD_PERSON:
      // return preState.unshift(data) 不能这么写，这样会导致preState被改写了，personReducer就不是纯函数了
      return [data, ...preState]  
    default:
      return preState
  }
}