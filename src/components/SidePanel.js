// import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import {useState, useEffect} from "react";




export const SidePanel = () => {

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

 
 

	return (
		<aside className={scrolled ? "scrolled" : ""}>
      <div className="sidepanel">
      <div className="sidepanel__text title title_fz16">Social networks</div>
      <div className="sidepanel__line"></div>
      
      
      <a href="https://www.instagram.com/alex_anackis_/"><img src={navIcon3} alt="navIcon" /></a>
      <a href="https://www.linkedin.com/in/alex-anackis-9831371a8/"><img src={navIcon1} alt="navIcon" /></a>
      <a href="https://github.com/anackis?tab=overview&from=2022-11-01&to=2022-11-11"><img src={navIcon2} alt="navIcon"/></a>
      </div>
    </aside>
	)
}