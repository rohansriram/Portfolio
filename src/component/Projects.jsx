import React from "react";
//import { Link } from "react-router-dom";
import ProjectItem from "./ProjectItem";
import { data } from "../data";

const Projects = () => {
	console.log(data.content.projects);
	return (
		<div 
			className='col-lg-12 col-s-3'
			style={{ marginTop: "3%", marginBottom: "10%" }}>
			<div className='container' style={userStyle}>
				{data.content.projects.map((item) => (
					<ProjectItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

const userStyle = {
	display: "grid",
	gridTemplateColumns: "repeat(1,2fr)",
	gridGap: "1rem",
};

export default Projects;
