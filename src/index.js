import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import CurrentProjects from './views/current-projects'
import AboutUs from './views/about-us'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={CurrentProjects} exact path="/current-projects" />
        <Route component={AboutUs} exact path="/about-us" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
