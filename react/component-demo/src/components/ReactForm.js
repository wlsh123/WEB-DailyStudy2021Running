import React, { Component } from 'react';
class ReactForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:"reect表单",
            name:"",
            sex:"1",
            city:"",
            citys:[
                '北京','上海','广州'
            ],
            hobby:[
                {
                    title:"睡觉",
                    checked:true
                },{
                    title:"吃饭",
                    checked:false
                },{
                    title:"敲代码",
                    checked:false
                }
            ],
            info:""
         };
    }
    handleName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    formSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state.name+"  "+ this.state.sex+" "+this.state.city+" "+this.state.hobby+" "+this.state.info);
    }
    handleSex=(e)=>{
        this.setState({
            sex:e.target.value
        })
    }
    selectChange=(e)=>{
        this.setState({
            city:e.target.value
        })
    }
    checkboxChange=(key)=>{
        let hobby = this.state.hobby;
        hobby[key].checked = !hobby[key].checked;
        this.setState({
            hobby:hobby
        })
    }
    textareaChange=(e)=>{
        this.setState({
            info:e.target.value
        })
    }
    render() {
        return (
            <div>
            <form onSubmit={this.formSubmit}>
            用户名：<input type="text" value={this.state.name} onChange={this.handleName}/><br />
            性  别: <input type="radio" value="1" checked={this.state.sex == 1} onChange={this.handleSex} />男
                        <input type="radio" value="2" checked={this.state.sex == 2} onChange={this.handleSex} />女<br/>
            居住城市：
            <select value={this.state.city} onChange={this.selectChange}>
                {this.state.citys.map((value,key)=>{
                    return <option key={key}>{value}</option>
                })}
                
            </select><br/>
            爱 好:
            {
                this.state.hobby.map((value,key)=>{
                    return(
                        <span key={key}>
                            <input type="checkbox" checked={value.checked} onChange={this.checkboxChange.bind(this, key)}/> {value.title}
                        </span>
                    )
                })
            }<br/>
            <textarea value={this.state.info} onChange={this.textareaChange} cols="500px" rows="500px"/><br/>
            <input type="submit" defaultValue="提交"/>
            </form>
            </div>
        );
    }
}

export default ReactForm;