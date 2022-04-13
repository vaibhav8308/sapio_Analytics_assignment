import React from 'react'
import {Navbar,Container,Nav,FormControl,Form,Button} from "react-bootstrap"
function Header() {
  return (
    <div>
   <Navbar bg="light" expand="lg" fixed='top'>
  <Container fluid>
    <Navbar.Brand href="#">My App</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="liked">Liked</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button onClick={'Student'} variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>


    </div>
  )
}

export default Header