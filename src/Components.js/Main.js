import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import LowerMain from './LowerMain'
import UpperMain from './UpperMain'

import { Container } from '@material-ui/core'

function Main() {
  return (
    <Container>
      <Navbar />
      <UpperMain />
      <LowerMain />
      <Footer />
    </Container>
  );
}

export default Main;
