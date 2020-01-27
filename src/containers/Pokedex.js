import React, {Component} from 'react'
import {fetchPokedex} from '../redux/actions'
import {connect} from 'react-redux'
import {isEmpty} from 'lodash'
import WholePageSpinner from '../helperComponents/WholePageSpinner'
import WholePageErrorMessage from '../helperComponents/WholePageErrorMessage'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PokemonCard from '../components/PokemonCard'

class Pokedex extends Component {
  componentDidMount() {
    if (isEmpty(this.props.pokedex)) {
      this.props.fetchPokedex()
    }
  }

  render() {
    const {isLoadingPokedex, loadPokedexError, pokedex} = this.props

    let pokemonCards
    if (!isEmpty(pokedex)) {
      pokemonCards = pokedex.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)
    }

    return (
      <>
        {
          isLoadingPokedex
          ?
          <WholePageSpinner />
          :
          !isEmpty(loadPokedexError)
          ?
          <WholePageErrorMessage />
          :
          <Container>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <h1
                  style={{
                    fontFamily: "'Sigmar One', cursive",
                    color: "white",
                    padding: "20px"
                  }}
                >
                  Pokemon Searcher
                </h1>
              </Col>
            </Row>
            <Row>
              {pokemonCards}
            </Row>
          </Container>
        }
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    pokedex: state.pokedex.pokedex,
    isLoadingPokedex: state.pokedex.isLoadingPokedex,
    loadPokedexError: state.pokedex.loadPokedexError
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPokedex: () => dispatch(fetchPokedex())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex)
