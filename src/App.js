import React from 'react'
import './App.css'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import Pokedex from './containers/Pokedex'
import PokemonProfile from './components/PokemonProfile'
import PokemonEdit from './components/PokemonEdit'

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path='/pokedex/:id/edit' component={PokemonEdit} />
        <Route path='/pokedex/:id' component={PokemonProfile} />
        <Route path='/pokedex' component={Pokedex} />
        <Route path='/home' component={Home} />
        <Route path='/' render={() => <Redirect to="/home" />} />
        <Redirect from='*' to='/' />
      </Switch>
    </div>
  )
}

export default App
