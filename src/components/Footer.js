import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';




export const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<Row className="align-item-center">
					<Col sm={6}>
						<div className="spacebox">
              <img className="space" src="https://img.icons8.com/nolan/96/space-shuttle.png" alt="Space"/>
              <span className="alexname" >Alex Anackis</span>
            </div>
					</Col>
					<Col sm={6} className="text-center text-sm-end">
					<div className="footerbox">
					<div className="contacts">
                <a  href="tel:+37122101016" >+37122101016</a>
                <a  href="mailto: anackis@inbox.lv">anackis@inbox.lv</a>
              </div>
						<div className="social-icon">
				
									<a href="https://github.com/anackis?tab=overview&from=2022-11-01&to=2022-11-11"><img src={navIcon2} alt="navIcon" /></a>
                  <a href="https://www.linkedin.com/in/alex-anackis-9831371a8/"><img src={navIcon1} alt="navIcon" /></a>
                  <a href="https://www.instagram.com/alex_anackis_/"><img src={navIcon3} alt="navIcon" /></a>
						</div>
						</div>
						<p>CopyRight 2022. All Right Reserved</p>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}