import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from '../pages/Home'
import Life from '../pages/Life'
import Mine from '../pages/Mine'
import Shop from '../pages/Shop'
import NotFound from '../pages/NotFound'

export default class AppRouter extends React.Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/life' component={Life}></Route>
          <Route path='/mine' component={Mine}></Route>
          <Route path='/shop' component={Shop}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    )
  }
}