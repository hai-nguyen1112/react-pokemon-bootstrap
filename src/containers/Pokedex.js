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
import ExitButton from '../helperComponents/ExitButton'
import PokemonSearch from '../components/PokemonSearch'
import PokemonSort from '../components/PokemonSort'

class Pokedex extends Component {
  componentDidMount() {
    this.props.fetchPokedex()
  }

  render() {
    const {isLoadingPokedex, loadPokedexError, pokedex, searchTerm, sortOption} = this.props

    let pokemonCards
    if (!isEmpty(pokedex)) {
      pokemonCards
      =
      pokedex
      .filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .sort(
        sortOption === 'sort-by-name'
        ?
        (pokemon1, pokemon2) => pokemon1.name.toLowerCase().localeCompare(pokemon2.name.toLowerCase())
        :
        sortOption === 'sort-by-hp'
        ?
        (pokemon1, pokemon2) => pokemon1.stats.find(stat => stat.name === 'hp').value - pokemon2.stats.find(stat => stat.name === 'hp').value
        :
        () => null
      )
      .map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)
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
          <Container fluid>
            <Row style={{padding: "20px 0 0 0"}}>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <h1
                  style={{
                    fontFamily: "'Sigmar One', cursive",
                    color: "white"
                  }}
                >
                  Pokemon Searcher
                </h1>
              </Col>
            </Row>
            <Row style={{padding: "20px 0 10px 0"}}>
              <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                <PokemonSort />
              </Col>
              <Col xs={12} sm={12} md={12} lg={4} xl={4} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <PokemonSearch />
              </Col>
              <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                <ExitButton />
              </Col>
            </Row>
            <Row style={{padding: "10px 0 0 0"}}>
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
    loadPokedexError: state.pokedex.loadPokedexError,
    searchTerm: state.pokedex.searchTerm,
    sortOption: state.pokedex.sortOption
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPokedex: () => dispatch(fetchPokedex())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex)
