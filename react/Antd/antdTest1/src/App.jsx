import React, { Component } from 'react';
import { Button, DatePicker } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  
  render() { 
    return ( 
      <div>
        <Button type="primary" shape="circle" icon={<SearchOutlined />} /><br/>
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button><br/>
        <DatePicker />
      </div>
     );
  }
}
 
export default App;
