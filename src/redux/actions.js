import * as actionTypes from './actionTypes'
import axios from '../utils/axiosInstance'

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

// start of EDIT POKEMON
export const editPokemon = (id, history, editData) => {
  return dispatch => {
    dispatch(editPokemonStart())

    axios({
      url: `/pokemon/${id}`,
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      data: {
        ...editData
      }
    })
    .then(response => {
      dispatch(editPokemonSuccess(response.data))
      history.push(`/pokedex/${id}`)
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

// start of ADD POKEMON
export const addPokemon = newPokemon => {
  return dispatch => {
    dispatch(addPokemonStart())

    axios({
      url: "/pokemon",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      data: {
        ...newPokemon
      }
    })
    .then(response => dispatch(addPokemonSuccess(response.data)))
    .catch(error => dispatch(addPokemonFail(error)))
  }
}

const addPokemonStart = () => {
  return {
    type: actionTypes.ADD_POKEMON_START,
    isAddingPokemon: true,
    addPokemonError: null
  }
}

const addPokemonSuccess = newPokemon => {
  return {
    type: actionTypes.ADD_POKEMON_SUCCESS,
    isAddingPokemon: false,
    addPokemonError: null,
    newPokemon: newPokemon
  }
}

const addPokemonFail = error => {
  return {
    type: actionTypes.ADD_POKEMON_FAIL,
    isAddingPokemon: false,
    addPokemonError: error
  }
}
// end of ADD POKEMON

// start of DELETE POKEMON
export const deletePokemon = id => {
  return dispatch => {
    dispatch(deletePokemonStart())

    axios({
      url: `/pokemon/${id}`,
      method: "DELETE"
    })
    .then(response => dispatch(deletePokemonSuccess(id)))
    .catch(error => dispatch(deletePokemonFail(error)))
  }
}

const deletePokemonStart = () => {
  return {
    type: actionTypes.DELETE_POKEMON_START,
    isDeletingPokemon: true,
    deletePokemonError: null
  }
}

const deletePokemonSuccess = id => {
  return {
    type: actionTypes.DELETE_POKEMON_SUCCESS,
    isDeletingPokemon: false,
    deletePokemonError: null,
    id: id
  }
}

const deletePokemonFail = error => {
  return {
    type: actionTypes.DELETE_POKEMON_FAIL,
    isDeletingPokemon: false,
    deletePokemonError: error
  }
}
// end of DELETE POKEMON
