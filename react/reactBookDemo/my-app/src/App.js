import React from "react";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      radioValue:true,
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange=(e)=>{
    console.log(e)
    this.setState({
      radioValue:false
    })
  }
  render(){
    return (
      <div>
        <p>gender:</p>
        <label>
          <input
            type="radio"
            value="male"
            checked={this.state.radioValue === 'male'}
            onChange={this.handleChange}
          />male
        </label> <br />
        <label>
          <input
            type="radio"
            value="female"
            checked='false'
          />female
        </label>
      </div>
    );
  }
}

export default App;
