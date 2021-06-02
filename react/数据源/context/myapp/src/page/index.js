import React, { Component } from 'react';
import { Provider } from '../util/context';
import Son from '../component/Son';

class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
            fruit:"apple",
            count:0,
        }
    }
    getContext = ()=>{
        const {fruit, count} = this.state;
        return {
            fruit,
            countUtil:{
              addCount:  num=>{this.setState({count:count+num})},
              delCount:  num=>{this.setState({count:count-num})}
            }
        }
    }
    render(){
        const {fruit, count} = this.state;
        return (
            <Provider value={this.getContext()}>
                父组件 fruit = {fruit}, count={count}
                <hr />
                <Son />
            </Provider>
        )
    }
}
export default Main;