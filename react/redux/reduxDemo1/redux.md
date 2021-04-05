# redux学习记录

## 1.redux是什么

- redux是一个专门用于做状态管理的JS库（不是react插件库）。
- 它可以用在react，angular，vue等项目中，但基本与react配合使用。
- 作用：集中管理react应用中多个组件共享的状态。

## 2.什么情况需要使用redux

- 某个组件的状态需要让其他组件可以随时拿到（共享）
- 一个组件需要改变另一个组件的状态（通信）
- 总体原则：能不用就不用，如果不用比较吃力才考虑使用

![redux原理图](/Users/wanglsh/Desktop/WEB-DailyStudy2021Running/react/redux/reduxDemo1/redux原理图.png)

## 3.redux三个核心概念

- action

  1.动作对象

  2.包含两个属性：
  	type：标识属性，值为字符串，唯一，必要属性

  ​	data ：数据属性，值类型任意，可选属性

- reducer

  1.用于初始化状态、加工状态。

  2.加工时，根据旧的state和action，产生新的state的纯函数

- store

  1.将state、action、reduce联系在一起的对象

  2.如何得到此对象？

  ​	1) import { createStore } from 'redux'

  ​	2) import reducer from './reducers'

  ​	3) const store = createStore(reducer)

  3.此对象的功能？
  	1）getState(),得到state

  ​	2）dispatch(action),分发action，触发reducer调用，产生新的state

  ​	3）subscribe(listener),注册监听，当产生了新的state时，自动调用

- redux案列

  1. 去除Count组件自身的状态

  2. src文件下新建：

     -redux

     ​	-store.js

     ​	-count_reducer.js

  3. Store.js:

     1. 引入redux中的`createStore`函数，创建一个store
     2. `createStore`调用时要传入一个为其服务的reducer
     3. 暴露store对象

  4. count_reducer.js:

     1. reducer的本质是一个函数，接收preState，action，返回加工后的状态
     2. reducer有两个作用：初始化状态，加工状态
     3. reducer被第一次调用时，是store自动触发的，传递的preState是undefined

  5. 在index.js中检测store中状态的改变，一旦发生改变重新渲染<App />

     备注：redux只负责管理状态，至于状态的改变驱动着页面的展示，要靠自己写。

