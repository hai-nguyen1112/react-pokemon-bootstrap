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
