import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

function NavbarMenu() {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);

  const handleToggleMobileNavbar = () => {
    setShowMobileNavbar(!showMobileNavbar);
  };

  return (
    <>
      <Navbar className='navbarStyle navbar-pc' data-bs-theme="dark">
        <Container className='deleteBg'>
          <Navbar.Brand href="/" className='logo'>.JD()</Navbar.Brand>
          <Button 
        variant="primary"
        onClick={handleToggleMobileNavbar}
        className="{`d-block d-sm-none ${showMobileNavbar ? 'd-none' : ''}`} button-color"
      >
        <span className="material-symbols-outlined">menu</span>
      </Button>
          <Nav className={`deleteBg ms-auto d-none d-sm-flex ${showMobileNavbar ? 'd-none' : ''}`}>
            {/* Mostrar los enlaces del navbar solo en pantallas más grandes */}
            <Nav.Link href="/" className='menu'>
                <li>
                    <a href="/">
                    <span>Home</span>
                    <span className="material-symbols-outlined">
                    home
                    </span>
                    </a>
                </li>
             </Nav.Link>
             <Nav.Link href="/" className='menu'>
                <li>
                    <a href="/About">
                    <span>About</span>
                    <span className="material-symbols-outlined">
                    info
                    </span>
                    </a>
                </li>
             </Nav.Link>
             <Nav.Link href="#cv" className='menu'>
                <li>
                    <a href="https://europa.eu/europass/eportfolio/api/eprofile/shared-profile/juan+david-garc%C3%ADa/17cb677d-66c7-410e-860f-f8aced720ed7?view=html">
                    <span>CV</span>
                    <span className="material-symbols-outlined">
                    picture_as_pdf
                    </span>
                    </a>
                </li>
             </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Botón para abrir el offcanvas en pantallas de celular */}


      {/* navbar mobile */}
      <Offcanvas
        show={showMobileNavbar}
        onHide={() => setShowMobileNavbar(false)}
        className='navbar-mobile'
        placement='start'
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='logo'>.JD()</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column mini-navbar">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About-me</Nav.Link>
            <Nav.Link href="https://europa.eu/europass/eportfolio/api/eprofile/shared-profile/juan+david-garc%C3%ADa/17cb677d-66c7-410e-860f-f8aced720ed7?view=html">CV</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavbarMenu;
