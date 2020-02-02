import React from 'react'
import {connect} from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import {onEditFormChange} from '../redux/actions'

const PokemonProfile = ({pokemon, history, onEditFormChange}) => {
  let name = pokemon.name
  let hp = pokemon.stats.find(stat => stat.name === 'hp').value
  let attack = pokemon.stats.find(stat => stat.name === 'attack').value
  let defense = pokemon.stats.find(stat => stat.name === 'defense').value
  let speed = pokemon.stats.find(stat => stat.name === 'speed').value

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
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </h1>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <h1 style={{color: "white", fontFamily: "'Sigmar One', cursive"}}>
              <i className="fas fa-heart" style={{color: 'red'}}></i> {hp} hp
            </h1>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <h1 style={{color: "white", fontFamily: "'Sigmar One', cursive"}}>
              <i className="fas fa-khanda" style={{color: 'red'}}></i> {attack} atk
            </h1>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <h1 style={{color: "white", fontFamily: "'Sigmar One', cursive"}}>
              <i className="fas fa-shield-alt" style={{color: 'red'}}></i> {defense} def
            </h1>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <h1 style={{color: "white", fontFamily: "'Sigmar One', cursive"}}>
              <i className="fas fa-running" style={{color: 'red'}}></i> {speed} spd
            </h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={4} md={4} lg={4} xl={4} style={{margin: "20px 0 0 0"}}>
            <Button variant="outline-success" onClick={() => history.push("/pokedex")}>Back to Pokedex</Button>
          </Col>
          <Col xs={12} sm={4} md={4} lg={4} xl={4} style={{margin: "20px 0 0 0"}}>
            <Button variant="outline-warning" onClick={() => {onEditFormChange(['name', name], ['hp', hp], ['attack', attack], ['defense', defense], ['speed', speed]); history.push(`/pokedex/${pokemon.id}/edit`)}}>Edit</Button>
          </Col>
          <Col xs={12} sm={4} md={4} lg={4} xl={4} style={{margin: "20px 0 0 0"}}>
            <Button variant="outline-danger">Delete</Button>
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

const mapDispatchToProps = dispatch => {
  return {
    onEditFormChange: (...updatedValues) => dispatch(onEditFormChange(...updatedValues))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonProfile)
