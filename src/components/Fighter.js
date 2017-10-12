import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullFighters from './FullFighters'
import FighterDetails from './FighterDetails'

// The Roster component matches one of two different routes
// depending on the full pathname
const Fighter = () => (
  <Switch>
    <Route exact path='/fighters' component={FullFighters}/>
    <Route path='/fighters/:number' component={FighterDetails}/>
  </Switch>
)


export default Fighter
