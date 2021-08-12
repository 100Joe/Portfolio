import React from 'react'
import ProjectCard from './ProjectCard'
import TechProficiency from './TechProficiency'

function SubMain() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', }}>
      <ProjectCard />
      <TechProficiency />
    </div>
  )
}

export default SubMain
