import * as actionTypes from './actionTypes'
import axios from '../utils/axiosInstance'

// start of FETCH POKEDEX
export const fetchPokedex = () => {
  return dispatch => {
    dispatch(fetchPokedexStart())

    axios({
      url: 'pokemon',
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
