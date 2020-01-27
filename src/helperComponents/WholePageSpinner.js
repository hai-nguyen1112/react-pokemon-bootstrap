import React from 'react'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'

const WholePageSpinner = () => {
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
      <Spinner
        animation='border'
        role='status'
        variant='light'
        style={{
          width: '5rem',
          height: '5rem'
        }}
      />
    </Container>
  )
}

export default WholePageSpinner
