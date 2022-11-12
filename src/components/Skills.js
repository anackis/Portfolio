import {Col, Container, Row} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

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
								<h2>
									Skills
								</h2>
								<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae et fugiat, quo alias explicabo dolores impedit assumenda accusamus provident earum aperiam inventore architecto rerum, natus praesentium odit neque voluptas eos?
								</p>
								<Carousel responsive={responsive} infinite={true} className="skills-slider">
									<div className="item">
										<img src={meter1} alt="skillssection1" />
										<h5>Web Development</h5>
									</div>
									<div className="item">
										<img src={meter2} alt="skillssection2" />
										<h5>Brand Identity</h5>
									</div>
									<div className="item">
										<img src={meter3} alt="skillssection3" />
										<h5>Logo Design</h5>
									</div>
									<div className="item">
										<img src={meter1} alt="skillssection4" />
										<h5>Web Development</h5>
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