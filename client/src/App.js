import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './Home'
import Info from './Info'
import Game from './Game'

function App() {
  return (
      <Router>
          <Switch>
              <Route path = '/' exact>
                  <Home></Home>
              </Route>
              <Route path = '/info' exact>
                  <Info></Info>
              </Route>
              <Route path = '/abc' exact>
                  <div>xyz</div>
              </Route>
              <Route path = '/game' exact>
                  <Game></Game>
              </Route>
          </Switch>
      </Router>
  )
}

export default App;