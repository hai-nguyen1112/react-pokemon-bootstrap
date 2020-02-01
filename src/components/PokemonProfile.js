import React from 'react'
import {connect} from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

const PokemonProfile = ({pokemon, history}) => {

  return (
    <Container
      fluid
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: "20px"
      }}
    >
      <Container style={{maxWidth: "34rem"}}>
        <Row>
          <Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <Image src={pokemon.sprites.front} style={{minWidth: "17rem", margin: "-30px 0 -30px 0"}} />
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <Image src={pokemon.sprites.back} style={{minWidth: "17rem", margin: "-30px 0 -30px 0"}} />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <h1 style={{color: "white", fontFamily: "'Sigmar One', cursive"}}>
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </h1>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <h1 style={{color: "white", fontFamily: "'Sigmar One', cursive"}}>
              <i className="fas fa-heart" style={{color: 'red'}}></i> {pokemon.stats.find(stat => stat.name === 'hp').value} hp
            </h1>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <h1 style={{color: "white", fontFamily: "'Sigmar One', cursive"}}>
              <i className="fas fa-khanda" style={{color: 'red'}}></i> {pokemon.stats.find(stat => stat.name === 'attack').value} atk
            </h1>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <h1 style={{color: "white", fontFamily: "'Sigmar One', cursive"}}>
              <i className="fas fa-shield-alt" style={{color: 'red'}}></i> {pokemon.stats.find(stat => stat.name === 'defense').value} def
            </h1>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <h1 style={{color: "white", fontFamily: "'Sigmar One', cursive"}}>
              <i className="fas fa-running" style={{color: 'red'}}></i> {pokemon.stats.find(stat => stat.name === 'speed').value} spd
            </h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} md={6} lg={6} xl={6} style={{margin: "20px 0 0 0"}}>
            <Button variant="outline-success" onClick={() => history.push("/pokedex")}>Back to Pokedex</Button>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={6} style={{margin: "20px 0 0 0"}}>
            <Button variant="outline-warning">Edit {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Button>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

const mapStateToProps = (state, props) => {
  return {
    pokemon: state.pokedex.pokedex.find(pokemon => pokemon.id === parseInt(props.match.params.id, 10))
  }
}

export default connect(mapStateToProps)(PokemonProfile)
