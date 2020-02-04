import * as actionTypes from './actionTypes'
import axios from '../utils/axiosInstance'
import {isEqual} from 'lodash'
import isEditFormChanged from '../helperFunctions/isEditFormChanged'

// start of FETCH POKEDEX
export const fetchPokedex = () => {
  return dispatch => {
    dispatch(fetchPokedexStart())

    axios({
      url: '/pokemon',
      method: 'GET'
    })
    .then(response => dispatch(fetchPokedexSuccess(response.data)))
    .catch(error => dispatch(fetchPokedexFail(error)))
  }
}

const fetchPokedexStart = () => {
  return {
    type: actionTypes.FETCH_POKEDEX_START,
    pokedex: [],
    isLoadingPokedex: true,
    loadPokedexError: null
  }
}

const fetchPokedexSuccess = pokedex => {
  return {
    type: actionTypes.FETCH_POKEDEX_SUCCESS,
    pokedex: pokedex,
    isLoadingPokedex: false,
    loadPokedexError: null
  }
}

const fetchPokedexFail = error => {
  return {
    type: actionTypes.FETCH_POKEDEX_FAIL,
    isLoadingPokedex: false,
    loadPokedexError: error
  }
}
// end of FETCH POKEDEX

// start of SEARCH TERM
export const onSearchTermChange = searchTerm => {
  return {
    type: actionTypes.SEARCH_TERM_WAS_CHANGED,
    searchTerm: searchTerm
  }
}
// end of SEARCH TERM

// start of SORT OPTION
export const onSortOptionChange = sortOption => {
  return {
    type: actionTypes.SORT_OPTION_WAS_CHANGED,
    sortOption: sortOption
  }
}
// end of SORT OPTION

// start of RESET PERSISTED STATE
export const onResetPersistedState = () => {
  return {
    type: actionTypes.PERSISTED_STATE_WAS_RESET
  }
}
// end of RESET PERSISTED STATE

// start of EDIT FORM
export const onEditFormChange = (...updatedValues) => {
  return {
    type: actionTypes.EDIT_FORM_WAS_CHANGED,
    updatedValues: updatedValues
  }
}

export const onSubmitButtonForEditChange = (pokemon, editForm) => {
  return {
    type: actionTypes.SUBMIT_BUTTON_FOR_EDIT_WAS_CHANGED,
    disableSubmitButtonForEdit: isEditFormChanged(pokemon, editForm)
  }
}
// end of EDIT FORM

// start of EDIT POKEMON
export const editPokemon = (...updatedValues) => {
  let updatedData = {}
  updatedData["stats"] = updatedValues[0].stats

  for (let i = 2; i < updatedValues.length; i++) {
    if (updatedValues[i][0] === "name") {
      updatedData["name"] = updatedValues[i][1]
    } else {
      updatedData["stats"] = updatedData["stats"].map(stat => {
        if (stat.name === updatedValues[i][0]) {
          return {
            value: updatedValues[i][1],
            name: updatedValues[i][0]
          }
        } else {
          return stat
        }
      })
    }
  }

  if (isEqual(updatedData["stats"], updatedValues[0].stats)) {
    delete updatedData["stats"]
  }

  return dispatch => {
    dispatch(editPokemonStart())

    axios({
      url: `/pokemon/${updatedValues[0].id}`,
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      data: {
        ...updatedData
      }
    })
    .then(response => {
      dispatch(editPokemonSuccess(response.data))
      updatedValues[1].push(`/pokedex/${updatedValues[0].id}`)
    })
    .catch(error => dispatch(editPokemonFail(error)))
  }
}

const editPokemonStart = () => {
  return {
    type: actionTypes.EDIT_POKEMON_START,
    isEditingPokemon: true,
    editPokemonError: null
  }
}

const editPokemonSuccess = updatedPokemon => {
  return {
    type: actionTypes.EDIT_POKEMON_SUCCESS,
    isEditingPokemon: false,
    editPokemonError: null,
    updatedPokemon: updatedPokemon
  }
}

const editPokemonFail = error => {
  return {
    type: actionTypes.EDIT_POKEMON_FAIL,
    isEditingPokemon: false,
    editPokemonError: error
  }
}
// end of EDIT POKEMON
