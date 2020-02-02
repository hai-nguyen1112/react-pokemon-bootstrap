import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import Form from 'react-bootstrap/Form'
import {onEditFormChange} from '../redux/actions'

const PokemonEdit = ({pokemon, editForm, history, onEditFormChange}) => {
  const {name, hp, attack, defense, speed} = editForm

  const handleChange = e => {
    onEditFormChange([e.target.name, e.target.value])
  }

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
        <Form>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <h1 style={{color: "white", fontFamily: "'Sigmar One', cursive"}}>
              <Form.Group as={Row} controlId="formHorizontalName">
                <Form.Label column sm={4}>
                  Name
                </Form.Label>
                <Col sm={8} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <Form.Control type="text" maxLength="20" name="name" value={name} onChange={handleChange} required />
                </Col>
              </Form.Group>
            </h1>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <h1 style={{color: "white", fontFamily: "'Sigmar One', cursive"}}>
              <Form.Group as={Row} controlId="formHorizontalHp">
                <Form.Label column sm={4}>
                  HP
                </Form.Label>
                <Col sm={8} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <Form.Control type="number" min="1" max="200" step="1" name="hp" value={hp} onChange={handleChange} required />
                </Col>
              </Form.Group>
            </h1>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <h1 style={{color: "white", fontFamily: "'Sigmar One', cursive"}}>
              <Form.Group as={Row} controlId="formHorizontalAtk">
                <Form.Label column sm={5}>
                  ATK
                </Form.Label>
                <Col sm={7} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <Form.Control type="number" min="1" max="150" step="1" name="attack" value={attack} onChange={handleChange} required />
                </Col>
              </Form.Group>
            </h1>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <h1 style={{color: "white", fontFamily: "'Sigmar One', cursive"}}>
              <Form.Group as={Row} controlId="formHorizontalDef">
                <Form.Label column sm={5}>
                  DEF
                </Form.Label>
                <Col sm={7} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <Form.Control type="number" min="1" max="150" step="1" name="defense" value={defense} onChange={handleChange} required />
                </Col>
              </Form.Group>
            </h1>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <h1 style={{color: "white", fontFamily: "'Sigmar One', cursive"}}>
              <Form.Group as={Row} controlId="formHorizontalSpd">
                <Form.Label column sm={5}>
                  SPD
                </Form.Label>
                <Col sm={7} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <Form.Control type="number" min="1" max="150" step="1" name="speed" value={speed} onChange={handleChange} required />
                </Col>
              </Form.Group>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} md={6} lg={6} xl={6} style={{margin: "20px 0 0 0"}}>
            <Button variant="outline-warning" onClick={() => history.goBack()}>Cancel</Button>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={6} style={{margin: "20px 0 0 0"}}>
            <Button type="submit" variant="outline-success">Submit</Button>
          </Col>
        </Row>
        </Form>
      </Container>
    </Container>
  )
}

const mapStateToProps = (state, props) => {
  return {
    pokemon: state.pokedex.pokedex.find(pokemon => pokemon.id === parseInt(props.match.params.id, 10)),
    editForm: state.pokedex.editForm
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEditFormChange: (...updatedValues) => dispatch(onEditFormChange(...updatedValues))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonEdit)
