import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './stores'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import Frontpage from './components/Frontpage'


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path='/' exact>
              <Frontpage />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  )
}

export default App
