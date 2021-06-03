import React, {useState} from 'react';
function RefCount(){
    const [count, setCount] = useState(0);
    const myRef = React.useRef();
    function show (){
        alert(myRef.current.value)
    }
    return (
    	<div>
            <input type="text" ref={myRef} />
        	<p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>
            	Click me
            </button>
            <button onClick={show}>点击，提示输入数据</button>
        </div>
    )
}
export default RefCount;