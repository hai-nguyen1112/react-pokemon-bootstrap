import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import Form from 'react-bootstrap/Form'
import {onEditFormChange, editPokemon} from '../redux/actions'
import WholePageSpinner from '../helperComponents/WholePageSpinner'
import WholePageErrorMessage from '../helperComponents/WholePageErrorMessage'
import {isEmpty} from 'lodash'
import {onSubmitButtonForEditChange} from '../redux/actions'

const PokemonEdit = ({pokemon, editForm, history, onEditFormChange, editPokemon, isEditingPokemon, editPokemonError, disableSubmitButtonForEdit, changeSubmitButtonForEdit}) => {
  const {name, hp, attack, defense, speed} = editForm

  const handleChange = e => {
    if (e.target.name === "name") {
      onEditFormChange([e.target.name, e.target.value.toLowerCase()])
      changeSubmitButtonForEdit(pokemon, Object.assign({}, editForm, {[e.target.name]: e.target.value.toLowerCase()}))
    } else {
      if (!isEmpty(e.target.value)) {
        onEditFormChange([e.target.name, parseInt(e.target.value, 10)])
        changeSubmitButtonForEdit(pokemon, Object.assign({}, editForm, {[e.target.name]: parseInt(e.target.value, 10)}))
      } else {
        onEditFormChange([e.target.name, e.target.value])
        changeSubmitButtonForEdit(pokemon, Object.assign({}, editForm, {[e.target.name]: e.target.value}))
      }
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    let updatedValues = []
    updatedValues.push(pokemon)
    updatedValues.push(history)
    if (pokemon.name.toLowerCase() !== name) {
      updatedValues.push(["name", name])
    }
    if (pokemon.stats.find(stat => stat.name === 'hp').value !== hp) {
      updatedValues.push(["hp", hp])
    }
    if (pokemon.stats.find(stat => stat.name === 'attack').value !== attack) {
      updatedValues.push(["attack", attack])
    }
    if (pokemon.stats.find(stat => stat.name === 'defense').value !== defense) {
      updatedValues.push(["defense", defense])
    }
    if (pokemon.stats.find(stat => stat.name === 'speed').value !== speed) {
      updatedValues.push(["speed", speed])
    }
    editPokemon(...updatedValues)
  }

  return (
    <>
      {
        isEditingPokemon
        ?
        <WholePageSpinner />
        :
        !isEmpty(editPokemonError)
        ?
        <WholePageErrorMessage />
        :
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
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                  <h1 style={{color: "white", fontFamily: "'Sigmar One', cursive"}}>
                    <Form.Group as={Row} controlId="formHorizontalName" style={{marginBottom: "-10px"}}>
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
                    <Form.Group as={Row} controlId="formHorizontalHp" style={{marginBottom: "-10px"}}>
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
                    <Form.Group as={Row} controlId="formHorizontalAtk" style={{marginBottom: "-10px"}}>
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
                    <Form.Group as={Row} controlId="formHorizontalDef" style={{marginBottom: "-10px"}}>
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
                    <Form.Group as={Row} controlId="formHorizontalSpd" style={{marginBottom: "-10px"}}>
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
                  <Button type="submit" variant="outline-success" disabled={disableSubmitButtonForEdit}>Submit</Button>
                </Col>
              </Row>
            </Form>
          </Container>
        </Container>
      }
    </>
  )
}

const mapStateToProps = (state, props) => {
  return {
    pokemon: state.pokedex.pokedex.find(pokemon => pokemon.id === parseInt(props.match.params.id, 10)),
    editForm: state.pokedex.editForm,
    isEditingPokemon: state.pokedex.isEditingPokemon,
    editPokemonError: state.pokedex.editPokemonError,
    disableSubmitButtonForEdit: state.pokedex.disableSubmitButtonForEdit
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEditFormChange: (...updatedValues) => dispatch(onEditFormChange(...updatedValues)),
    editPokemon: (...updatedValues) => dispatch(editPokemon(...updatedValues)),
    changeSubmitButtonForEdit: (pokemon, editForm) => dispatch(onSubmitButtonForEditChange(pokemon, editForm))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonEdit)
