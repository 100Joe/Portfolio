import React from 'react'

import About from './About'
import Footer from './Footer'
import Navbar from './Navbar'
import ProjectCard from './ProjectCard'
import TechProficiency from './TechProficiency'

import { Container } from '@material-ui/core'

function Main() {
  return (
    <Container>
      <Navbar />
      <About />
      <ProjectCard />
      <TechProficiency />
      <Footer />
    </Container>
  );
}

export default Main;
