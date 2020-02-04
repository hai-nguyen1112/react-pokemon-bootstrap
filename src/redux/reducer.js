import {combineReducers} from 'redux'
import * as actionTypes from './actionTypes'

const initialState = {
  pokedex: {
    pokedex: [],
    isLoadingPokedex: false,
    loadPokedexError: null,
    searchTerm: "",
    sortOption: "",
    editForm: {
      name: "",
      hp: "",
      attack: "",
      defense: "",
      speed: ""
    },
    isEditingPokemon: false,
    editPokemonError: null,
    disableSubmitButtonForEdit: true
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

const onEditFormChange = (state, action) => {
  let newForm = JSON.parse(JSON.stringify(state.editForm))
  let updatedValues = {}
  for (const value of action.updatedValues) {
    updatedValues[value[0]] = value[1]
  }
  newForm = {...newForm, ...updatedValues}
  return updateObject(state, {
    editForm: newForm
  })
}

const onSubmitButtonForEditChange = (state, action) => {
  return updateObject(state, {
    disableSubmitButtonForEdit: action.disableSubmitButtonForEdit
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

const onResetPokedex = (state, action) => {
  return updateObject(state, {
    pokedex: [],
    isLoadingPokedex: false,
    loadPokedexError: null,
    searchTerm: "",
    sortOption: "",
    editForm: {
      name: "",
      hp: "",
      attack: "",
      defense: "",
      speed: ""
    },
    isEditingPokemon: false,
    editPokemonError: null,
    disableSubmitButtonForEdit: true
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
    case actionTypes.EDIT_FORM_WAS_CHANGED: return onEditFormChange(state, action)
    case actionTypes.EDIT_POKEMON_START: return editPokemonStart(state, action)
    case actionTypes.EDIT_POKEMON_SUCCESS: return editPokemonSuccess(state, action)
    case actionTypes.EDIT_POKEMON_FAIL: return editPokemonFail(state, action)
    case actionTypes.SUBMIT_BUTTON_FOR_EDIT_WAS_CHANGED: return onSubmitButtonForEditChange(state, action)
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
