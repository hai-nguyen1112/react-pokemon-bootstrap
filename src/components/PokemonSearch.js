import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import {onSearchTermChange} from '../redux/actions'
import {connect} from 'react-redux'

const PokemonSearch = ({searchTerm, onSearchTermChange}) => {
  return (
    <InputGroup className="mb-3" style={{maxWidth: "350px"}}>
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1"><i className="fas fa-search"></i></InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder="Search by name..."
        aria-label="SearchTerm"
        aria-describedby="basic-addon1"
        value={searchTerm}
        onChange={e => onSearchTermChange(e.target.value)}
      />
    </InputGroup>
  )
}

const mapStateToProps = state => {
  return {
    searchTerm: state.pokedex.searchTerm
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchTermChange: searchTerm => dispatch(onSearchTermChange(searchTerm))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonSearch)
