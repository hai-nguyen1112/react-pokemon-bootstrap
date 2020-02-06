import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import Form from 'react-bootstrap/Form'
import {editPokemon} from '../redux/actions'
import WholePageSpinner from '../helperComponents/WholePageSpinner'
import WholePageErrorMessage from '../helperComponents/WholePageErrorMessage'
import {isEmpty} from 'lodash'
import isEditFormChanged from '../helperFunctions/isEditFormChanged'
import generateEditData from '../helperFunctions/generateEditData'

const PokemonEdit = ({pokemon, history, editPokemon, isEditingPokemon, editPokemonError}) => {
  const [name, setName] = useState(!isEmpty(pokemon) ? pokemon.name : null)
  const [hp, setHp] = useState(!isEmpty(pokemon) ? pokemon.stats.find(stat => stat.name === 'hp').value : null)
  const [attack, setAttack] = useState(!isEmpty(pokemon) ? pokemon.stats.find(stat => stat.name === 'attack').value : null)
  const [defense, setDefense] = useState(!isEmpty(pokemon) ? pokemon.stats.find(stat => stat.name === 'defense').value : null)
  const [speed, setSpeed] = useState(!isEmpty(pokemon) ? pokemon.stats.find(stat => stat.name === 'speed').value : null)
  const [disableSubmitButton, setDisableSubmitButton] = useState(true)

  const handleSubmit = e => {
    e.preventDefault()
    editPokemon(pokemon.id, history, generateEditData(pokemon, name, hp, attack, defense, speed))
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
        !isEmpty(pokemon)
        ?
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
                      <Form.Label column xs={4} sm={4} md={4} lg={4} xl={4}>
                        Name
                      </Form.Label>
                      <Col xs={8} sm={8} md={8} lg={8} xl={8} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Form.Control
                          type="text"
                          maxLength="20"
                          name="name"
                          value={name}
                          onChange={e => {
                            setName(e.target.value)
                            let editForm = {
                              name: e.target.value.toLowerCase(),
                              hp: hp,
                              attack: attack,
                              defense: defense,
                              speed: speed
                            }
                            if (isEditFormChanged(pokemon, editForm)) {
                              setDisableSubmitButton(false)
                            } else {
                              setDisableSubmitButton(true)
                            }
                          }}
                          required
                        />
                      </Col>
                    </Form.Group>
                  </h1>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                  <h1 style={{color: "white", fontFamily: "'Sigmar One', cursive"}}>
                    <Form.Group as={Row} controlId="formHorizontalHp" style={{marginBottom: "-10px"}}>
                      <Form.Label column xs={4} sm={4} md={4} lg={4} xl={4}>
                        HP
                      </Form.Label>
                      <Col xs={8} sm={8} md={8} lg={8} xl={8} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Form.Control
                          type="number"
                          min="1"
                          max="200"
                          step="1"
                          name="hp"
                          value={hp}
                          onChange={e => {
                            let newHp
                            if (isEmpty(e.target.value)) {
                              newHp = e.target.value
                            } else {
                              newHp = parseInt(e.target.value)
                            }
                            setHp(newHp)
                            let editForm = {
                              hp: newHp,
                              name: name,
                              attack: attack,
                              defense: defense,
                              speed: speed
                            }
                            if (isEditFormChanged(pokemon, editForm)) {
                              setDisableSubmitButton(false)
                            } else {
                              setDisableSubmitButton(true)
                            }
                          }}
                          required
                        />
                      </Col>
                    </Form.Group>
                  </h1>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                  <h1 style={{color: "white", fontFamily: "'Sigmar One', cursive"}}>
                    <Form.Group as={Row} controlId="formHorizontalAtk" style={{marginBottom: "-10px"}}>
                      <Form.Label column xs={5} sm={5} md={5} lg={5} xl={5}>
                        ATK
                      </Form.Label>
                      <Col xs={7} sm={7} md={7} lg={7} xl={7} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Form.Control
                          type="number"
                          min="1"
                          max="150"
                          step="1"
                          name="attack"
                          value={attack}
                          onChange={e => {
                            let newAttack
                            if (isEmpty(e.target.value)) {
                              newAttack = e.target.value
                            } else {
                              newAttack = parseInt(e.target.value)
                            }
                            setAttack(newAttack)
                            let editForm = {
                              attack: newAttack,
                              hp: hp,
                              name: name,
                              defense: defense,
                              speed: speed
                            }
                            if (isEditFormChanged(pokemon, editForm)) {
                              setDisableSubmitButton(false)
                            } else {
                              setDisableSubmitButton(true)
                            }
                          }}
                          required
                        />
                      </Col>
                    </Form.Group>
                  </h1>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                  <h1 style={{color: "white", fontFamily: "'Sigmar One', cursive"}}>
                    <Form.Group as={Row} controlId="formHorizontalDef" style={{marginBottom: "-10px"}}>
                      <Form.Label column xs={5} sm={5} md={5} lg={5} xl={5}>
                        DEF
                      </Form.Label>
                      <Col xs={7} sm={7} md={7} lg={7} xl={7} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Form.Control
                          type="number"
                          min="1"
                          max="150"
                          step="1"
                          name="defense"
                          value={defense}
                          onChange={e => {
                            let newDefense
                            if (isEmpty(e.target.value)) {
                              newDefense = e.target.value
                            } else {
                              newDefense = parseInt(e.target.value)
                            }
                            setDefense(newDefense)
                            let editForm = {
                              defense: newDefense,
                              hp: hp,
                              attack: attack,
                              name: name,
                              speed: speed
                            }
                            if (isEditFormChanged(pokemon, editForm)) {
                              setDisableSubmitButton(false)
                            } else {
                              setDisableSubmitButton(true)
                            }
                          }}
                          required
                        />
                      </Col>
                    </Form.Group>
                  </h1>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                  <h1 style={{color: "white", fontFamily: "'Sigmar One', cursive"}}>
                    <Form.Group as={Row} controlId="formHorizontalSpd" style={{marginBottom: "-10px"}}>
                      <Form.Label column xs={5} sm={5} md={5} lg={5} xl={5}>
                        SPD
                      </Form.Label>
                      <Col xs={7} sm={7} md={7} lg={7} xl={7} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Form.Control
                          type="number"
                          min="1"
                          max="150"
                          step="1"
                          name="speed"
                          value={speed}
                          onChange={e => {
                            let newSpeed
                            if (isEmpty(e.target.value)) {
                              newSpeed = e.target.value
                            } else {
                              newSpeed = parseInt(e.target.value)
                            }
                            setSpeed(newSpeed)
                            let editForm = {
                              speed: newSpeed,
                              hp: hp,
                              attack: attack,
                              defense: defense,
                              name: name
                            }
                            if (isEditFormChanged(pokemon, editForm)) {
                              setDisableSubmitButton(false)
                            } else {
                              setDisableSubmitButton(true)
                            }
                          }}
                          required
                        />
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
                  <Button type="submit" variant="outline-success" disabled={disableSubmitButton}>Submit</Button>
                </Col>
              </Row>
            </Form>
          </Container>
        </Container>
        :
        null
      }
    </>
  )
}

const mapStateToProps = (state, props) => {
  return {
    pokemon: state.pokedex.pokedex.find(pokemon => pokemon.id === parseInt(props.match.params.id, 10)),
    isEditingPokemon: state.pokedex.isEditingPokemon,
    editPokemonError: state.pokedex.editPokemonError
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editPokemon: (id, history, editData) => dispatch(editPokemon(id, history, editData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonEdit)
