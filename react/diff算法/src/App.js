import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons:[
        {id:1, name:'zhang3', age:18},
        {id:2, name:'li4', age:19}
      ]
    };
  }
  add=()=>{
    const {persons} = this.state;
    const p = {id:persons.length+1, name:"wang5", age:20}
    this.setState({
      persons:[p, ...persons]
    })
  }
  render(){
    return(
      <div>
        <h3>展示人员信息</h3>
        <button onClick={this.add}>添加王五</button>
        <ol>
          {
            this.state.persons.map((person)=>{
                return <li key={person.id}>{person.name}----{person.age}</li>
            })
          }
        </ol>
      </div>
    );
  }
}

export default App;
