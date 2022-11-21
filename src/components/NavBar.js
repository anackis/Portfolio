import {useState, useEffect} from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import Popup from "./Popup";
// import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';




export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const [buttonPopup, setButtonPopup] = useState(false);

  



    return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <div className="spacebox">
              <img className="space" src="https://img.icons8.com/nolan/96/space-shuttle.png" alt="Space"/>
              <span className="alexname" >Alex</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"> 
              {/* <span className="navbar=toggler-icon"></span> */}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Projects</Nav.Link>
              <Nav.Link href="#connect" className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Connect</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="contacts">
                <a  href="tel:+37122101016" >+37122101016</a>
                <a  href="mailto: anackis@inbox.lv">anackis@inbox.lv</a>
              </div>
              <div className="social-icon">
                  <a href="https://github.com/anackis?tab=overview&from=2022-11-01&to=2022-11-11"><img src={navIcon2} alt="navIcon" /></a>
                  <a href="https://www.linkedin.com/in/alex-anackis-9831371a8/"><img src={navIcon1} alt="navIcon" /></a>
                  <a href="https://www.instagram.com/alex_anackis_/"><img src={navIcon3} alt="navIcon" /></a>
              </div>
              
              <button className="vvd" onClick={() => setButtonPopup(true)}><span>Let's Connect</span></button>

              <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                {/* <h3>My popup</h3> */}
              </Popup>

            </span>
          </Navbar.Collapse>
          {/* <div className="social-mobile" >
            <div className="social-mobile__info">
              <a  href="tel:+37122101016" >+37122101016</a>
              <a  href="mailto: anackis@inbox.lv">anackis@inbox.lv</a>
            </div>
            <div className="social-icon">
                  <a href="https://github.com/anackis?tab=overview&from=2022-11-01&to=2022-11-11"><img src={navIcon2} alt="navIcon" /></a>
                  <a href="https://www.linkedin.com/in/alex-anackis-9831371a8/"><img src={navIcon1} alt="navIcon" /></a>
                  <a href="https://www.instagram.com/alex_anackis_/"><img src={navIcon3} alt="navIcon" /></a>
            </div>
          </div> */}
        </Container>
    </Navbar>
    );
}
