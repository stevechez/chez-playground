import React from 'react';
import { Container } from 'semantic-ui-react'

const Layout = ({ children }) => {
  return (
    <>
      <Container className="mt-20">
        <main>{children}</main>
      </Container>
    </>
  )
}

export default Layout;