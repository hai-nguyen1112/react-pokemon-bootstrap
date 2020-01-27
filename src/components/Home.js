import React from 'react'
import Image from 'react-bootstrap/Image'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
      <header className="App-header">
        <Image
          src='/pikachu-logo.gif'
          style={{maxWidth: '200px'}}
        />
        <p>
          A <code>Pokemon Searcher App</code> using <code>React Bootstrap</code>
        </p>
        <Link
          className="App-link"
          to="/pokedex"
        >
          Go to Pokedex
        </Link>
      </header>
    </>
  )
}

export default Home
