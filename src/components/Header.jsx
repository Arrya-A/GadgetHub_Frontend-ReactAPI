import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand style={{ color: 'white' }} className=' w-100 fs-5 fw-bolder d-flex align-items-center justify-content-between'>
            
              GadgetHub
  
             
            
          </Navbar.Brand>
          
        </Container>
      </Navbar>
    </>
  )
}

export default Header