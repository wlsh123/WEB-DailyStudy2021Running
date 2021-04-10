/**
 * 该文件专门为count组件生成action对象
 */
import {INCREMENT, DECREMENT} from '../constant'

//同步action，就是指action的值为Object类型的一般对象
export const increment = data => ({ type: INCREMENT, data})
export const decrement = data => ({ type: DECREMENT, data})

//异步action，就是指action的值为函数，异步action中一般会调用同步action,不是必须要用的。
export const incrementAsync = (data, time)=>{
  return (dispatch)=>{
    setTimeout(() => {
      dispatch(increment(data))
    }, time);
  }
}