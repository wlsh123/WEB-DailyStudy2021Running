## 核心概念

### 1.环境准备

### 2.JSX简介

- 为什么使用JSX？

1.React 认为渲染逻辑本质上与其他 UI 逻辑内在耦合，比如，在 UI 中需要绑定处理事件、在某些时刻状态发生变化时需要通知到 UI，以及需要在 UI 中展示准备好的数据。

2.React 并没有采用将*标记与逻辑进行分离到不同文件*这种人为地分离方式，而是通过将二者共同存放在称之为“组件”的松散耦合单元之中，来实现[*关注点分离*](https://en.wikipedia.org/wiki/Separation_of_concerns)。我们将在[后面章节](https://react.docschina.org/docs/components-and-props.html)中深入学习组件。如果你还没有适应在 JS 中使用标记语言，这个[会议讨论](https://www.youtube.com/watch?v=x7cQ3mrcKaY)应该可以说服你。

3.React [不强制要求](https://react.docschina.org/docs/react-without-jsx.html)使用 JSX，但是大多数人发现，在 JavaScript 代码中将 JSX 和 UI 放在一起时，会在视觉上有辅助作用。它还可以使 React 显示更多有用的错误和警告消息。

Babel 会把 JSX 转译成一个名为 `React.createElement()` 函数调用。

```react
//这两种示例代码完全等效
const element = (
	<h1 className="greeting">
    	Hello, world!
    </h1>
);

const element = React.createElement(
	'h1',
    {className:'greeting'},
    'Hello world!'
);
```

`React.createElement()`会预先执行一些检查，以帮助你编写无错代码，但实际上它创建了一个这样的对象：

```react
const element = {
    type:'h1',
    props:{
        className:'greeting',
        children:'Hello, world!'
    }
}
```



### 3.元素渲染

元素是构成 React 应用的最小砖块。元素描述了你在屏幕上想看到的内容。

```react
const element = <h1>Hello, world</h1>;
```

与浏览器的 DOM 元素不同，React 元素是创建开销极小的普通对象。React DOM 会负责更新 DOM 来与 React 元素保持一致。

- 将一个元素渲染为DOM

假设你的 HTML 文件某处有一个 `<div>`：

```react
<div id="root"></div>
```

我们将其称为“根” DOM 节点，因为该节点内的所有内容都将由 React DOM 管理。

仅使用 React 构建的应用通常只有单一的根 DOM 节点。如果你在将 React 集成进一个已有应用，那么你可以在应用中包含任意多的独立根 DOM 节点。

想要将一个 React 元素渲染到根 DOM 节点中，只需把它们一起传入 [`ReactDOM.render()`](https://react.docschina.org/docs/react-dom.html#render)：

```react
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

- 更新已渲染的元素

React 元素是[不可变对象](https://en.wikipedia.org/wiki/Immutable_object)。一旦被创建，你就无法更改它的子元素或者属性。一个元素就像电影的单帧：它代表了某个特定时刻的 UI。

根据我们已有的知识，更新 UI 唯一的方式是创建一个全新的元素，并将其传入 [`ReactDOM.render()`](https://react.docschina.org/docs/react-dom.html#render)。

```react
function tick(){
    const element=(
    	<div>
        	<h1>Hello, world!</h1>
            <h2>It is {new Date().tolocaleTimeString()}.</h2>
        </div>
    );
    ReacDOM.render(
    	element,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);
//这个例子会在 setInterval() 回调函数，每秒都调用 ReactDOM.render()。
```

**注意：**

在实践中，大多数 React 应用只会调用一次 [`ReactDOM.render()`](https://react.docschina.org/docs/react-dom.html#render)。在下一个章节，我们将学习如何将这些代码封装到[有状态组件](https://react.docschina.org/docs/state-and-lifecycle.html)中。

- React只更新它需要更新的部分

React DOM 会将元素和它的子元素与它们之前的状态进行比较，并只会进行必要的更新来使 DOM 达到预期的状态。

### 4.组件&`Props`

组件：从概念上类似于js函数。它接受任何的入参（Props），并返回用于描述页面展示内容的React元素。

- 函数组件与class组件

```react
function Welcome(props){
    return <h1>Hello, {props.name}</h1>;
}
```

```react
class Welcome extends React.Component{
    render(){
        return <h1>Hello, {this.props.name}</h1>;
    }
}
```

- 渲染组件

当React元素为用户自定义组件时，它会将jsx所接收到的属性以及子组件转换为单个对象传递给组件，这个对象被称之为“props”

```react
function Welcome(props){
    return <h1>Hello, {props.name}</h1>
}

const element = <Welcome name="Sara" />;

ReactDOM.render(
	element,
    document.getElementById('root')
);
```

代码执行过程:

1.调用`ReactDOM.render()`函数，并传入<Welcome name="Sara" /> 作为参数。

2.`React`调用Welcome组件，并将{name:'Sara'}作为props传入。

3.`Welcome组件`将<h1>Hello, Sara</h1>元素作为返回值。

4.`ReactDOM`将DOM高效地更新为<h1>Hello, Sara</h1>。

**注意：** 组件名称必须以大写字母开头。

React 会将以小写字母开头的组件视为原生 DOM 标签。例如，`<div />` 代表 HTML 的 div 标签，而 `<Welcome />` 则代表一个组件，并且需在作用域内使用 `Welcome`。

- 组合组件

组件可以在其输出中引用其他组件。这就可以让我们用同一组件来抽象出任意层次的细节。按钮，表单，对话框，甚至整个屏幕的内容：在 React 应用程序中，这些通常都会以组件的形式表示。

```react
function Welcome(props){
    return <h1>Hello, {props.name}</h1>;
}

function App(){
	return(
    	<div>
        	<Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>
    );
}

ReactDOM.render(
	<App />,
    document.getElementById('root')
);
```

- 提取组件

将组件拆分为更小的组件。

```react
function Comment(props){
    return(
    	<div className="Comment">
        	<div className="UserInfo">
            	<img className="Avatar"
                  src={props.author.avatarUrl}
                   alt={props.author.name}
                 />
                <div className="UserInfo-name">
                	{props.author.name}
                </div>
            </div>
            <div className="Comment-text">
            	{props.text}
            </div>
            <div className="Comment-date">
            	{formatDate(props.date)}
            </div>
        </div>
    );
}
//该组件用于描述一个社交媒体网站上的评论功能，它接收 author（对象），text （字符串）以及 date（日期）作为 props。
```

首先提取Avatar组件：

```react
function Avatar(props){
    return(
    	<img className="Avatar"
          src={props.user.avatarUrl}
          alt={props.user.name}
        />
    );
}
//Avatar 不需知道它在 Comment 组件内部是如何渲染的。因此，我们给它的 props 起了一个更通用的名字：user，而不是 author。
```

然后针对Comment做些微小调整：

```react
function Comment(props){
    return(
    	<div className="Comment">
        	<div className="UserInfo">
            	<Avatar user={props.author} />
                <div className="UserInfo-name">
                	{props.author.name}
                </div>
            </div>
            <div className="Comment-text">
            	{props.text}
            </div>
            <div className="Comment-date">
            	{formatDate(props.date)}
            </div>
        </div>
    );
}
```

接下来，提取`UserInfo`组件，该组件在用户名旁渲染Avatar组件：

```react
function UserInfo(props){
    return (
    	<div className="UserInfo">
            <Avatar user={props.author} />
            <div className="UserInfo-name">
            	{props.user.name}
            </div>
        </div>
    );
}
```

进一步简化Comment组件：

```react
function Comment(props){
    return (
    	<div className="Comment">
        	<UserInfo user={props.author} />
            <div className="Comment-text">
            	{props.text}
            </div>
            <div className="Comment-date">
            	{formatDate(props.date)}
            </div>
        </div>
    );
}
```

- 受控组件与非受控组件

受控组件，顾名思义是受到控制的组件，那么是通过什么来受到控制呢？

```react
class Cpp extends React.Component {
  constructor(props){
    super(props);
    this.state={
      value:''
    }
  }
  inputChange = (e) => {
    this.setState({ value: e.target.value })
    console.log(e.target.value);
  }
  render() {
    return (
      <div>
        <input value={this.state.value} onChange={this.inputChange} />
      </div>
    )
  }
}
```

非受控组件不同于受控组件数据是react组件处理的，是通过dom进行处理。

```react
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.value);
    event.preventDefault();
  }
 
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={(input) => this.input = input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

- `Props`的只读性

组件无论是使用函数声明还是通过class声明，都决不能修改自身的props。

所有React组件都必须像纯函数一样保护它们的props不被更改

对props进行类型、必要性限制

```react
function Person(){
  
}
Person.propTypes = {//往Person加propTypes属性
		name:PropTypes.string.isRequired,//需要import PropTypes from 'prop-types';
}
Person.defaultProps = {
  	age:18//默认值
}

class Person extends react.Component{
  static propTypes = {
    
  }
	static defaultProps = {
    
  }
}
```



### 5.`State`&生命周期

```react
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
```

通过五步将Clock函数组件转换成class组件：

1.创建一个同名的`ES6 class`,并且继承于React.Component。

2.添加一个空的`render()`方法。

3.将函数体移动到`render()`方法中。

4.在`render()`方法中使用`this.props`替换`props`。

5.删除剩余的空函数声明。

```react
class Clock enxtends React.Component{
    render(){
        return(
        	<div>
            	<h1>Hello, world!</h1>
                <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
<!-- 现在 Clock 组件被定义为 class，而不是函数。
每次组件更新时 render 方法都会被调用，但只要在相同的 DOM 节点中渲染 <Clock /> ，就仅有一个 Clock 组件的 class 实例被创建使用。这就使得我们可以使用如 state 或生命周期方法等很多其他特性。-->
```

接下来向class组件中添加局部的state

通过三步将date从`porps`移动到`state`中：

1.把`render()`方法中的`this.props.date`替换成`this.state.date`:

```react
class Clock extends React.Component{
    render(){
        return(
        	<div>
            	<h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
```

2.添加一个class构造函数，然后在该函数中为`this.state`赋初值:

```react
class Clock extends React.Component{
    //通过以下方式将 props 传递到父类的构造函数中:
    //Class 组件应该始终使用 props 参数来调用父类的构造函数。
    constructor(props){
        super(props);
        this.state={date:new Date()};
    }
    render(){
        return(
        	<div>
            	<h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
```

3.移除<Clock />元素中的date属性：

```react
ReactDOM.render(
	<Clock />,
    document.getElementById('root')
);
```

然后就将计时器相关的代码添加到组件中。

```react
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

接下来，会设置Clock的计时器并每秒更新它。此时将生命周期方法添加到class中，因为在具有许多组件的应用程序中，当组件被销毁时释放所占用的资源是非常重要的。

```react
componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
//尽管 this.props 和 this.state 是 React 本身设置的，且都拥有特殊的含义，但是其实你可以向 class 中随意添加不参与数据流（比如计时器 ID）的额外字段。
```

```react
componentWillUnmount() {
    clearInterval(this.timerID);
  }
//在 componentWillUnmount() 生命周期方法中清除计时器
```

最后，我们会实现一个叫 `tick()` 的方法，`Clock` 组件每秒都会调用它。

使用 `this.setState()` 来时刻更新组件 state：

```react
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={date:new Date()};
    }
    
    componentDidMount(){
        this.timerId = setInterval(()=>this.tick(), 1000);
    }
    
    componentWillUnmount(){
        clearInterval(this.timerId);
    }
    
    tick(){
        this.setState({date:new Date()});
    }
    
    render(){
        return (
      		<div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      		</div>
    	);
    }
}

ReactDOM.render(
	<Clock />,
    document.getElementById('root')
);
```

最后快速概括一下发生了什么和这些方法的调用顺序：

1.当<Clock />被传给`ReactDOM.render()`的时候，React会调用`Clock`组件的构造函数，因为`Clock`需要显示当前的时间，所以他会用一个包含当前时间的对象来初始化`this.state`.我们会在之后更新state。

2.之后React会调用组件的`render()`方法。这就是React确定该在页面上展示什么的方式。然后React更新DOM来匹配Clock渲染的输出。

3.当Clock的输出被插入到DOM中后，React就会调用`ComponentDidMount()`生命周期方法。在这个方法中，Clock组件向浏览器请求设置一个计时器来每秒调用一次组件的`tick()`方法。

4.浏览器每秒都会调用一次`tick()`方法。在这个方法中，Clock组件会通过调用`setState()`来计划进行一次UI更新。得益于`setState()`的调用，React能够知道state已经改变了，然后会重新调用`render()`方法来确定页面上该显示什么。这一次，`render()`方法中的`this.state.date`就不一样了，如此一来就会渲染输出更新过的时间。React也会相应的更新DOM。

5. 一旦Clock组件从DOM中被移除，React就会调用`componentWillUnmount()`生命周期方法，这样计时器就停止了。

**关于正确地使用state：**

1.不要直接修改`state`：

```react
//例如，此代码不会重新渲染组件：
this.state.comment = 'Hello';
```

```react
//而是应该使用 setState():
this.setState({comment:'Hello'});
```

备注：构造函数是唯一可以给 `this.state` 赋值的地方：

2.`state`的更新可能是异步的：

出于性能考虑，React 可能会把多个 `setState()` 调用合并成一个调用。

因为 `this.props` 和 `this.state` 可能会异步更新，所以你不要依赖他们的值来更新下一个状态。

```react
//例如，此代码可能会无法更新计数器：
this.setState({
    counter:this.state.counter + this.props.increment,
});
```

要解决这个问题，可以让 `setState()` 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数：

```react
//箭头函数版
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));

//普通函数版
this.setState(function(state, props) {
  return {
    counter: state.counter + props.increment
  };
});
```

3.`state`的更新会被合并：

当你调用`setState()`的时候，React会把你提供的对象合并到当前的state。

```react
//例如，state 包含几个独立的变量：
constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }

//可以分别调用 setState() 来单独地更新它们：
componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
  }
//这里的合并是浅合并，所以 this.setState({comments}) 完整保留了 this.state.posts， 但是完全替换了 this.state.comments。
```

4.数据是向下流动的

不管是父组件或是子组件都无法知道某个组件是有状态的还是无状态的，并且它们也并不关心它是函数组件还是 class 组件。

这就是为什么称 state 为局部的或是封装的的原因。除了拥有并设置了它的组件，其他组件都无法访问。

```react
//组件可以选择把它的 state 作为 props 向下传递到它的子组件中：
<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//这对于自定义组件同样适用：
<FormattedDate date={this.state.date} />

//FormattedDate 组件会在其 props 中接收参数 date，但是组件本身无法知道它是来自于 Clock 的 state，或是 Clock 的 props，还是手动输入的：
function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
```

这通常会被叫做“自上而下”或是“单向”的数据流。任何的 state 总是所属于特定的组件，而且从该 state 派生的任何数据或 UI 只能影响树中“低于”它们的组件。

如果你把一个以组件构成的树想象成一个 props 的数据瀑布的话，那么每一个组件的 state 就像是在任意一点上给瀑布增加额外的水源，但是它只能向下流动。

- 生命周期三阶段（旧版）：

1. 初始化阶段：由`render()`触发----初次渲染

   1.`constructor()`	

   2.`componentWillMount()`

   3.`render()`

   4.`componentDidMount()`    ---常用， 一般做初始化的事

2.更新阶段：由组件内部`this.setState()`或父组件`render()`触发

​		1.`shoudComponentUpdate()`

​		2.`componentWillUpdate()`

​		3.`render()`

​		4.`componentDidUpdate()`

3.卸载阶段：由`React.unmountComponentAtNode()`触发

​		1.`componentWillUnmount()`     ---常用，一般做一些收尾的事

- ### `static getDerivedStateFromProps(props)`(新版)

  `getDerivedStateFromProps` 会在调用 render 方法之前`constructor()`之后调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 `null` 则不更新任何内容。

- `getSnapshotBeforeUpdate()`在更新之前获取快照

`getSnapshotBeforeUpdate()` 在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期的任何返回值将作为参数传递给 `componentDidUpdate()`。应返回 snapshot 的值（或 `null`）。

### 6.refs与事件处理

- ### String 类型的 Refs(不推荐使用，存在效率问题)

- 回调形式的ref

```react
class App extends React.Component {

  showData = ()=>{
    const {input1} = this;
    alert(input1.value);
  }
  showData2 = ()=>{
    const {input2} = this;
    alert(input2.value);
  }
  render() {
    return(
      <div>
        <input ref = {c=>this.input1 = c} type="text" placeholder="请输入" />
        <button onClick={this.showData}>点击</button>
        <input ref={c => this.input2 = c} onBlur={this.showData2} type="text" placeholder="请输入"/>
      </div>
    );
  }
}
```

ref回调次数的问题：

如果 `ref` 回调函数是以内联函数的方式定义的，在更新过程中它会被执行两次，第一次传入参数 `null`，然后第二次会传入参数 DOM 元素。

```react
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      isHot:true
    }
  }
  showData = ()=>{
    const {input1} = this;
    alert(input1.value);
  }

  changeWeather=()=>{
    const {isHot} = this.state;
    this.setState({isHot:!isHot})
  }
  render() {
    const { isHot } = this.state
    return(
      <div>
        <h1>天气很{isHot ? '炎热' : '凉爽'}</h1>
        <input ref = {c=>{this.input1 = c; console.log('###',c)}} type="text" placeholder="请输入" />
        <button onClick={this.showData}>点击</button>
        <button onClick={this.changeWeather}>切换天气</button>
      </div>
    );
  }
}
### null
### <input type="text" placeholder="请输入">
```

这是因为在每次渲染时会创建一个新的函数实例，所以 React 清空旧的 ref 并且设置新的。通过将 ref 的回调函数定义成 class 的绑定函数的方式可以避免上述问题，但是大多数情况下它是无关紧要的。

```react
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      isHot:true
    }
  }
  showData = ()=>{
    const {input1} = this;
    alert(input1.value);
  }

  changeWeather=()=>{
    const {isHot} = this.state;
    this.setState({isHot:!isHot})
  }
  saveInput=(c)={
    this.input1 = c;
    console.log('###',c);
  }
  render() {
    const { isHot } = this.state
    return(
      <div>
        <h1>天气很{isHot ? '炎热' : '凉爽'}</h1>
        {/*<input ref = {c=>{this.input1 = c; console.log('###',c)}} type="text" placeholder="请输入" />*/}
        <input ref = {this.saveInput} type="text" placeholder="请输入" />
        <button onClick={this.showData}>点击</button>
        <button onClick={this.changeWeather}>切换天气</button>
      </div>
    );
  }
}
```

- React.createRef()创建ref

```react
class Bpp extends React.Component{
  // React.createRef()调用后可以返回一个容器，该容器可以存储被ref所标识的节点,该容器是“专人专用”的。
  myRef = React.createRef();
  showData = ()=>{
    // console.log(this.myRef.current);
    alert(this.myRef.current.value);
  }
  render(){
    return(
      <div>
        <input ref={this.myRef} type="text" placeholder="please input"/>
        <button onClick={this.showData}>Click</button>
      </div>
    )
  }
```

- React事件的命名采用小驼峰式，而不是纯小写

- 使用jsx语法时需要传入一个函数作为事件处理函数，而不是一个字符串：

  ```html
  <button onclick="activeLasers()">
      Active Lasers
  </button>
  ```

  ```react
  <button onClick={activeLasers}>
  	Active Lasers
  </button>
  ```

- React中不能通过返回false的方式阻止默认行为，必须显式的使用`preventDefault`。

  ```html
  <a href="#" onclick="console.log('The link was clicked.'); return false">
  	Click me
  </a>
  ```

  ```react
  function ActionLink(){
      function handleClick(e){
          e.preventDefault();
          console.log('The link was clicked.')
      }
      return (
      	<a href="#" onClick={handleClick}>
          	Click me
          </a>
      )
  }
  ```

- 使用React时，一般不需要使用`addEventListener`为已创建的DOM元素添加监听器。事实上，只需要在该元素初始渲染时候添加监听器即可。

```react
class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isToggleOn:true
        };
        
        //为了在回掉中使用`this`，这个绑定是必不可少的
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(){
        this.setState(state => ({
            isToggleOn: !state.isTogglrOn
        }));
    }
    
    render(){
        return(
            <button onClick={this.handleClick}>
            	{this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}


ReactDOM.render(
	<Toggle/>,
    document.getElementById('root')
);
```

- 必须谨慎对待jsx回掉函数中的this，在js中，class的方法默认不会[绑定](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)this，如果忘记绑定`this.handleClick`并把它传入`onClick`,当调用这个函数的时候this的值为undefined。

  通常情况下，如果没有在方法后面添加()，比如`onClick={this.handleClick}`,就应该为这个方法绑定this。

  绑定this的两种方法：

  ```react
  class LoggingButton extends React.Component{
      //此语法确保`handleClick`内的`this`已被锁定。
      //注意：这是*实验性*语法。
      handleClick=()=>{
          console.log('this is: ', this);
      }
      render(){
          return(
          	<button onClick={this.handleClick}>
              	Click me
              </button>
          );
      }
  }
  ```

  ```react
  class LoggingButton extends React.Component{
      //此语法确保`handleClick`内的`this`已被绑定。
      //注意：这是*实验性*语法。
      handleClick(){
          console.log()'this is: ', this);
      }
      render(){
          //此语法确保`handleClick`内的`this`已被绑定。
          return(
          	<button onClick={()=>this.handleClick()}>
              	Click me
              </button>
          );
      }
  }
  这个语法的问题在于每次渲染LoggingButton时都会创建不同的回调函数。如果该回调函数作为props传入子组件，这些组件可能会进行额外的重新渲染
  ```

- 事件绑定三种方式

```react
//1.通过bind方法实现，可以传递参数
class App extends Component{
  handleClick(e,erg){
    console.log(e, erg);
  }
  render(){
    return(
    	<button onClick={this.handleClick.bind(this,'test')}>Test</button>
    );
  }
}
//如果不传参数，可以简写
    	<button onClick={::this.handleClick}>Test</button>
```

```react
//2.构造器内声明
class App extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    console.log(e);
  }
  render(){
    return(
    	<button onClick={this.handleClick}>Test</button>
    );
  }
}
```

这种方式的好处在于仅需要进行一次绑定，而不需要每次调用事件监听器时去执行绑定操作；

```react
//3.箭头函数
class App extends Component{
  const handleClick=(e)=>{
    console.log(e);
  }
  render(){
    return(
    	<button onClick={this.handleClick}>Test</button>
    );
  }
}
```

箭头函数不仅是函数的“语法糖”，它还自动绑定了定义此函数作用域的this；

### 7.条件渲染

React 中的条件渲染和 JavaScript 中的一样，使用 JavaScript 运算符 [`if`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) 或者[条件运算符](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)去创建元素来表现当前的状态，然后让 React 根据它们来更新 UI。

```react
function UserGreeting(props){
    return <h1>Welcome back!</h1>
}

function GuestGreeting(props){
    return <h1>Please sign uo.</h1>
}
```

```react
function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting />;
    }
    retun <GuestGreeting />;
}

ReactDOM.render(
	<Greeting isLoggedIn={false}/>,
    document.getElementById('root');
)
```

可以使用变量来储存元素。 它可以帮助你有条件地渲染组件的一部分，而其他的渲染部分并不会因此而改变。

```react
function LoginButton(props){
    return(
    	<button onClick={props.onClick}>
        	Login
        </button>
    );
}

function LogoutButton(props){
    return(
        <button onClick={props.onclick}>
        	Logout
        </button>
    );
}
```

在下面的示例中，我们将创建一个名叫 `LoginControl` 的[有状态的组件](https://react.docschina.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class)。

它将根据当前的状态来渲染 `<LoginButton />` 或者 `<LogoutButton />`。同时它还会渲染上一个示例中的 `<Greeting />`。**

```react
class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn:false};
    }
    
    handleLoginClick(){
        this.setState({
            isLoggedIn:true
        });
    }
    
    handleLogoutClick(){
        this.setState({
            isLoggedIn:false
        });
    }
    
    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if(isLoggedIn){
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        }else{
            button = <LoginButton onClick={this.handleLoginClick} />;
        }
        return(
        	<div>
            	<Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}

ReactDOM.render(
	<LoginControl />,
    document.getElementById('root')
);
```

声明一个变量并使用if语句进行条件渲染是不错的方式，下面介绍几种在jsx中内联条件渲染的方法：

***与运算符&&***

```react
function Mailbox(props){
    const unreadMessages = props.unreadMessages;
    return(
    	<div>
        	<h1>Hello!</h1>
            {//在 JavaScript 中，true && expression 总是会返回 expression, 而 false && expression 总是会返回 false
                unreadMessages.length > 0 &&
                    <h2>
                    	You have {unreadMessages.length} unread messages.
                    </h2>
            }
        </div>
    );
}

const messages = ['React', 'Re:React', 'Re:Re:React'];
ReactDOM.render(
	<Mailbox unreadMessages={messages} />,
    document.getElementById('root')  
);
```

***三目运算符***

```react
render(){
    const isLoggedIn = this.state.isLoggedIn;
    return(
    	<div>
        	The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
        </div>
    );
}
```



在极少数情况下，可能希望能隐藏组件，即使它已经被其他组件渲染。此时可以让`render`方法直接返回`null`，而不进行任何渲染。

```react
function WarningBanner(props){
    if(!props.warn){
     	return null;
    }
    return(
    	<div className="warning">
        Warning!
        </div>
    );
}

class Page extends React.Component{
    constructor(props){
        super(props);
        this.state = {showWarning:true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick(){
        this.setState(state => ({
            showWarning:!state.showWarning
        }));
    }
    
    render(){
        return(
        	<div>
            	<WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                	{this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

ReactDOM.render(
	<Page />,
    document.getElementById('root')
);
```

在组件的 `render` 方法中返回 `null` 并不会影响组件的生命周期。`componentDidUpdate` 依然会被调用。

### 8.列表&Key

```javascript
//js中，使用 map() 函数让数组中的每一项变双倍
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number)=>number*2);
console.log(doubled);
```

下面，使用js中的`map()`方法来遍历numbers数组。将数组中的每个元素变成<li>标签，最后将得到的数组赋值给`listItems`。

```react
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number)=><li>{number}</li>);
                              
//我们把整个 listItems 插入到 <ul> 元素中，然后渲染进 DOM：
ReactDOM.render(
      <ul>{listItems}</ul>,
      document.getElementById('root')
);
```

- 组件中的基础列表

```react
function NumberList(props){
    const numbers = props.numbers;
    const listItems = numbers.map((number)=>
          <li>{number}</li>
     );
     return(
     	<ul>{listItems}</ul> 
     );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
	<NumberList numbers={numbers}/>,
    document.getElementById('root')
);
//运行这段代码时，会有一个警告a key should be provided for list items。
```

为每个列表元素分配一个key属性就解决这个警告问题。

```react
function NumberList(props){
    const numbers = props.numbers;
    const listItems = numbers.map((number)=>
          <li key={number.toString()}>{number}</li>
     );
     return(
     	<ul>{listItems}</ul> 
     );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
	<NumberList numbers={numbers}/>,
    document.getElementById('root')
);
//运行这段代码时，会有一个警告a key should be provided for list items。
```

- Key

`Key`帮助React识别那些元素改变了，比如被添加或删除。因此你应当给数组中的每一个元素赋予一个确定的标识。

一个元素的 key 最好是这个元素在列表中拥有的一个独一无二的字符串。通常，我们使用数据中的 id 来作为元素的 key：

```react
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);
```

当元素没有确定 id 的时候，万不得已你可以使用元素索引 index 作为 key：

```react
const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo.text}
  </li>
);
```

如果列表项目的顺序可能会变化，我们不建议使用索引来用作 key 值，因为这样做会导致性能变差，还可能引起组件状态的问题。可以看看 Robin Pokorny 的[深度解析使用索引作为 key 的负面影响](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318)这一篇文章。如果你选择不指定显式的 key 值，那么 React 将默认使用索引用作为列表项目的 key 值。

要是你有兴趣了解更多的话，这里有一篇文章[深入解析为什么 key 是必须的](https://react.docschina.org/docs/reconciliation.html#recursing-on-children)可以参考。

- 用key提取组件

元素的key只有放在就近的数组上下文中才有意义。

```react
//如果你提取出一个 ListItem 组件，你应该把 key 保留在数组中的这个 <ListItem /> 元素上，而不是放在 ListItem 组件中的 <li> 元素上。
function ListItem(props){
    const value = props.value;
    return(
    	//错误！不需要在这里指定key
        <li key={value.toString()}>
        	{value}
        </li>
    );
}

function NumberList(props){
    const numbers = props.numbers;
    const listItems = numbers.map((number)=>
          //错误！元素的key应该在这指定                       
          <ListItem value={number}
     );
    return (
    <ul>
      {listItems}
    </ul>
  );
}
              
const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

```react
function ListItem(props){
    //正确！这里不需要指定key
    return <li>{props.value}</li>
}

function NumberList(props){
    const numbers = props.numbers;
    const listItems = numbers.map((number)=>
          //正确！key应该在数组的上下文中被指定                 
          <ListItem key={number.toString()} value={number}
     );
    return (
    <ul>
      {listItems}
    </ul>
  );
}
              
const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);

//一个好的经验法则是：在 map() 方法中的元素需要设置 key 属性。
```

- `key`只是在兄弟节点之间必须唯一

数组元素中使用的 key 在其兄弟节点之间应该是独一无二的。然而，它们不需要是全局唯一的。当我们生成两个不同的数组时，我们可以使用相同的 key 值：s

```react
function Blog(props){
    const sidebar = (
    	<ul>
        	{props.posts.map((post)=>
            	<li key={post.id}>
                	{post.title}             
                </li>
            )}
        </ul>
    );
    const content = props.posts.map((post)=>
   		<div key={post.id}>
        	<h3>{post.title}</h3>                        
            <p>{post.content}</p>
        </div>                                
   	);
	return(
       <div>
      {sidebar}
      <hr />
      {content}
    </div>                            
   	);
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('root')
);
```

- key会传递信息给React，但不会传递给你的组件。如果你的组件中需要使用key属性的值，需要用其他属性名显示传递这个值：

```react
const content = posts.map((post)=>
	<Post
		key={post.id}
        id={post.id}
        title={post.title} />
);
//Post组件可以读出props.id,但是不能读出props.key。
```

- 在jsx中嵌入map()

```react
function NumberList(props){
    const numbers = props.numbers;
    const listItems = numbers.map((number)=>
    	<ListItem key={number.toString()}
            value={number} />
    );
                                  
    return (
    	<ul>
        	{listItems}                          
  		</ul>                             
    );	
}
```

jsx允许在大括号中[嵌入任何表达式](https://react.docschina.org/docs/introducing-jsx.html#embedding-expressions-in-jsx)所以我们可以内敛`map()`返回的结果：

```react
function NumberList(props){
    const numbers = props.numbers;
    return(
    	<ul>
        	{
               	numbers.map((number)=>
    				<ListItem key={number.toString()} value={number} />);
            }
        </ul>
    );
    const listItems = numbers.map((number)=>
    	<ListItem key={number.toString()}
            value={number} />
    );
}
```

这么做有时可以使你的代码更清晰，但有时这种风格也会被滥用。就像在 JavaScript 中一样，何时需要为了可读性提取出一个变量，这完全取决于你。但请记住，如果一个 `map()` 嵌套了太多层级，那可能就是你[提取组件](https://react.docschina.org/docs/components-and-props.html#extracting-components)的一个好时机。

### 9.表单

```html
<form>
    <label>
    	名字：<input type="text" name="name" />
    </label>
    <input type="submit" value="提交" />
</form>
```

此表单具有默认的HTML表单行为，即在用户提交表单后浏览到新页面。如果在React中执行相同的代码，它依然有效。但大多数情况下，使用js函数可以很方便的处理表单的提交，同时还可以访问用户填写的表单数据。实现这种效果的标准方法是使用“受控组件”。

- 受控组件

在HTML中，表单元素（<input>,<textarea>,<select>）之类的表单元素通常自己维护state，并根据用户输入进行更新。而在React中，可变状态通常保存在组件的state属性中，并且只能通过使用`setState()`来更新。

我们可以把两者结合起来，使 React 的 state 成为“唯一数据源”。渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”。

```react
class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {value:''};
    	this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event){
        this.setState({value:event.target.value});
    }
    
    handleSubmit(event){
        alert('提交的姓名：'+ this.state.vaue);
        event.preventDefault();
    }
    render(){
        return(
        	<form onSubmit={this.handleSubmit}>
            	<label>
                	名字:<input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="提交" />
            </form>
        );
    }
}
```

由于在表单元素上设置了 `value` 属性，因此显示的值将始终为 `this.state.value`，这使得 React 的 state 成为唯一数据源。由于 `handlechange` 在每次按键时都会执行并更新 React 的 state，因此显示的值将随着用户输入而更新。

对于受控组件来说，输入的值始终由 React 的 state 驱动。你也可以将 value 传递给其他 UI 元素，或者通过其他事件处理函数重置，但这意味着你需要编写更多的代码。

- textarea标签

在HTML中，<textarea>元素通过其子元素定义其文本：

```html
<textarea>
	你好，这是在text area里的文本
</textarea>
```

而在React中，<textarea>使用value属性代替。这样，可以使得使用<textarea>的表单和使用单行<input>的表单非常类似：

```react
class EssayForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:'请撰写一篇关于你喜欢的 DOM 元素的文章.'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event){
        this.setState({value:event.target.value});
    }
        
    handleSubmit(event){
        alert('提交的文章: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            //this.state.value 初始化于构造函数中，因此文本区域默认有初值。
          <form onSubmit={this.handleSubmit}>
            <label>
              文章:<textarea value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="提交" />
          </form>
        );
  	}
}
```

- select标签

在HTML中，<select>创建下拉列表标签。

```html
<select>
    <option value="grapefruit">葡萄柚</option>
    <option value="lime">酸橙</option>
    <option selected value="coconut">椰子</option>
    <option value="mango">芒果</option>
</select>
```

请注意，由于 `selected` 属性的缘故，椰子选项默认被选中。React 并不会使用 `selected` 属性，而是在根 `select` 标签上使用 `value` 属性。这在受控组件中更便捷，因为您只需要在根标签中更新它。例如：

```react
class FlavorForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    handleChange(event) {
    	this.setState({value: event.target.value});
  	}

  	handleSubmit(event) {
        alert('你喜欢的风味是: ' + this.state.value);
        event.preventDefault();
  	}
    render(){
        return(
        	<form onSubmit={this.handleSubmit}>
            	<label>
                	选择你喜欢的风味：
                    <select value={this.state.value} onChange={this.handleChange}>
						<option value="grapefruit">葡萄柚</option>
                        <option value="lime">酸橙</option>
                        <option value="coconut">椰子</option>
                        <option value="mango">芒果</option>                    
                    </select>
                </label>
            </form>
        );
    }
}
//你可以将数组传递到 value 属性中，以支持在 select 标签中选择多个选项：<select multiple={true} value={['B', 'C']}>
```

- 文件input标签

在 HTML 中，`<input type="file">` 允许用户从存储设备中选择一个或多个文件，将其上传到服务器，或通过使用 JavaScript 的 [File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications) 进行控制。

```html
<input type="file" />
```

因为它的 value 只读，所以它是 React 中的一个**非受控**组件。将与其他非受控组件[在后续文档中](https://react.docschina.org/docs/uncontrolled-components.html#the-file-input-tag)一起讨论。

- 处理多个输入

当需要处理多个 `input` 元素时，我们可以给每个元素添加 `name` 属性，并让处理函数根据 `event.target.name` 的值选择要执行的操作。

```react
class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isGoing: true,
          numberOfGuests: 2
        };
    	this.handleInputChange = this.handleInputChange.bind(this);
  }
    handleInputChange(event){
        const target = event.target;
        const value = target.name === 'isGoing' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            //这里使用了 ES6 计算属性名称的语法更新给定输入名称对应的 state 值：
            [name]:value
        });
    }
    
    render(){
        return(
        	<form>
            	<label>
                	参与：<input 
                           name="isGoing"
                           type="checkbox"
                           checked={this.state.isGoing}
                           onChange={this.handleInputChange}
                           />
                </label>
                <br />
                <label>
                	来宾人数：<input 
                             name="numberOfGuests"
                             type="number"
                             value={this.state.numberOfGuests}
                             onChange={this.handleInputChange}
                             />
                </label>
            </form>
        );
    }
}
```

ES6 [计算属性名称](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names)的语法更新给定输入名称对应的 state 值：

```react
this.setState({
  [name]: value
});

//等同于ES5：
var partialState = {};
partialState[name] = value;
this.setState(partialState);
```

- 受控输入空值

在[受控组件](https://react.docschina.org/docs/forms.html#controlled-components)上指定 value 的 prop 会阻止用户更改输入。如果你指定了 `value`，但输入仍可编辑，则可能是你意外地将`value` 设置为 `undefined` 或 `null`。

```react
//输入最初被锁定，但在短时间延迟后变为可编辑。
ReactDOM.render(<input value="hi" />, mountNode);

setTimeout(function() {
  ReactDOM.render(<input value={null} />, mountNode);
}, 1000);
```

- 受控组件的替代品

有时使用受控组件会很麻烦，因为你需要为数据变化的每种方式都编写事件处理函数，并通过一个 React 组件传递所有的输入 state。当你将之前的代码库转换为 React 或将 React 应用程序与非 React 库集成时，这可能会令人厌烦。在这些情况下，你可能希望使用[非受控组件](https://react.docschina.org/docs/uncontrolled-components.html), 这是实现输入表单的另一种方式。

- 成熟的解决方案

如果你想寻找包含验证、追踪访问字段以及处理表单提交的完整解决方案，使用 [Formik](https://jaredpalmer.com/formik) 是不错的选择。然而，它也是建立在受控组件和管理 state 的基础之上 —— 所以不要忽视学习它们。

### 10.路由

- SPA的理解

  1. 单页web应用。
  2. 整个应用只有一个完整的页面。
  3. 点击页面中的链接不会刷新页面，只会做页面的局部更新。
  4. 数据都需要通过ajax请求获取，并在前端异步展现。

- 路由的理解

  1. 什么是路由：
     1. 一个路由就是一个映射关系（key.value）
     2. key为路径， value可能是function或component
  2. 路由分类：
     1. 后端路由：
        1. 理解：value是function，用来处理客户端提交的请求。
        2. 注册路由：router.get(path, function(req, res))
        3. 工作过程：当node接收到一个请求时，根据请求路径找到匹配的路由，调用路由中的函数来处理请求，返回响应数据。
     2. 前端路由：
        1. 浏览器端路由：value是component，用于展示页面内容。
        2. 注册路由：<Router path='/test' component={Test} >
        3. 工作过程：当浏览器的path变成/test时，当前路由组件就会变成Test组件。

- `React-router-dom`相关API

  - <BrowserRouter>
  - <HashRouter>
  - <Route>
  - <Redirect>
  - <Link>
  - <NavLink>
  - <Switch>

- 路由的基本使用

  1. 明确好界面中的导航区、展示区。
  2. 导航区的a标签改为Link标签<Link to='/xxx'>Demo</Link>
  3. 展示区写Route标签进行路由匹配<Route path='/xxx' component={Demo} />
  4. <App>的最外侧包裹一个<BrowserRouter>或<HashRouter>

- 路由组件与一般组件

  1. 写法不同：

     一般组件：<Demo />

     路由组件：<Route path='/xxx' component={Demo} />

  2. 存放位置不同：

     一般组件：component

     路由组件：pages

  3. 接收到的props不同：

     一般组件：写组件标签时传递了什么就能收到什么

     路由组件：接收到三个固定属性

     ```json
     history:
       go: ƒ go(n)
       goBack: ƒ goBack()
       goForward: ƒ goForward()
       push: ƒ push(path, state)
       replace: ƒ replace(path, state)
       
     location:
       pathname: "/about"
       search: ""
       state: undefined
       
     match:
       params: {}
       path: "/about"
       url: "/about"
     ```

- Switch的使用

  通常情况下，path和component是一一对应的关系，Switch可以提高路由匹配效率（单一匹配）

- 路由的模糊匹配与严格匹配（exact）

  ```react
  <Switch>
    <Route path="/about" component={About} />
    <Route exact path="/home" component={Home} />
  </Switch>
  ```

  1. 默认使用的是模糊匹配
  2. 开启严格匹配：<Route exact={true} path="/home" component={Home} />
  3. 严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由

- Redirect的使用

  1. 一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由

  ```react
  <Switch>
    <Route path="/about" component={About} />
    <Route exact path="/home" component={Home} />
    <Redirect to="/home" />
  </Switch>
  ```

- 嵌套路由

  1. 注册子路由时要写上父路由的path值
  2. 路由的匹配是按照注册路由的顺序进行的

- 向路由组件传递参数

  1. params参数

     路由链接（携带参数）：<Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link>

     注册路由（声明接收）：<Route path='/home/message/detail/:id/:title' component={Detail}/>

     接收参数：const {name, age} = this.props.match.params

  2. search参数

     路由链接（携带参数）：<Link to={`/home/message/detail/?id=${message.id}&title=${message.title}`}>{message.title}</Link>

     注册路由（无需声明，正常注册即可）：<Route path='/home/message/detail' component={Detail} />

     接收参数：const {search} = this.props.location（获取到的search是urlencode编码字符串，需要借助querystring解析）

  3. state参数

     路由链接（携带参数）：<Link to={{ pathname: '/home/message/detail', state: { id: message.id, title: message.title}}}>{message.title}</Link>

     注册路由（无需声明，正常注册即可）：<Route path='/home/message/detail' component={Detail} />

     接收参数：const {id ,title} = this.props.location.state
  
- 编程式路由导航

  1. 借助this.props.history对象上的API对操作路由跳转、前进、后退：

     `this.props.history.push()`、

     `this.props.history.replace()`、

     `this.props.history.goBack()`、

     `this.props.history.goForward()`、

     `this.props.history.go()`

- `BrowserRouter`与`HashRouter`的区别

  1. 底层原理不一样：
     	BrowserRouter使用的是H5的history API，不兼容IE9及以下版本。

     ​	HasRouter使用的是URL的哈希值。

  2. url表现形式不一样

     ​	BrowserRouter的路径中没有`#`，比如 localhost：3000/home/test

     ​	HasRouter的路径包含`#`,比如localhost：3000/#/home/test

  3. 刷新后对路由state参数的影响

     ​	BrowserRouter没有任何影响，因为state保存在history对象中

     ​	HasRouter刷新后会导致路由state参数的丢失

  4. HashRouter可以用于解决一些路径错误相关的问题

### 11.状态提升

在本节中，我们将创建一个用于计算水在给定温度下是否会沸腾的温度计算器。

我们将从一个名为 `BoilingVerdict` 的组件开始，它接受 `celsius` 温度作为一个 prop，并据此打印出该温度是否足以将水煮沸的结果。

```react
function BoilingVerdict(props){
	if(props.celsius >= 100){
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
}
```

接下来, 我们创建一个名为 `Calculator` 的组件。它渲染一个用于输入温度的 `<input>`，并将其值保存在 `this.state.temperature` 中。

另外, 它根据当前输入值渲染 `BoilingVerdict` 组件。

```react
class Calculator extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};
  	}
    
    handleChange(e){
        this.setState({temperature: e.target.value}); 
    }
    
    render(){
        const temperature = this.state.temperature;
        return(
        	<fieldset>
            	<legend>Enter temperature in Celsius:</legend>
                <input
                	value={temperature}
                    onChange={this.handleChange} />
                <BoilingVerdict celsius={parseFloat(temperature)}/>
            </fieldset>
        );
    }
}
```

- 添加第二个输入框

我们的新需求是，在已有摄氏温度输入框的基础上，我们提供华氏度的输入框，并保持两个输入框的数据同步。

我们先从 `Calculator` 组件中抽离出 `TemperatureInput` 组件，然后为其添加一个新的 `scale` prop，它可以是 `"c"` 或是 `"f"`：

```react
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
	constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};
  	}
	handleChange(e) {
    	this.setState({temperature: e.target.value});
  	}
    
    render(){
        const temperature = this.state.temperature;
        const scale = this.props.scale;
        return(
        	<fieldset>
            	<legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input 
                    value={temperature}
                   	onChange={this.handleChange}
                    />
            </fieldset>
        );
    }
}
```

```react
//我们现在可以修改 Calculator 组件让它渲染两个独立的温度输入框组件：
class class Calculator extends React.Component {
	render(){
        return(
        	<div>
            	<TemperatureInput scale="c" />v
                <TemperatureInput scale="f" />                         </div>
        );
    }
}
```

我们现在有了两个输入框，但当你在其中一个输入温度时，另一个并不会更新。这与我们的要求相矛盾：我们希望让它们保持同步。

另外，我们也不能通过 `Calculator` 组件展示 `BoilingVerdict` 组件的渲染结果。因为 `Calculator` 组件并不知道隐藏在 `TemperatureInput` 组件中的当前温度是多少。

```javascript
function toCelsius(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
```

上述两个函数仅做数值转换。而我们将编写另一个函数，它接受字符串类型的 `temperature` 和转换函数作为参数并返回一个字符串。我们将使用它来依据一个输入框的值计算出另一个输入框的值。

当输入 `temperature` 的值无效时，函数返回空字符串，反之，则返回保留三位小数并四舍五入后的转换结果：

```javascript
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
//tryConvert('abc', toCelsius) 返回一个空字符串，而 tryConvert('10.22', toFahrenheit) 返回 '50.396'。
```

到目前为止, 两个 `TemperatureInput` 组件均在各自内部的 state 中相互独立地保存着各自的数据。

在 React 中，将多个组件中需要共享的 state 向上移动到它们的最近共同父组件中，便可实现共享 state。这就是所谓的“状态提升”。接下来，我们将 `TemperatureInput` 组件中的 state 移动至 `Calculator` 组件中去。

如果 `Calculator` 组件拥有了共享的 state，它将成为两个温度输入框中当前温度的“数据源”。它能够使得两个温度输入框的数值彼此保持一致。由于两个 `TemperatureInput` 组件的 props 均来自共同的父组件 `Calculator`，因此两个输入框中的内容将始终保持一致。

```react
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}
```

```react
class Calculator extends React.Component {
	constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
  	}
    
    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
      }

  handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
      }
    render(){
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
  		return (
        	<div>
            	<TemperatureInput 
                 	scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                    />
                <TemperatureInput 
                     scale="f"
                     temperature={fahrenheit}
                     onTemperatureChange={this.handleFahrenheitChange}
                    />
                <BoilingVerdict 
                    celsius={parseFloat(celsius)}
                    />
            </div>
        );
    }   
}
```

现在无论你编辑哪个输入框中的内容，`Calculator` 组件中的 `this.state.temperature` 和 `this.state.scale` 均会被更新。其中一个输入框保留用户的输入并取值，另一个输入框始终基于这个值显示转换后的结果。

让我们来重新梳理一下当你对输入框内容进行编辑时会发生些什么：

- React 会调用 DOM 中 `<input>` 的 `onChange` 方法。在本实例中，它是 `TemperatureInput` 组件的 `handleChange` 方法。
- `TemperatureInput` 组件中的 `handleChange` 方法会调用 `this.props.onTemperatureChange()`，并传入新输入的值作为参数。其 props 诸如 `onTemperatureChange` 之类，均由父组件 `Calculator` 提供。
- 起初渲染时，用于摄氏度输入的子组件 `TemperatureInput` 中的 `onTemperatureChange` 方法与 `Calculator` 组件中的 `handleCelsiusChange` 方法相同，而，用于华氏度输入的子组件 `TemperatureInput` 中的 `onTemperatureChange` 方法与 `Calculator` 组件中的 `handleFahrenheitChange` 方法相同。因此，无论哪个输入框被编辑都会调用 `Calculator` 组件中对应的方法。
- 在这些方法内部，`Calculator` 组件通过使用新的输入值与当前输入框对应的温度计量单位来调用 `this.setState()` 进而请求 React 重新渲染自己本身。
- React 调用 `Calculator` 组件的 `render` 方法得到组件的 UI 呈现。温度转换在这时进行，两个输入框中的数值通过当前输入温度和其计量单位来重新计算获得。
- React 使用 `Calculator` 组件提供的新 props 分别调用两个 `TemperatureInput` 子组件的 `render` 方法来获取子组件的 UI 呈现。
- React 调用 `BoilingVerdict` 组件的 `render` 方法，并将摄氏温度值以组件 props 方式传入。
- React DOM 根据输入值匹配水是否沸腾，并将结果更新至 DOM。我们刚刚编辑的输入框接收其当前值，另一个输入框内容更新为转换后的温度值。

**学习小结**

在 React 应用中，任何可变数据应当只有一个相对应的唯一“数据源”。通常，state 都是首先添加到需要渲染数据的组件中去。然后，如果其他组件也需要这个 state，那么你可以将它提升至这些组件的最近共同父组件中。你应当依靠[自上而下的数据流](https://react.docschina.org/docs/state-and-lifecycle.html#the-data-flows-down)，而不是尝试在不同组件间同步 state。

虽然提升 state 方式比双向绑定方式需要编写更多的“样板”代码，但带来的好处是，排查和隔离 bug 所需的工作量将会变少。由于“存在”于组件中的任何 state，仅有组件自己能够修改它，因此 bug 的排查范围被大大缩减了。此外，你也可以使用自定义逻辑来拒绝或转换用户的输入。

如果某些数据可以由 props 或 state 推导得出，那么它就不应该存在于 state 中。举个例子，本例中我们没有将 `celsiusValue` 和 `fahrenheitValue` 一起保存，而是仅保存了最后修改的 `temperature` 和它的 `scale`。这是因为另一个输入框的温度值始终可以通过这两个值以及组件的 `render()` 方法获得。这使得我们能够清除输入框内容，亦或是，在不损失用户操作的输入框内数值精度的前提下对另一个输入框内的转换数值做四舍五入的操作。

当你在 UI 中发现错误时，可以使用 [React 开发者工具](https://github.com/facebook/react/tree/master/packages/react-devtools) 来检查问题组件的 props，并且按照组件树结构逐级向上搜寻，直到定位到负责更新 state 的那个组件。这使得你能够追踪到产生 bug 的源头：

### 12.组合vs继承

```react
function FancyBorder(props){
    return(
    	<div className={'FancyBorder FancyBorder-' + props.color}>
        	{props.children}
        </div>
    );
}
```

```react
function WelcomeDialog(){
    return(
    	<FancyBorder color="blue">
        	<h1 className="Dialog-title">
            	Welcome
            </h1>
            <p className="Dialog-message">
            	Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    );
}
```

`<FancyBorder>` JSX 标签中的所有内容都会作为一个 `children` prop 传递给 `FancyBorder` 组件。因为 `FancyBorder` 将 `{props.children}` 渲染在一个 `<div>` 中，被传递的这些子组件最终都会出现在输出结果中。

少数情况下，你可能需要在一个组件中预留出几个“洞”。这种情况下，我们可以不使用 `children`，而是自行约定：将所需内容传入 props，并使用相应的 prop。

```react
function SplitPane(props){
    return(
    	<div className="SplitPane">
        	<div className="SplitPane-left">
            	{props.left}
            </div>
            <div className="SplitPane-right">
            	{props.right}
            </div>
        </div>
    );
}


function App(){
    return(
    	<SplitPane 
            left={<Contacts />}
            right={<Chat />}
            />
    );
}
```

`<Contacts />` 和 `<Chat />` 之类的 React 元素本质就是对象（object），所以你可以把它们当作 props，像其他数据一样传递。这种方法可能使你想起别的库中“槽”（slot）的概念，但在 React 中没有“槽”这一概念的限制，你可以将任何东西作为 props 进行传递。

有些时候，我们会把一些组件看作是其他组件的特殊实例，比如 `WelcomeDialog` 可以说是 `Dialog` 的特殊实例。

在 React 中，我们也可以通过组合来实现这一点。“特殊”组件可以通过 props 定制并渲染“一般”组件：

```react
function Dialog(props){
    return (
    	<FancyBorder color="blue">
        	<h1 className="Dialog-title">
            	{props.title}
            </h1>
            <p className="Dialog-message">
            	{props.messahe}
            </p>
        </FancyBorder>
    );
}

function WelcomeDialog(){
    return (
    	<Dialog 
            title="welcome"
            message="Thank you for visiting our spacecraft!"
            />
    );
}
```

组合也同样适用于以 class 形式定义的组件。

```react
function Dialog(props){
    return (
    	<FancyBorder color="blue">
        	<h1 className="Dialog-title">
        		{props.title}
      		</h1>
       		<p className="Dialog-message">
            	{props.message}
       		</p>
            {props.children}
        </FancyBorder>
    );
}

class SignUoDialog extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {login: ''};
  	}
    render(){
    	return(
        	<Dialog title="Mars Exploration Program" messgae="How should we refer to you?">
            	<input value={this.state.login} onChange={this.handleChange}/>
                <button onClick={this.handleSignUp}>
                	Sign Me Up!
                </button>
            </Dialog>
        );    
    }
    
     handleChange(e) {
    	this.setState({login: e.target.value});
  	}

  	handleSignUp() {
    	alert(`Welcome aboard, ${this.state.login}!`);
  	}
}
```

### 13.React哲学

- ## 第一步：将设计好的 UI 划分为组件层级

首先，你需要在设计稿上用方框圈出每一个组件（包括它们的子组件），并且以合适的名称命名。如果你是和设计师一起完成此任务，那么他们可能已经做过类似的工作，所以请和他们进行交流！他们的 Photoshop 的图层名称可能最终就是你编写的 React 组件的名称！

但你如何确定应该将哪些部分划分到一个组件中呢？你可以将组件当作一种函数或者是对象来考虑，根据[单一功能原则](https://en.wikipedia.org/wiki/Single_responsibility_principle)来判定组件的范围。也就是说，一个组件原则上只能负责一个功能。如果它需要负责更多的功能，这时候就应该考虑将它拆分成更小的组件。

在实践中，因为你经常是在向用户展示 JSON 数据模型，所以如果你的模型设计得恰当，UI（或者说组件结构）便会与数据模型一一对应，这是因为 UI 和数据模型都会倾向于遵守相同的*信息结构*。将 UI 分离为组件，其中每个组件需与数据模型的某部分匹配。

- ## 第二步：用 React 创建一个静态版本

现在我们已经确定了组件层级，可以编写对应的应用了。最容易的方式，是先用已有的数据模型渲染一个不包含交互功能的 UI。最好将渲染 UI 和添加交互这两个过程分开。这是因为，编写一个应用的静态版本时，往往要编写大量代码，而不需要考虑太多交互细节；添加交互功能时则要考虑大量细节，而不需要编写太多代码。所以，将这两个过程分开进行更为合适。我们会在接下来的代码中体会到其中的区别。

在构建应用的静态版本时，我们需要创建一些会重用其他组件的组件，然后通过 *props* 传入所需的数据。*props* 是父组件向子组件传递数据的方式。即使你已经熟悉了 *state* 的概念，也**完全不应该使用 state** 构建静态版本。state 代表了随时间会产生变化的数据，应当仅在实现交互时使用。所以构建应用的静态版本时，你不会用到它。

你可以自上而下或者自下而上构建应用：自上而下意味着首先编写层级较高的组件（比如 `FilterableProductTable`），自下而上意味着从最基本的组件开始编写（比如 `ProductRow`）。当你的应用比较简单时，使用自上而下的方式更方便；对于较为大型的项目来说，自下而上地构建，并同时为低层组件编写测试是更加简单的方式。

到此为止，你应该已经有了一个可重用的组件库来渲染你的数据模型。由于我们构建的是静态版本，所以这些组件目前只需提供 `render()` 方法用于渲染。最顶层的组件 `FilterableProductTable` 通过 props 接受你的数据模型。如果你的数据模型发生了改变，再次调用 `ReactDOM.render()`，UI 就会相应地被更新。数据模型变化、调用 `render()` 方法、UI 相应变化，这个过程并不复杂，因此很容易看清楚 UI 是如何被更新的，以及是在哪里被更新的。React **单向数据流**（也叫*单向绑定*）的思想使得组件模块化，易于快速开发。

- ## 第三步：确定 UI state 的最小（且完整）表示

想要使你的 UI 具备交互功能，需要有触发基础数据模型改变的能力。React 通过实现 **state** 来完成这个任务。

为了正确地构建应用，你首先需要找出应用所需的 state 的最小表示，并根据需要计算出其他所有数据。其中的关键正是 [DRY: *Don’t Repeat Yourself*](https://en.wikipedia.org/wiki/Don't_repeat_yourself)。只保留应用所需的可变 state 的最小集合，其他数据均由它们计算产生。比如，你要编写一个任务清单应用，你只需要保存一个包含所有事项的数组，而无需额外保存一个单独的 state 变量（用于存储任务个数）。当你需要展示任务个数时，只需要利用该数组的 length 属性即可。

通过问自己以下三个问题，你可以逐个检查相应数据是否属于 state：

1. 该数据是否是由父组件通过 props 传递而来的？如果是，那它应该不是 state。
2. 该数据是否随时间的推移而保持不变？如果是，那它应该也不是 state。
3. 你能否根据其他 state 或 props 计算出该数据的值？如果是，那它也不是 state。

包含所有产品的原始列表是经由 props 传入的，所以它不是 state；搜索词和复选框的值应该是 state，因为它们随时间会发生改变且无法由其他数据计算而来；经过搜索筛选的产品列表不是 state，因为它的结果可以由产品的原始列表根据搜索词和复选框的选择计算出来。

综上所述，属于 state 的有：

- 用户输入的搜索词
- 复选框是否选中的值

- ## 第四步：确定 state 放置的位置

我们已经确定了应用所需的 state 的最小集合。接下来，我们需要确定哪个组件能够改变这些 state，或者说*拥有*这些 state。

注意：React 中的数据流是单向的，并顺着组件层级从上往下传递。哪个组件应该拥有某个 state 这件事，**对初学者来说往往是最难理解的部分**。尽管这可能在一开始不是那么清晰，但你可以尝试通过以下步骤来判断：

对于应用中的每一个 state：

- 找到根据这个 state 进行渲染的所有组件。

- 找到他们的共同所有者（common owner）组件（在组件层级上高于所有需要该 state 的组件）。

- 该共同所有者组件或者比它层级更高的组件应该拥有该 state。

- 如果你找不到一个合适的位置来存放该 state，就可以直接创建一个新的组件来存放该 state，并将这一新组件置于高于共同所有者组件层级的位置。

- ## 第五步：添加反向数据流

### 14.react扩展

1. #### setState更新状态的2种方法

   - setState(stateChange, [callback] --对象式的setState

     statechange为状态改变对象（该对象可以体现出状态的更改）

     callback是可选的回调函数，它在状态更新完毕，界面也更新后才被调用

   - setState(updater, [callback]). --函数式的setState

     updater为返回stateChange对象的函数。

     updater可以接收到state和props。

     callback是可选的回调函数，它在状态更新完毕，界面也更新后才被调用。

2. lazyLoad

   //1.通过React的lazy函数配合import()函数动态加载路由组件。 ===》路由组件会被分开打包

   ```react
   const Login = lazy(()=>import('&/Login'))
   ```

   //2.通过<Suspense>指定在加载得到路由打包文件前显示一个自定义loading界面

   ```react
   <Suspense>
     <Switch>
     	<Route path="/xxx" component={} />
       <Redirect to="/xxx" />
     </Switch>
   <Suspense>
   ```

3. React Hook/Hooks

   Hook是react 16.8版本增加的新特性/新语法

   可以让你在函数组件中使用state以及其他的react特性

   - 三个常用的Hook

     1. State Hook：React.useState()
     2. Effect Hook: React.useEffect()
     3. Ref Hook:React.useRef()

   - State Hook

     1. State Hook让函数组件也可以有state状态，并进行状态数据的读写操作

     2. 语法：const [state, setState] = React.useState(initValue)

     3. useState()说明：

        参数：第一次初始化指定的值在内部作缓存

        返回值：包含2个元素的数组，第1个为内部当前状态值，第2个为更新状态值的函数

     4. setXXX()2种写法：

        setXXX(newValue):参数为非函数值，直接指定新的状态值，内部用其覆盖原来的状态值

        ```react
        setCount(count+1)
        ```

        setXXX(value=>newValue):参数为函数，接收原来的状态值，返回新的状态值，内部用其覆盖原来的状态值

        ```react
        setCount(count=>count+1)
        ```

   - Effect Hook

     1. Effect Hook可以让你在函数组件中执行副作用操作（用于模拟类似组件中的生命周期钩子）

     2. React中的副作用操作：

        发ajax请求数据获取

        设置订阅/启动定时器

        手动更改真实DOM

     3. 语法和说明：

        ```react
        React.useEffect(()=>{
            let timer = setInterval(() => {
              setCount(count=>count+1)
            }, 1000);
            return ()=>{ //在组件卸载前执行
              clearInterval(timer)
            }
          }, [])//如果指定的是[],回调函数只会在第一次render（）后执行，如果不写就是检测所有状态改变
        ```

     4. 可以把useEffect Hook看作是componentDidMount()、componentDidUpdate()、componentWillUnmount()的组合。

   - Ref Hook

     1. Ref Hook可以在函数组件中存储/查找组件内的标签或任意其他数据
     2. 语法：const refContainer = useRef()
     3. 作用：保存标签对象，功能与React.createRef()一样。

4. context

   一种组件间通信方式，常用于【祖组件】与【后代组件】间通信

   ```react
   1）创建Context容器对象：
   	const MyContext = React.createContext()
   2)渲染子组件时，外面包裹MyContext.Provider,通过value属性给后代组件传递数据：
     <MyContext.Provider value={数据}>
       <B />
     </MyContext.Provider>
   3）后代组件读取数据：
     //第一种方式：仅适用于类组件
   	static contextType = MyContext //声明接收context
   	this.context //读取context中的value数据
   
   	//第二种方式：函数组件与类组件都可以用
   	<MyContext.Consumer>
    		{value => //value就是context中的value数据
        `${value.userName}, 年龄是${value.userAge}`
   		}
     </MyContext.Consumer>
   ```

   注意：在应用开发中一般不用context，一般都用它的封装react插件

5. 组件优化

   component的2个问题：

   ​	1.只要执行setState(),即使不改变状态数据，组件也会重新render()

   ​	2.只当前组件重新render(),就会自动重新render子组件，纵使子组件没有用到父组件的任何数据==》效率低

   效率高的做法：只有当组件的state或props数据发生改变时才重新render（）

   原因：Component中的shouldComponentUpdate()总是返回true。

   解决：

   ```react
   办法1:
   	重写shouldComponentUpdate（nextprops， nextstate）方法，比较新旧state或props数据，如果有变化才返回true，如果没有返回false。
     
   办法2:
   	不使用Component，而用PureComponent，PureComponent重写了shouldComponentUpdate，只有state或props数据有变化才返回true。
     注意：PureComponent只是进行state和props数据的浅比较，如果只是数据对象内部数据发生变化，直接返回false，所以不要直接修改state的数据，而是应该产生新的数据。
     
   项目中一般使用PureComponent来优化。
   ```

6. renderProps

   ```react
   import React, { Component } from 'react'
   import './index.css'
   //import C from '../1_setState'
   
   export default class Parent extends Component {
   	render() {
   		return (
   			<div className="parent">
   				<h3>我是Parent组件</h3>
   				<A render={(name)=><B name={name}/>}/>
   			</div>
   		)
   	}
   }
   
   class A extends Component {
   	state = {name:'tom'}
   	render() {
   		console.log(this.props);
   		const {name} = this.state
   		return (
   			<div className="a">
   				<h3>我是A组件</h3>
   				{this.props.render(name)}
   			</div>
   		)
   	}
   }
   
   class B extends Component {
   	render() {
   		console.log('B--render');
   		return (
   			<div className="b">
   				<h3>我是B组件,{this.props.name}</h3>
   			</div>
   		)
   	}
   }
   ```

7. 错误边界

   ```react
   static getDerivedStateFromError(error){
   	//当Parent的子组件出现报错时，会触发getDerivedStateFromError调用，并携带错误信息error
   }
   
   componentDidCatch(){
     
   }
   ```

8. 组件通信方式总结

   组件间的关系：

   - 父子组件
   - 兄弟组件
   - 祖孙组件

   几种通信方式：

   ```
   1.props：
   	children props
   	render props
   	
   2.消息订阅-发布
   	pubs-sub、event等
   	
   3.集中式管理：
   	redux、dva等
   	
   4.conText：
   	生产者-消费者模式
   ```

   比较好的搭配方式：

   ```
   父子组件：props
   兄弟组件：消息订阅-发布、集中式管理
   祖孙组件（跨级组件）：消息订阅-发布、集中式管理、conText
   ```

   

## 高级指引

### 代码分割

- 打包
- 代码分割  

如果你正在使用 [Create React App](https://github.com/facebookincubator/create-react-app)，[Next.js](https://github.com/zeit/next.js/)，[Gatsby](https://www.gatsbyjs.org/)，或者类似的工具，你会拥有一个可以直接使用的 Webpack 配置来进行打包工作。

如果你没有使用这类工具，你就需要自己来进行配置。例如，查看 Webpack 文档上的[安装](https://webpack.docschina.org/guides/installation/)和[入门教程](https://webpack.docschina.org/guides/getting-started/)。

- 懒加载

`React.lazy`函数能让你像渲染常规组件一样处理动态引入（的组件）。

```javascript
const OtherComponent = React.lazy(() => import('./OtherComponent'));
```

此代码将会在组件首次渲染时，自动导入包含 `OtherComponent` 组件的包。

`React.lazy` 接受一个函数，这个函数需要动态调用 `import()`。它必须返回一个 `Promise`，该 Promise 需要 resolve 一个 `defalut` export 的 React 组件。

然后应在 `Suspense` 组件中渲染 lazy 组件，如此使得我们可以使用在等待加载 lazy 组件时做优雅降级（如 loading 指示器等）。

```react
import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```

如果没有<Suspense>,那就会报错“Error: A React component suspended while rendering, but no fallback UI was specified.”。所以使用懒加载的组件都要用<Suspense>标签圈起来。这个标签有一个fallback属性，这个属性传一个loading组件，在组件还没加载出来时用这个loading组件展示。

- 基于路由的懒加载

  ```react
  const Home = lazy(() => import('./pages/Home'))
  const About = lazy(() => import('./pages/About'))
  
  {/* 注册路由 */}
  <Suspense fallback={<Load />}>
     <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/home" component={Home} />
        <Redirect to="/about" />
     </Switch>
  </Suspense>
  ```

  

### Context

- 何时使用Context

Context 设计目的是为了共享那些对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言

```react
class App extends React.Component{
    render(){
        return <Toolbar theme="dark" />;
    }
}


function Toolbar(props){
    return (
    	<div>
        	<ThemedButton theme={props.theme} />
        </div>
    );
}


class ThemedButton extends React.Component{
    render(){
        return <button theme={this.props.theme}></button>
    }
}
```

```react
//使用context可以避免通过中间元素传递props
//1.使用React.createContext()创建一个Context容器对象
const ThemeContext = React.createContext('light');
class App extends React.Component{
    render(){
        return(
            //2.渲染子组件时，外面包裹MyContext.Provider,通过value属性给后代组件传递数据
        	<ThemeContext.Provider value="dark">
            	<Toolbar />
            </ThemeContext.Provider>
        );
    }
}


function Toolbar(){
    return(
    	<div>
        	<ThemedButton />
        </div>
    );
}

class ThemedButton extends React.Component{
    //3.子组件接收数据
    static contextType = ThemeContext;
	render(){
        return <Button theme={this.context} />;
    }
}
```

- `Context`使用场景

Context 主要应用场景在于*很多*不同层级的组件需要访问同样一些的数据。请谨慎使用，因为这会使得组件的复用性变差。

**如果你只是想避免层层传递一些属性，[组件组合（component composition）](https://react.docschina.org/docs/composition-vs-inheritance.html)有时候是一个比 context 更好的解决方案。**

比如，考虑这样一个 `Page` 组件，它层层向下传递 `user` 和 `avatarSize` 属性，从而深度嵌套的 `Link` 和 `Avatar` 组件可以读取到这些属性：

```react
<Page user={user} avatarSize={avatarSize} />
// ... 渲染出 ...
<PageLayout user={user} avatarSize={avatarSize} />
// ... 渲染出 ...
<NavigationBar user={user} avatarSize={avatarSize} />
// ... 渲染出 ...
<Link href={user.permalink}>
  <Avatar user={user} size={avatarSize} />
</Link>
```

如果在最后只有 `Avatar` 组件真的需要 `user` 和 `avatarSize`，那么层层传递这两个 props 就显得非常冗余。而且一旦 `Avatar` 组件需要更多从来自顶层组件的 props，你还得在中间层级一个一个加上去，这将会变得非常麻烦。

- ### API

`React.createContext`

```react
const MyContext = React.createContext(defaultValue);
```

创建一个Context对象。当 React 渲染一个订阅了这个 Context 对象的组件，这个组件会从组件树中离自身最近的那个匹配的 `Provider` 中读取到当前的 context 值。

**只有**当组件所处的树中没有匹配到 Provider 时，其 `defaultValue` 参数才会生效。这有助于在不使用 Provider 包装组件的情况下对组件进行测试。注意：将 `undefined` 传递给 Provider 的 value 时，消费组件的 `defaultValue` 不会生效。

`Context.Provider`

```react
<MyContext.Provider value={/*某个值*/} />
```

每个Context对象都会返回一个Provider React组件，它允许消费组件订阅 context 的变化。

Provider 接收一个 `value` 属性，传递给消费组件。一个 Provider 可以和多个消费组件有对应关系。多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据。

当 Provider 的 `value` 值发生变化时，它内部的所有消费组件都会重新渲染。Provider 及其内部 consumer 组件都不受制于 `shouldComponentUpdate` 函数，因此当 consumer 组件在其祖先组件退出更新的情况下也能更新。

`Class.contextType`

```react
class MyClass extends React.Component{
	componentDidMount(){
		let value = this.context; 
	}
	
	componentDidUpdate(){
		let value = this.context;
	}
	
	componentWillUnmount() {
    	let value = this.context;
  	}
  	
  	render(){
  		let value = this.context
  	}
}

MyClass.contextType = MyContext;
```

挂载在 class 上的 `contextType` 属性会被重赋值为一个由 [`React.createContext()`](https://react.docschina.org/docs/context.html#reactcreatecontext) 创建的 Context 对象。这能让你使用 `this.context` 来消费最近 Context 上的那个值。你可以在任何生命周期中访问到它，包括 render 函数中。

- 函数组件中用Context.Consumer接收context

```react
function D(){
  return(
    <div className="grand2">
      <h3>我是D组件</h3>
      <Consumer>
        {
          value => `${value.userName}, 年龄是${value.userAge}`
        }
      </Consumer>
    </div>
  )
}
```

这里，React 组件也可以订阅到 context 变更。这能让你在[函数式组件](https://react.docschina.org/docs/components-and-props.html#function-and-class-components)中完成订阅 context。

这需要[函数作为子元素（function as a child）](https://react.docschina.org/docs/render-props.html#using-props-other-than-render)这种做法。这个函数接收当前的 context 值，返回一个 React 节点。传递给函数的 `value` 值等同于往上组件树离这个 context 最近的 Provider 提供的 `value` 值。如果没有对应的 Provider，`value` 参数等同于传递给 `createContext()` 的 `defaultValue`。

### 错误边界

错误边界是一种 React 组件，这种组件**可以捕获并打印发生在其子组件树任何位置的 JavaScript 错误，并且，它会渲染出备用 UI**，而不是渲染那些崩溃了的子组件树。错误边界在渲染期间、生命周期方法和整个组件树的构造函数中捕获错误。

注意错误边界只能捕获生命周期钩子里面的错误。

错误边界**无法**捕获以下场景中产生的错误：

- 事件处理（[了解更多](https://react.docschina.org/docs/error-boundaries.html#how-about-event-handlers)）
- 异步代码（例如 `setTimeout` 或 `requestAnimationFrame` 回调函数）
- 服务端渲染
- 它自身抛出来的错误（并非它的子组件）

如果一个 class 组件中定义了 [`static getDerivedStateFromError()`](https://react.docschina.org/docs/react-component.html#static-getderivedstatefromerror) 或 [`componentDidCatch()`](https://react.docschina.org/docs/react-component.html#componentdidcatch) 这两个生命周期方法中的任意一个（或两个）时，那么它就变成一个错误边界。当抛出错误后，请使用 `static getDerivedStateFromError()` 渲染备用 UI ，使用 `componentDidCatch()` 打印错误信息。

```react
class ErrorBoundary extends React.Component{
	constructor(props){
        super(props);
        this.state = {hasError:false};
    }
    
    static getDerivedStateFromError(error){
        //更新state使下一次渲染能够显示降级后的UI
        return {hasError:true};
    }
    
    componentDidCatch(error, errorInfo){
        //你同样可以将错误日志上报给服务器
        logErrorToMyService(error,errorInfo);
    }
    
    render(){
        if(this.state.hasError){
            //你可以自定义降级后的UI并渲染
            return <h1>Somethong went wrong.</h1>;
        }
        return this.props.children;
    }
}


//可以把它当作一个常规组件去使用
<ErrorBoundary>
	<MyWidget />
</ErrorBoundary>
```

错误边界的工作方式类似于 JavaScript 的 `catch {}`，不同的地方在于错误边界只针对 React 组件。只有 class 组件才可以成为错误边界组件。大多数情况下, 你只需要声明一次错误边界组件, 并在整个应用中使用它。

注意**错误边界仅可以捕获其子组件的错误**，它无法捕获其自身的错误。如果一个错误边界无法渲染错误信息，则错误会冒泡至最近的上层错误边界，这也类似于 JavaScript 中 catch {} 的工作机制。

```react
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  
  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }
  
  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }  
}

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState(({counter}) => ({
      counter: counter + 1
    }));
  }
  
  render() {
    if (this.state.counter === 5) {
      // Simulate a JS error
      throw new Error('I crashed!');
    }
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
  }
}

function App() {
  return (
    <div>
      <p>
        <b>
          This is an example of error boundaries in React 16.
          <br /><br />
          Click on the numbers to increase the counters.
          <br />
          The counter is programmed to throw when it reaches 5. This simulates a JavaScript error in a component.
        </b>
      </p>
      <hr />
      <ErrorBoundary>
        <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <hr />
      <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
      <ErrorBoundary><BuggyCounter /></ErrorBoundary>
      <ErrorBoundary><BuggyCounter /></ErrorBoundary>
    </div>
  );
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);

```

### Refs转发

**Ref 转发是一个可选特性，其允许某些组件接收 `ref`，并将其向下传递（换句话说，“转发”它）给子组件。**

```react
function FancyButton(props){
    return(
    	<button className="FancyButton">
        	{props.children}
        </button>
    );
}

//FancyButton 使用 React.forwardRef 来获取传递给它的 ref，然后转发到它渲染的 DOM button：
const FancyButton = React.forwardRef(
	(props,ref)=>(
    	<button ref={ref} className="FancyButton">
        	{props.children}
        </button>
    )
);

//可以直接获取DOM button的ref
const ref = React.createRef();
<FancyButton ref={ref}>
    Click me!
</FancyButton>
```

这样，使用 `FancyButton` 的组件可以获取底层 DOM 节点 `button` 的 ref ，并在必要时访问，就像其直接使用 DOM `button` 一样。

以下是对上述示例发生情况的逐步解释：

1. 我们通过调用 `React.createRef` 创建了一个 [React ref](https://react.docschina.org/docs/refs-and-the-dom.html) 并将其赋值给 `ref` 变量。
2. 我们通过指定 `ref` 为 JSX 属性，将其向下传递给 `<FancyButton ref={ref}>`。
3. React 传递 `ref` 给 `forwardRef` 内函数 `(props, ref) => ...`，作为其第二个参数。
4. 我们向下转发该 `ref` 参数到 `<button ref={ref}>`，将其指定为 JSX 属性。
5. 当 ref 挂载完成，`ref.current` 将指向 `<button>` DOM 节点。

- 在高阶组件中转发refs

```react
function logProps(WrappedComponent){
    class LogProps extends React.Component{
        componentDidUpdate(prevProps) {
            console.log('old props:', prevProps);
            console.log('new props:', this.props);
            }
        render(){
            return <WrappedComponent {...this.props} />;
        }
    }
    return LogProps;
}
```

### Fragments

```react
class Table extends React.Component{
    render(){
		return(
        	<table>
            	<tr>
                	<Columns />
                </tr>
            </table>
        );
    }
}
```

`<Columns />` 需要返回多个 `<td>` 元素以使渲染的 HTML 有效。如果在 `<Columns />` 的 `render()` 中使用了父 div，则生成的 HTML 将无效。

```react
class Columns extends React.Component{
    render(){
        return(
        	<div>
            	<td>Hello</td>
                <td>World</td>
            </div>
        );
    }
}


//输出：
<table>
  <tr>
    <div>
      <td>Hello</td>
      <td>World</td>
    </div>
  </tr>
</table>
```

Fragments就解决了这个问题

```react
class Columns extends React.Component{
	render(){
        return(
        	<React.Fragment>
                <td>Hello</td>
                <td>World</td>
            </React.Fragment>
        );
    }
}

//这样输出就是正确的
<table>
  <tr>
    <td>Hello</td>
    <td>World</td>
  </tr>
</table>


import React, {Fragment} from 'react';

return (
    <Fragment>
      <input type="text" ref={myRef}/>
      <h2>当前求和为：{count}</h2>
      <button onClick={add}>点击+1</button>
      <button onClick={unmount}>卸载组件</button>
      <button onClick={show}>点击提示</button>
    </Fragment>
  );
```

还有一种短语法

```react
class Columns extends React.Component {
  render() {
    return (
      <>
        <td>Hello</td>
        <td>World</td>
      </>
    );
  }
}
```

你可以像使用任何其他元素一样使用 `<> </>`，除了它不支持 key 或属性。

- 带key的Fragments

```react
function Glossary(props){
    return(
    	<dl>
        	{props.items.map(item=>(
            	//没有key，React会发出一个关键警告
                <React.Fragment key={item.id}>
                	<dt>{item.term}</dt>
                    <dt>{item.description}</dt>
                </React.Fragment>
            ))}
        </dl>
    );
}
```

### 高阶函数与函数柯里化

什么是高阶函数？如果一个函数符合下面2个规范中的任何一个，那该函数就是高阶函数。

​			**1.若函数接收的参数是一个函数，那么该函数就可以称之为高阶函数。**

​			**2.若函数的返回值是一个函数，那么该函数也可以称之为高阶函数。**

常见的高阶函数：`Promise`、`setTimeout`、`arr.map`等。

函数柯里化：通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式。

```react
class Login extends React.Component{
  state={
    username:'',
    password:''
  }
	saveFormData = (dataType)=>{
    return (event)=>{
      this.setState([dataType]:event.target.value)
    }
  }
  handleSubmit = (event)=>{
    event.preventDefault();
    const {username,password} = this.state;
    alert(`你输入的用户名是:${username},你输入的密码是：${password}`)
  }
  render(){
    return(
    	<form onSubmit={this.handleSubmit}>
      	用户名：<input onChange={this.saveFormData('username')} type="text" name="username"/>
        密码：<input onChange={this.saveFormData('password')} type="password" name="password"/>
      </form>
    )
  }
}
```

注意：<input onChange={this.***saveFormData('username')***} type="text" name="username"/>

**这个如果带上了括号，那就是传递函数的返回值给事件，此时返回值应该是一个函数。如果不带括号，那就是把该函数传给事件。**

不用函数柯里化的写法：

```react
class Login extends React.Component{
  state={
    username:'',
    password:''
  }
	saveFormData = (dataType,event)=>{
      this.setState([dataType]:event.target.value)
  }
  handleSubmit = (event)=>{
    event.preventDefault();
    const {username,password} = this.state;
    alert(`你输入的用户名是:${username},你输入的密码是：${password}`)
  }
  render(){
    return(
    	<form onSubmit={this.handleSubmit}>
      	用户名：<input onChange={(event)=>{this.saveFormData('username',event)}} type="text" name="username"/>
        密码：<input onChange={(event)=>{this.saveFormData('password',event)}} type="password" name="password"/>
      </form>
    )
  }
}
```

### 高阶组件（HOC）未完

高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧。HOC 自身不是 React API 的一部分，它是一种基于 React 的组合特性而形成的设计模式。

具体而言，**高阶组件是参数为组件，返回值为新组件的函数。**

### 与第三方库协同

### Diff算法

1.虚拟DOM中key的作用：当状态中的数据发生变化时，react会根据【新数据】生成【新的虚拟DOM】，随后react进行【新虚拟DOM】与【旧虚拟DOM】的diff比较，比较规则如下：

- 旧虚拟DOM中找到了与新虚拟DOM相同的key：
  - 若虚拟DOM中内容没变，直接使用之前的真实DOM
  - 若虚拟DOM中内容变了，则生成新的真实DOM，随后替换掉页面中之前的真实DOM
- 旧虚拟DOM中未找到与新虚拟DOM相同的key
  - 根据数据创建新的真实DOM，随后渲染到页面。

2.用index作为key 可能会引发的问题：

- 若对数据进行逆序添加、逆序删除等破坏顺序的操作，会产生没有必要的真实DOM更新
- 如果结构中还包含输入类的DOM，会产生错误DOM更新
- 如果不改变顺序，仅用于渲染列表用于展示，使用index作为key是没有问题的

开发中如何选择key：

- 最好使用每条数据的唯一标识作为key，id、手机号、身份证、学号等唯一值。
  - 如果确定只是简单的展示数据，用index也是可以的

## Hooks

### StateHook

- stateHook可以让函数组件也可以有state状态，并进行状态数据的读写操作

- 语法：const [XXX, setXxx] = React.useState(initValue)

- useState()说明：

  1. 参数：第一次初始化指定的值在内部作缓存。
  2. 返回值：返回一个数组，数组中的第一个值为内部当前状态值，第二个值为更新状态的函数。

- setXxx()2种写法：

  setXxx(newvalue):参数为非函数值，直接指定新的状态值。

  setXxx(()=>{}):参数为一个函数，接收原本的状态值，返回新的状态值。

  ```react
  import React, {useState} from 'react';
  function demo(){
      const [count, setCount] = useState(0)
      return (
      	<div>
          	<p>You clicked {count} times</p>
              <button onClick={()=>setCount(count+1)}>
              	Click me
              </button>
          </div>
      )
  }
  ```

  ```react
  //等价的类组件
  class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    render() {
      return (
        <div>
          <p>You clicked {this.state.count} times</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Click me
          </button>
        </div>
      );
    }
  }
  ```

### EffectHook

- effectHook可以让你在函数组件中执行副作用操作（模拟类组件中的生命周期钩子）、

- react中的副作用操作:

  - 发ajax请求
  - 设置订阅/启动定时器
  - 手动更改真实DOM

- 语法和说明：

  ```react
  useEffect(()=>{
      //在此执行任何带副作用操作
      return()=>{
          //在此做一些收尾工作，比如清除定时器/取消订阅等
      }//返回的这个函数就相当于componentwillUnmount()
      
  },[])//如果指定的是[],则不监控任何state，作用就相当于componentDidMount();[count],就监控count的改变，作用相当于componentDidUpdate();如果这个参数不写，就监控所有state的改变。
  ```

- 可以把useEffect Hook看成`componentDidMount`，`componentDidUpdate` 和 `componentWillUnmount` 这三个函数的组合。

### RefHook

- Ref Hook可以在函数组件中存储/查找组件内的标签或任意其他数据
- 语法：const refContainer = userRef()
- 作用：保存标签对象，功能和React.createRef()一样。

### 自定义Hook

