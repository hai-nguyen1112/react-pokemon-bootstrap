import React from 'react'
import Button from 'react-bootstrap/Button'
import {withRouter} from 'react-router-dom'
import {onResetPersistedState} from '../redux/actions'
import {connect} from 'react-redux'

const ExitButton = ({history, onResetPersistedState}) => {
  return (
    <Button
      variant="outline-light"
      onClick={() => {
        history.push("/home")
        onResetPersistedState()
      }}
    >
      Exit
    </Button>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onResetPersistedState: () => dispatch(onResetPersistedState())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(ExitButton))
