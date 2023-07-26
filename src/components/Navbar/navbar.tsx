import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

function NavbarMenu() {


  return (
    <>
      <Navbar className='navbarStyle' data-bs-theme="dark">
        <Container className='deleteBg'>
          <Navbar.Brand href="#home" className='logo'>.JD()</Navbar.Brand>
          <Nav className=" deleteBg ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About-me</Nav.Link>
            <Nav.Link href="#pricing">CV</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarMenu;
