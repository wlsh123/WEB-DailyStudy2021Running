/**
 * 该文件是用于创建一个为count组件服务的reducer，reducer的本质就是一个函数.
 * reducer函数会接到两个参数，分别为：之前的状态（preState），动作对象（action）
 */

const initState = 0
export default function countReducer(preState = initState, action){
  // console.log(preState, action);
  // console.log(preState);
  const {type, data} = action
  switch (type) {
    case 'increment'://如果是加
      return preState + data
    case 'decrement'://如果是减
      return preState - data
    default:
      return preState;
  }
}