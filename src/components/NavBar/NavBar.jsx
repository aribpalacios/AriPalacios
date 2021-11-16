import {Nav, Navbar, Container,NavDropdown} from 'react-bootstrap'
import CartWidget from '../CartWidget'

function NavBar() {
  return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Hoggen</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">Cervezas</Nav.Link>
      <NavDropdown title="Merchandising" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Packs</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Pintas</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Remeras</NavDropdown.Item>              
      </NavDropdown>
      <Nav.Link href="#pricing">Nosotros</Nav.Link>
      <Nav.Link href="#pricing">Contacto</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">
        <CartWidget />
      </Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar