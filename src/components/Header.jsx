import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand style={{ color: 'white' }} className=' w-100 fs-5 fw-bolder d-flex align-items-center justify-content-between'>
            <Link to={'/'} style={{ color: 'white', textDecoration: 'none' }}>GadgetHub</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header