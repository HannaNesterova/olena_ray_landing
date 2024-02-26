import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from './NavBar.module.css'

function NavBar(){

    return(
<>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} sticky="top" className={styles.tertiary} >
        <span className={styles.span_left}></span>
          <Container fluid className={styles.container}>

            <Navbar.Brand href="#" className={styles.logo}>Olena Kenyiz</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className={styles.button + ' ' + styles.hideTogglerBorder}/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Меню
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body >
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1" className={styles.href}>Про курс</Nav.Link>
                  <Nav.Link href="#action2" className={styles.href}>Хто я</Nav.Link>
                  <Nav.Link href="#action3" className={styles.href}>Відгуки</Nav.Link>
                  <Nav.Link href="#action4" className={styles.href}>FAQ</Nav.Link>
                  <Nav.Link href="#action5" className={styles.href}>Купити</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
          <span className={styles.span_right}></span>
        </Navbar>
      ))}
    </>

    )
}

export default NavBar;