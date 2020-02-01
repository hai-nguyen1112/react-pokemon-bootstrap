import React, {useState} from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import {withRouter} from 'react-router-dom'

const PokemonCard = ({pokemon, history}) => {
  const [showFront, setShowFront] = useState(true)

  return (
    <Col xs={6} sm={6} md={4} lg={3} xl={2}>
      <Card
        className="text-center"
        border="dark"
        style={{
          marginBottom: "28px",
          borderWidth: "2px"
        }}
        onClick={() => history.push(`/pokedex/${pokemon.id}`)}
      >
        <Card.Img
          variant="top"
          src={showFront ? pokemon.sprites.front: pokemon.sprites.back}
          onMouseEnter={() => setShowFront(!showFront)}
        />
        <Card.Body>
          <Card.Title>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Card.Title>
          <Card.Text>
            <i className="fas fa-heart" style={{color: 'red'}}></i> {pokemon.stats.find(stat => stat.name === 'hp').value} hp
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default withRouter(PokemonCard)
