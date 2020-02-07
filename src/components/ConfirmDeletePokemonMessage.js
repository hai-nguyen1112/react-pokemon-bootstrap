import React from 'react'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import {deletePokemon} from '../redux/actions'
import {withRouter} from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'

const ConfirmDeletePokemonMessage = ({show, onHide, pokemon, onDeletePokemon, history}) => {
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop={false}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Are you sure you want to delete {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={12} sm={6} md={6} lg={6} xl={6} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Image src={pokemon.sprites.back} style={{minWidth: "17rem", margin: "-20px 0 -20px 0"}} />
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={6} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <i className="fas fa-heart-broken" style={{color: "red", fontSize:"100px"}}></i>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <Button
          variant="warning"
          onClick={onHide}
          style={{color: "white"}}
        >
          No
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            onDeletePokemon(pokemon.id)
            history.push("/pokedex")
            onHide()
          }}
        >
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onDeletePokemon: id => dispatch(deletePokemon(id))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(ConfirmDeletePokemonMessage))
