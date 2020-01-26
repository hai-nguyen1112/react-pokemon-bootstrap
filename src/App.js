import React from 'react'
import './App.css'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path='/home' render={Home} />
        <Route path='/' render={() => <Redirect to="/home" />} />
        <Redirect from='*' to='/' />
      </Switch>
    </div>
  )
}

export default App
