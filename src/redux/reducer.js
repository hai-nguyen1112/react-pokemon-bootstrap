import {combineReducers} from 'redux'
import * as actionTypes from './actionTypes'

const initialState = {
  pokedex: {
    pokedex: [],
    isLoadingPokedex: false,
    loadPokedexError: null,
    searchTerm: "",
    sortOption: "",
    isEditingPokemon: false,
    editPokemonError: null,
    isAddingPokemon: false,
    addPokemonError: null,
    isDeletingPokemon: false,
    deletePokemonError: null
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

const onSearchTermChange = (state, action) => {
  return updateObject(state, {
    searchTerm: action.searchTerm
  })
}

const onSortOptionChange = (state, action) => {
  return updateObject(state, {
    sortOption: action.sortOption
  })
}

const editPokemonStart = (state, action) => {
  return updateObject(state, {
    isEditingPokemon: action.isEditingPokemon,
    editPokemonError: action.editPokemonError
  })
}

const editPokemonSuccess = (state, action) => {
  let newPokedex = state.pokedex.map(pokemon => {
    if (pokemon.id === action.updatedPokemon.id) {
      return action.updatedPokemon
    } else {
      return pokemon
    }
  })

  return updateObject(state, {
    isEditingPokemon: action.isEditingPokemon,
    editPokemonError: action.editPokemonError,
    pokedex: newPokedex
  })
}

const editPokemonFail = (state, action) => {
  return updateObject(state, {
    isEditingPokemon: action.isEditingPokemon,
    editPokemonError: action.editPokemonError
  })
}

const addPokemonStart = (state, action) => {
  return updateObject(state, {
    isAddingPokemon: action.isAddingPokemon,
    addPokemonError: action.addPokemonError
  })
}

const addPokemonSuccess = (state, action) => {
  let newPokedex = JSON.parse(JSON.stringify(state.pokedex))
  newPokedex.push(action.newPokemon)
  return updateObject(state, {
    isAddingPokemon: action.isAddingPokemon,
    addPokemonError: action.addPokemonError,
    pokedex: newPokedex
  })
}

const addPokemonFail = (state, action) => {
  return updateObject(state, {
    isAddingPokemon: action.isAddingPokemon,
    addPokemonError: action.addPokemonError
  })
}

const deletePokemonStart = (state, action) => {
  return updateObject(state, {
    isDeletingPokemon: action.isDeletingPokemon,
    deletePokemonError: action.deletePokemonError
  })
}

const deletePokemonSuccess = (state, action) => {
  let newPokedex = state.pokedex.filter(pokemon => pokemon.id !== action.id)

  return updateObject(state, {
    isDeletingPokemon: action.isDeletingPokemon,
    deletePokemonError: action.deletePokemonError,
    pokedex: newPokedex
  })
}

const deletePokemonFail = (state, action) => {
  return updateObject(state, {
    isDeletingPokemon: action.isDeletingPokemon,
    deletePokemonError: action.deletePokemonError
  })
}

const onResetPokedex = (state, action) => {
  return updateObject(state, {
    pokedex: [],
    isLoadingPokedex: false,
    loadPokedexError: null,
    searchTerm: "",
    sortOption: "",
    isEditingPokemon: false,
    editPokemonError: null,
    isAddingPokemon: false,
    addPokemonError: null,
    isDeletingPokemon: false,
    deletePokemonError: null
  })
}

const pokedexReducer = (state = initialState.pokedex, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POKEDEX_START: return fetchPokedexStart(state, action)
    case actionTypes.FETCH_POKEDEX_SUCCESS: return fetchPokedexSuccess(state, action)
    case actionTypes.FETCH_POKEDEX_FAIL: return fetchPokedexFail(state, action)
    case actionTypes.SEARCH_TERM_WAS_CHANGED: return onSearchTermChange(state, action)
    case actionTypes.SORT_OPTION_WAS_CHANGED: return onSortOptionChange(state, action)
    case actionTypes.PERSISTED_STATE_WAS_RESET: return onResetPokedex(state, action)
    case actionTypes.EDIT_POKEMON_START: return editPokemonStart(state, action)
    case actionTypes.EDIT_POKEMON_SUCCESS: return editPokemonSuccess(state, action)
    case actionTypes.EDIT_POKEMON_FAIL: return editPokemonFail(state, action)
    case actionTypes.ADD_POKEMON_START: return addPokemonStart(state, action)
    case actionTypes.ADD_POKEMON_SUCCESS: return addPokemonSuccess(state, action)
    case actionTypes.ADD_POKEMON_FAIL: return addPokemonFail(state, action)
    case actionTypes.DELETE_POKEMON_START: return deletePokemonStart(state, action)
    case actionTypes.DELETE_POKEMON_SUCCESS: return deletePokemonSuccess(state, action)
    case actionTypes.DELETE_POKEMON_FAIL: return deletePokemonFail(state, action)
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
