import { Col, Container, Row, Nav, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg11 from "../assets/img/project-img1.png"
import projImg22 from "../assets/img/project-img2.png"
import projImg33 from "../assets/img/project-img3.png"

import projImg1 from "../assets/img/projects/portfolio.png"
import projImg2 from "../assets/img/projects/run.png"
import projImg3 from "../assets/img/projects/uber.png"
import projImg4 from "../assets/img/projects/keeper.png"
import projImg5 from "../assets/img/projects/tindog.png"
import projImg6 from "../assets/img/projects/intensive.png"

import projImg7 from "../assets/img/projects/drums.png"
import projImg8 from "../assets/img/projects/dice.png"
import projImg9 from "../assets/img/projects/simon.png"

export const Projects = () => {
	const projects = [
		{
			title: "Portfolio",
			description: 'Design & Development',
			imgUrl: projImg1,
			link: "http://www.test.alexanackis.com/",
			linkGitHub: "https://github.com/anackis/ProjectNr3",
		},
		{
			title: "RunSmart",
			description: 'Design & Development',
			imgUrl: projImg2,
			link: "http://test1.alexanackis.com/#promo",
			linkGitHub: "https://github.com/anackis/ProjectNr2",
		},
		{
			title: "Uber",
			description: 'Design & Development',
			imgUrl: projImg3,
			link: "http://test2.alexanackis.com/#",
			linkGitHub: "https://github.com/anackis/ProjectNr1",
		},
		{
			title: "Keeper",
			description: 'Design & Development',
			imgUrl: projImg4,
			link: "http://test8.alexanackis.com/",
			linkGitHub: "https://github.com/anackis/ProjectNr1.16",
		},
		{
			title: "TinDog",
			description: 'Design & Development',
			imgUrl: projImg5,
			link: "http://test4.alexanackis.com/",
			linkGitHub: "https://github.com/anackis/ProjectNr1.1",
		},
		{
			title: "INTENSIVE",
			description: 'Design & Development',
			imgUrl: projImg6,
			link: "http://test3.alexanackis.com/",
			linkGitHub: "https://github.com/anackis/ProjectNr0",
		},
		
		// {
		// 	title: "Business Startup",
		// 	description: 'Design & Development',
		// 	imgUrl: projImg3,
		// },
	];

	const projects2 = [
		{
			title: "Web Drums",
			description: 'Design & Development',
			imgUrl: projImg7,
			link: "http://test6.alexanackis.com/",
			linkGitHub: "https://github.com/anackis/PrjectNr1.4",
		},
		{
			title: "Web Dice Game",
			description: 'Design & Development',
			imgUrl: projImg8,
			link: "http://test5.alexanackis.com/",
			linkGitHub: "https://github.com/anackis/ProjectNr1.3",
		},
		{
			title: "Web Simon's Game",
			description: 'Design & Development',
			imgUrl: projImg9,
			link: "http://test7.alexanackis.com/",
			linkGitHub: "https://github.com/anackis/PrjectNr1.5",
		},
	];
	const projects3 = [
		{
			title: "Future Project",
			description: 'Design & Development',
			imgUrl: projImg11,
		},
		{
			title: "Future Project",
			description: 'Design & Development',
			imgUrl: projImg22,
		},
		{
			title: "Future Project",
			description: 'Design & Development',
			imgUrl: projImg33,
		},
	];
	
	
	return (
		<section className="project" id="projects">
			<Container>
				<Row>
					<Col>
						<h2>Projects</h2>
						<p>
						Here is some of my projects. Please don't judge strict. I am only at the beginning of my path, but I will do everything I can to become a better developer :)
						</p>
						<Tab.Container id="projects-tabs" defaultActiveKey="first">
							<Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
								<Nav.Item>
									<Nav.Link eventKey="first">Web Sites</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="second">Web Games</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="third">Future Projects</Nav.Link>
								</Nav.Item>
							</Nav>
							<Tab.Content>
								<Tab.Pane eventKey="first">
									<Row>
										{
											projects.map((project, index) => {
												return (
													<ProjectCard
														key={index}
														{...project}
													/>
												)
											})
										}
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="second">
								<Row>
										{
											projects2.map((project2, index) => {
												return (
													<ProjectCard
														key={index}
														{...project2}
													/>
												)
											})
										}
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="third">
								<Row>
										{
											projects3.map((project3, index) => {
												return (
													<ProjectCard
														key={index}
														{...project3}
													/>
												)
											})
										}
									</Row>
								</Tab.Pane>
							</Tab.Content>
						</Tab.Container>
					</Col>
				</Row>
			</Container>
			<img className="background-image-right" src={colorSharp2} alt="BgImg"/>
		</section>
	)
	
}