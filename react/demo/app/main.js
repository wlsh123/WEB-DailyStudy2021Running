import React from "react";
import {render} from "react-dom";
import App from "./App.js";
render(
    <div>
        <App></App>
        <h1>又见面了！</h1>
    </div>
    ,
    document.getElementById("app-container")
)

//使用、挂载组件，有两个参数
//第一个参数是jsx语法。只能是一个元素
//第二个参数表示组件挂载在哪里