import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Mount extends Component{
    static PropTypes={
        //...
    };
    static defaultProps = {
        //...
    };
    constructor(props){
        super(props);
        this.state = {
            count:'',
        };
    };
    componentWillMount(){
        //...
        this.setState({
            count:count+1
        })
    };
    componentDidMount(){
        //...
    };
    render(){
        return(
            <div>
                <input type="text" name="" id="" value={this.state.count}/>
            </div>
        )
    }
}
export default Mount;