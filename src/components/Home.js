import React from 'react'
import Image from 'react-bootstrap/Image'

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
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Pokedex
        </a>
      </header>
    </>
  )
}

export default Home
