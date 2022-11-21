import {Col, Container, Row} from "react-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

import html5 from "../assets/img/skills/html5.svg";
import css3 from "../assets/img/skills/css3.svg";
import jquery from "../assets/img/skills/jquery.svg";
import js from "../assets/img/skills/js.svg";
import mongo from "../assets/img/skills/mongo.svg";
import node from "../assets/img/skills/node.svg";
import react from "../assets/img/skills/react.svg";

import sass from "../assets/img/skills/sass.svg";
import figma from "../assets/img/skills/figma.svg";
import gulp from "../assets/img/skills/gulp.svg";
import github from "../assets/img/skills/github.svg";
import git from "../assets/img/skills/git.svg";



export const Skills = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	};
	<Carousel responsive={responsive}>
		<div>Item 1</div>
		<div>Item 2</div>
		<div>Item 3</div>
		<div>Item 4</div>
	</Carousel>;

	return(
		<section className="skill" id="skills">

				<Container>
					<Row>
						<Col>
							<div className="skill-box">
								<h2 className="skills_title">
									Skills
								</h2>
								{/* <p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae et fugiat, quo alias explicabo dolores impedit assumenda accusamus provident earum aperiam inventore architecto rerum, natus praesentium odit neque voluptas eos?
								</p> */}
								<Carousel responsive={responsive} infinite={true} className="skills-slider">
									<div className="item">
										<img src={meter1} alt="skillssection1" />
										<h5>Front End</h5>
									</div>
									<div className="item">
										<img src={meter3} alt="skillssection3" />
										<h5>Full Stack</h5>
									</div>
									<div className="item">
										<img src={meter2} alt="skillssection2" />
										<h5>Back End</h5>
									</div>
								</Carousel>
							</div>
						</Col>
					</Row>
				</Container>

				<Container className="skill__second-box">
					<Row>
						<Col>
							<div className="skill-box">
								<h2>
									What I use
								</h2>
								
								<Carousel responsive={responsive} infinite={true} className="skills-slider">
									<div className="item">
											<img src={html5} alt="skillssection4" />
									</div>
									<div className="item">
										<img src={css3} alt="skillssection4" />
									</div>
									<div className="item">
										<img src={js} alt="skillssection4" />
									</div>
									<div className="item">
										<img src={react} alt="skillssection4" />
									</div>
									<div className="item">
										<img className="jquery" src={jquery} alt="skillssection4" />
									</div>
									<div className="item">
										<img src={node} alt="skillssection4" />
									</div>
									<div className="item">
										<img src={mongo} alt="skillssection4" />
									</div>
									<div className="item">
										<img src={sass} alt="skillssection4" />
									</div>
									<div className="item">
										<img src={git} alt="skillssection4" />
									</div>
									<div className="item">
										<img src={github} alt="skillssection4" />
									</div>
									<div className="item">
										<img src={gulp} alt="skillssection4" />
									</div>
									<div className="item">
										<img src={figma} alt="skillssection4" />
									</div>
								</Carousel>
							</div>
						</Col>
					</Row>
				</Container>
				
				<img className="background-image-left" src={colorSharp} alt="bg-right"/>
		</section>
	)

}