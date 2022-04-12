import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { connect } from 'react-redux'
import { initializeProjects } from './reducers/projectReducer'

import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import Portfolio from './components/Portfolio'

const App = (props) => {
  useEffect(() => {
    props.initializeProjects()
  })
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Portfolio />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default connect(null, { initializeProjects })(App)
