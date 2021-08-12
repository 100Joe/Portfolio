import React from 'react'

import About from './About'
import Footer from './Footer'
import Navbar from './Navbar'


import { Container } from '@material-ui/core'
import SubMain from './SubMain'

function Main() {
  return (
    <Container>
      <Navbar />
      <About />
      <SubMain />
      <Footer />
    </Container>
  );
}

export default Main;
