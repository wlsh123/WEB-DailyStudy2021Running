import React from "react";
import { render } from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
let store = createStore((state = 0, action) => {
    if (action.type == "ZENGJIA") {
        return store + 1;
    } else if(action.type == "JIANSHAO"){
        return store - 1;
    }
    return store;
});
render(
    <Provider store={store}>
        <App></App>
    </Provider>
    ,
    document.getElementById("container")
)