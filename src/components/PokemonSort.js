import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import {onSortOptionChange} from '../redux/actions'
import {connect} from 'react-redux'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const PokemonSort = ({sortOption, onSortOptionChange}) => {
  return (
    <Dropdown as={ButtonGroup} style={{marginBottom: "20px"}}>
      <Button disabled variant="secondary" style={{minWidth: "150px", textAlign: "left"}}>
      {
        sortOption === 'sort-by-name'
        ?
        "Sort by Name"
        :
        sortOption === 'sort-by-hp'
        ?
        "Sort by HP"
        :
        "Sort by"
      }
      </Button>
      <Dropdown.Toggle split id="dropdown-split-basic" variant="secondary" />
      <Dropdown.Menu>
        <Dropdown.Item eventKey="" onSelect={eventKey => {onSortOptionChange(eventKey)}}>Unsort</Dropdown.Item>
        <Dropdown.Item eventKey="sort-by-name" onSelect={eventKey => {onSortOptionChange(eventKey)}}>Name</Dropdown.Item>
        <Dropdown.Item eventKey="sort-by-hp" onSelect={eventKey => {onSortOptionChange(eventKey)}}>HP</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

const mapStateToProps = state => {
  return {
    sortOption: state.pokedex.sortOption
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSortOptionChange: sortOption => dispatch(onSortOptionChange(sortOption))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonSort)
