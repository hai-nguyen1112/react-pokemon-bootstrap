import React from 'react'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import {connect} from 'react-redux'
import {onResetPersistedState} from '../redux/actions'
import {withRouter} from 'react-router-dom'

const WholePageErrorMessage = ({history, onResetPersistedState}) => {
  return (
    <Container
      fluid
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Alert variant="danger">
        <Alert.Heading>Oops, something went wrong!</Alert.Heading>
        <Alert.Link onClick={() => {history.push("/home"); onResetPersistedState()}}>Click here</Alert.Link> to go back to the Home page.
      </Alert>
    </Container>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onResetPersistedState: () => dispatch(onResetPersistedState())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(WholePageErrorMessage))
