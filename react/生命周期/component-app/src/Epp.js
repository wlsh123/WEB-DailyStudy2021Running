import React from 'react';
class Epp extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(props){
    console.log('componentWillReceiveProps'+props)
  }
  render() {
    return (
      <div>
        <div>Epp</div>
        <div>从父组件接收到的车{this.props.carName}</div>
      </div>
    );
  }
}
export default Epp;