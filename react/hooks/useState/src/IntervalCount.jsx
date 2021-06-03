import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
function IntervalCount(){
    const [count, setCount] = useState(0)
    useEffect(()=>{
        var timer = setInterval(() => {
            setCount(count => count+1)
        }, 1000);
        return ()=>{
            clearInterval(timer);
        }
    },[])
    function unmonut(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    return (
    	<div>
        	<p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>
            	Click me
            </button>
            <button onClick={unmonut}>清除定时器</button>
        </div>
    )
}
export default IntervalCount;