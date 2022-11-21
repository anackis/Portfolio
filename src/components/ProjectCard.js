import { Col } from "react-bootstrap";
export const ProjectCard = ({title, description, imgUrl, link, linkGitHub}) => {
	return(
		<Col sm={6} md={4}>
				<div className="proj-imgbx">
					<img className="procetCardImg" src={imgUrl} alt="ProjectCardImg"/>
					<div className="proj-txtx">
						<h4>{title}</h4>
						{/* <span>{description}</span> */}
						<div className="proj-imgbx_links">
							<span> <a target="_blank" href={link} rel="noopener noreferrer">Link to Web Site</a> </span>
							<span> <a href={linkGitHub} target="_blank" rel="noopener noreferrer">Link to GitHub Project</a> </span>
						</div>
					</div>
				</div>
		</Col>
	)
}