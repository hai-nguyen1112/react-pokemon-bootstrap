import axios from 'axios'

let instance

switch (window.location.hostname) {
  case 'localhost':
    instance = axios.create({baseURL: 'http://localhost:3000/'})
    break
  case 'pokemon-searcher.netlify.com':
    instance = axios.create({baseURL: 'https://pokemon-searcher-backend.herokuapp.com/'})
    break
  default:
    instance = axios.create({baseURL: 'http://localhost:3000/'})
}

export default instance
