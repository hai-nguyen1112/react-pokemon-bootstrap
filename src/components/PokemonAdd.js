import React, {useState} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Collapse from 'react-bootstrap/Collapse'

const PokemonAdd = () => {
  const [open, setOpen] = useState(false)
  const [pokemonNumber, setPokemonNumber] = useState("")
  const [name, setName] = useState("")
  const [hp, setHp] = useState("")
  const [attack, setAttack] = useState("")
  const [defense, setDefense] = useState("")
  const [speed, setSpeed] = useState("")

  const clearState = () => {
    setPokemonNumber("")
    setName("")
    setHp("")
    setAttack("")
    setDefense("")
    setSpeed("")
  }

  const handleClickOfPanel = () => {
    setOpen(!open)
    if (open) {
      clearState()
    }
  }

  return (
    <Card bg="info" text="white" style={{margin: "5px 19px 19px 19px"}}>
      <Card.Header
        onClick={handleClickOfPanel}
        style={{cursor: "pointer"}}
      >
        <h4 style={{fontFamily: "'Sigmar One', cursive", margin: "-5px", display: "flex", justifyContent: "flex-start"}}>
          {
            open
            ?
            <i className="fas fa-arrow-circle-up"></i>
            :
            <i className="fas fa-arrow-circle-down"></i>
          }
          &nbsp;
          Add Pokemon
        </h4>
      </Card.Header>
      <Collapse in={open}>
        <Card.Body style={{marginBottom: "-17px"}}>
          <Form>
            <Row>
              <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                <Row>
                  <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <Card>
                      <Card.Img variant="top" src={parseInt(pokemonNumber) > 0 && parseInt(pokemonNumber) < 808 ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png` : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png"} />
                    </Card>
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <Card>
                      <Card.Img variant="top" src={parseInt(pokemonNumber) > 0 && parseInt(pokemonNumber) < 808 ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonNumber}.png` : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/0.png"} />
                    </Card>
                  </Col>
                </Row>
                <Row style={{marginTop: "25px"}}>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <p style={{color: "white", fontFamily: "'Sigmar One', cursive"}}>
                      <Form.Control type="number" min="1" max="807" step="1" name="pokemonNumber" placeholder="Enter a number for new pokemon" value={pokemonNumber} onChange={e => setPokemonNumber(e.target.value)} required />
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                <h4 style={{color: "white", fontFamily: "'Sigmar One', cursive"}}>
                  <Form.Group as={Row} controlId="formHorizontalName" style={{marginBottom: "-10px"}}>
                    <Form.Label column xs={5} sm={5} md={5} lg={5} xl={5}>
                      Name
                    </Form.Label>
                    <Col xs={7} sm={7} md={7} lg={7} xl={7} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                      <Form.Control type="text" maxLength="20" name="name" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)} required />
                    </Col>
                  </Form.Group>
                </h4>
                <h4 style={{color: "white", fontFamily: "'Sigmar One', cursive"}}>
                  <Form.Group as={Row} controlId="formHorizontalHp" style={{marginBottom: "-10px"}}>
                    <Form.Label column xs={5} sm={5} md={5} lg={5} xl={5}>
                      HP
                    </Form.Label>
                    <Col xs={7} sm={7} md={7} lg={7} xl={7} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                      <Form.Control type="number" min="1" max="200" step="1" name="hp" placeholder="Enter hp" value={hp} onChange={e => setHp(e.target.value)} required />
                    </Col>
                  </Form.Group>
                </h4>
                <h4 style={{color: "white", fontFamily: "'Sigmar One', cursive"}}>
                  <Form.Group as={Row} controlId="formHorizontalAtk" style={{marginBottom: "-10px"}}>
                    <Form.Label column xs={5} sm={5} md={5} lg={5} xl={5}>
                      ATK
                    </Form.Label>
                    <Col xs={7} sm={7} md={7} lg={7} xl={7} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                      <Form.Control type="number" min="1" max="150" step="1" name="attack" placeholder="Enter attack" value={attack} onChange={e => setAttack(e.target.value)} required />
                    </Col>
                  </Form.Group>
                </h4>
                <h4 style={{color: "white", fontFamily: "'Sigmar One', cursive"}}>
                  <Form.Group as={Row} controlId="formHorizontalDef" style={{marginBottom: "-10px"}}>
                    <Form.Label column xs={5} sm={5} md={5} lg={5} xl={5}>
                      DEF
                    </Form.Label>
                    <Col xs={7} sm={7} md={7} lg={7} xl={7} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                      <Form.Control type="number" min="1" max="150" step="1" name="defense" placeholder="Enter defense" value={defense} onChange={e => setDefense(e.target.value)} required />
                    </Col>
                  </Form.Group>
                </h4>
                <h4 style={{color: "white", fontFamily: "'Sigmar One', cursive"}}>
                  <Form.Group as={Row} controlId="formHorizontalSpd" style={{marginBottom: "-10px"}}>
                    <Form.Label column xs={5} sm={5} md={5} lg={5} xl={5}>
                      SPD
                    </Form.Label>
                    <Col xs={7} sm={7} md={7} lg={7} xl={7} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                      <Form.Control type="number" min="1" max="150" step="1" name="speed" placeholder="Enter speed" value={speed} onChange={e => setSpeed(e.target.value)} required />
                    </Col>
                  </Form.Group>
                </h4>
              </Col>
              <Col xs={12} sm={12} md={12} lg={4} xl={4} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Row>
                  <Col style={{padding: "10px"}}>
                    <Button type="submit" variant="outline-light" disabled={false}>Submit</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Collapse>
    </Card>
  )
}

export default PokemonAdd
