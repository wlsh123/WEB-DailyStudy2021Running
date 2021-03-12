import React from 'react';
import PropTypes from 'prop-types';
class People extends React.Component{
  constructor(props){
    super(props);
    this.state={
        name:null,
        age:null,
        sex:null
    }
  }
  static propTypes = {
    name:PropTypes.string.isRequired,
    age:PropTypes.number,
    sex:PropTypes.bool
  }
  static defaultProps = {
    age:18,
    sex:true

  }
  render(){
    return (
      <div>
        <ul>
          <li>姓名：{this.state.name}</li>
          <li>性别：{this.state.age}</li>
          <li>年龄：{this.state.sex}</li>
        </ul>
      </div>
    );
  }
}
export default People;