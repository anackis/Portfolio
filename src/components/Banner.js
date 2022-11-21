import {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg";
import Popup from "./Popup";

export const Banner = () => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const toRotate = ["Full Stack ", "Web Developer "];
	const [text, setText] = useState('');
	const [delta, setDelta] = useState(300 - Math.random() * 100);
	const period = 2000;

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		},delta )
		return () => { clearInterval(ticker)};
	}, [text])

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
		setText(updatedText);
		if (isDeleting) {
			setDelta(prevDelta => prevDelta /2)
		}
		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
			setDelta(period);
		} else if (isDeleting && updatedText === '' ) {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setDelta(500);
		}
	}

	const [buttonPopup, setButtonPopup] = useState(false);

	return (
		<section className="banner" id="home">
			<Container>
				<Row className="align-items-center">
					<Col xs={12} md={6} xl={7}>
							<span className="tagline">Welcome to my Portfolio</span>
							<h1>{`Hi I'm `}<span className="wrap">{text}</span></h1>
							<p>My name is Alex I am 2.5 years experienced Hardware Test Engineer. But now my goal is to become a junior Web developer taught myself from online resources such as Udemy, YouTube, StackOverflow, W3schools, and other platforms. </p>
							<p>
              At this moment I am studying for 3+ months ( Started in Jul 2022 ). I
              finished the Udemy Front End Course (34h of video learning content, Full Stack Dr. Angela Yu Course (65h of video learning content), watched many YouTube videos, had practice completing web development tasks. Have experience in practice with: HTML, BEM, CSS, SASS, SCSS, Bootstrap, Git, GitHub, JavaScript, React, JQuery, Node.js, Gulp, Express, RestAPI, MongoDB, Figma, Avocode, Asana.</p>
							<button className="banner__button" onClick={() => setButtonPopup(true)}>Let's connect <ArrowRightCircle size={25} /> </button>
							<Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                {/* <h3>My popup</h3> */}
              </Popup>
					</Col>
					<Col className="disappear" xs={12} md={6} xl={5} >
						<img src={headerImg} alt="Header Img"/>
					</Col>
				</Row>
			</Container>
		</section>
	)
}