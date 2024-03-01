import { useState } from 'react';
import { Link } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from './NavBar.module.css';
import logo from '../../img/imgs/logo.png';

function NavBar(){
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded); 
  };

  const handleClose = () => {
    setExpanded(false); 
  };

  const handleLinkClick = () => {
    setExpanded(false); 
  };
  const handleLogoClick = (event) => {
    if (event.target.classList.contains(styles.logo)) {
      event.stopPropagation();
    } else {
      handleToggle();
    }
  };


    return(
<>
      {['md'].map((expand) => (
        <Navbar key={expand} 
        expand={expand} 
        expanded={expanded}sticky="top"
        className={styles.tertiary} >
          <Container fluid className={styles.container}
            onClick={handleToggle} >

            <Navbar.Brand href="#" onClick={handleLogoClick}><img src={logo} className={styles.logo} alt='logo'/></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className={styles.button + ' ' + styles.hideTogglerBorder}/>
            <Navbar.Offcanvas
              show={expanded} 
              onHide={handleClose} 
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
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link to="about" 
                    smooth={true} 
                    duration={500} 
                    onClick={handleLinkClick} 
                    className={styles.href}>Про мене
                </Link>
                <Link to="benefits" 
                    smooth={true} 
                    duration={500} 
                    onClick={handleLinkClick} 
                    className={styles.href}>Переваги
                </Link>
                <Link to="program" 
                    smooth={true} 
                    duration={500} 
                    onClick={handleLinkClick} 
                    className={styles.href}>Програма
                </Link>
                <Link to="feedbacks" 
                    smooth={true} 
                    duration={500} 
                    onClick={handleLinkClick} 
                    className={styles.href}>Відгуки
                </Link>
              </Nav>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>

    )
}

export default NavBar;