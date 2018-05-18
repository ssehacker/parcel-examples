/**
 * Created by zhouyong on 2018/3/29.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Demo from './Demo';
import Demo2 from './Demo2';


ReactDOM.render((
  <Router>
    <div>
      <Route exact path="/" component={Demo}/>
      <Route path="/demo1" component={Demo}/>
      <Route path="/demo2" component={Demo2}/>
    </div>
  </Router>
), document.querySelector('.app'));