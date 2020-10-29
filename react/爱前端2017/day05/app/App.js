import React from "react";
import { connect } from "react-redux";
class App extends React.Component {
    render() {
        return (
            <div>
                app...
                {this.props.V}
                <button onClick={this.props.Add} value="按我"></button>
                <button onClick={this.props.Reduce} value="按我"></button>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            "V": state
        }
    },
    (dispatch)=>{
        return {
            "Add":function(){
                dispatch({"type":"ZENGJIA"});
            },
            "Reduce":function(){
                dispatch({"type":"JIANSHAO"});
            }
        }
    }
)(App);