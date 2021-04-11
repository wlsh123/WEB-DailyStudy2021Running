import React, {Fragment} from 'react';
import ReactDOM from 'react-dom'
function UseStateHook() {
  const [count, setCount] = React.useState(0)
  const myRef = React.useRef()
  // console.group(count, setCount);
  React.useEffect(()=>{
    let timer = setInterval(() => {
      setCount(count=>count+1)
    }, 1000);
    return ()=>{
      clearInterval(timer)
    }
  }, [])
  function add() {
    // setCount(count+1) --第一种写法
    setCount(count=>count+1)
  }
  //卸载组件的回调
  function unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  //提示输入的回调
  function show(){
    alert(myRef.current.value)
  }
  return (
    <Fragment>
      <input type="text" ref={myRef}/>
      <h2>当前求和为：{count}</h2>
      <button onClick={add}>点击+1</button>
      <button onClick={unmount}>卸载组件</button>
      <button onClick={show}>点击提示</button>
    </Fragment>
  );
}
export default UseStateHook;