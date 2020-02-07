import React, {useState} from 'react'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ConfirmDeletePokemonMessage from './ConfirmDeletePokemonMessage'

const PokemonDelete = ({pokemon}) => {
  const [showConfirm, setShowConfirm] = useState(false)

  return (
    <Col xs={12} sm={4} md={4} lg={4} xl={4} style={{margin: "20px 0 0 0"}}>
      <Button
        variant="outline-danger"
        onClick={() => setShowConfirm(true)}
      >
        Delete
      </Button>
      <ConfirmDeletePokemonMessage
        show={showConfirm}
        onHide={() => setShowConfirm(false)}
        pokemon={pokemon}
      />
    </Col>
  )
}

export default PokemonDelete
