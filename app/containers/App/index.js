import React from 'react'
import { connect } from 'react-redux'
import { NativeRouter } from 'react-router-native'

import LoginPage from '../LoginPage'
import Container from '../../components/Container'

const App = () => (
  <NativeRouter>
    <Container>
      <LoginPage />
    </Container>
  </NativeRouter>
)

export default connect()(App)
