import React from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home"><Link to="/">Hoggen</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link to="/">Home</Link> 
          <Link to="/categoria/cervezas">Cervezas</Link> 
          <Link to="/categoria/merchandising">Merchansising</Link>
          {/* <NavDropdown title="Merchandising" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Packs</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Pintas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Remeras</NavDropdown.Item>              
          </NavDropdown> */}
          {/* <Nav.Link href="#pricing">Nosotros</Nav.Link>
          <Nav.Link href="#pricing">Contacto</Nav.Link> */}
        </Nav>
        <Nav>
          <Link to='/Cart'>
            <CartWidget />
         </Link>
          
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    
        // <nav style={
        //     {backgroundColor: "#ffa", 
        //     padding: "3rem",
        //     fontSize: "1.5rem", 
        //     display: "flex", 
        //     flexWrap: "wrap",
        //     justifyContent: "space-between",
        //     alignItems: "center",}}>
                
        //     <Link to="/">Hoggen</Link>
        //     <div>
        //         <ul style={
        //           {display: "inline-block",
        //           padding: "20px",}
        //         }>
        //             <li>
        //                 {/* Esto antes estaba asi <a href="/">Home</a>  */}
        //                 <Link to="/">Home</Link>
        //             </li>
        //             <li>
        //                 {/* Esto antes estaba asi <a href="/cat1">Categoria 1</a> */}
        //                 <Link to="/categoria/cervezas">Cervezas</Link> 
        //             </li>
        //             <li>
        //                  {/* Esto antes estaba asi <a href="/cat2">Categoria 2</a>  */}
        //                  <Link to="/categoria/merchandising">Merchansising</Link>
        //             </li>
        //         </ul>
        //     </div>
        //     <CartWidget />
        // </nav>
       
    )
}

export default NavBar; 