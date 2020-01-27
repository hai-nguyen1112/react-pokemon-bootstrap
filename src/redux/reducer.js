import {combineReducers} from 'redux'
import * as actionTypes from './actionTypes'

const initialState = {
  pokedex: {
    pokedex: [],
    isLoadingPokedex: false,
    loadPokedexError: null
  }
}

const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  }
}

// start of POKEDEX REDUCER
const fetchPokedexStart = (state, action) => {
  return updateObject(state, {
    pokedex: action.pokedex,
    isLoadingPokedex: action.isLoadingPokedex,
    loadPokedexError: action.loadPokedexError
  })
}

const fetchPokedexSuccess = (state, action) => {
  return updateObject(state, {
    pokedex: action.pokedex,
    isLoadingPokedex: action.isLoadingPokedex,
    loadPokedexError: action.loadPokedexError
  })
}

const fetchPokedexFail = (state, action) => {
  return updateObject(state, {
    isLoadingPokedex: action.isLoadingPokedex,
    loadPokedexError: action.loadPokedexError
  })
}

const pokedexReducer = (state = initialState.pokedex, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POKEDEX_START: return fetchPokedexStart(state, action)
    case actionTypes.FETCH_POKEDEX_SUCCESS: return fetchPokedexSuccess(state, action)
    case actionTypes.FETCH_POKEDEX_FAIL: return fetchPokedexFail(state, action)
    default: return state
  }
}
// end of POKEDEX REDUCER

const appReducers = combineReducers({
  pokedex: pokedexReducer
})

const rootReducer = (state, action) => {
  return appReducers(state, action)
}

export default rootReducer
