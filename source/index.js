import './css/index.css'
import {Router, IndexRoute, Route, hashHistory} from 'react-router'
import Layout from './Layout'
import React from 'react'
import ReactDOM from 'react-dom'
import Results from './Results'
import Vote from './Vote'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Vote} />
      <Route path='results' component={Results} />
    </Route>
  </Router>,
  document.getElementById('app'))
