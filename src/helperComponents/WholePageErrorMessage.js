import React from 'react'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'

const WholePageErrorMessage = () => {
  return (
    <Container
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
        <Alert.Link href="/home">Click here</Alert.Link> to go back to the Home page.
      </Alert>
    </Container>
  )
}

export default WholePageErrorMessage
