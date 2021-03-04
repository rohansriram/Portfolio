import React from "react";

const ProjectItem = (props) => {
	return (
		<div className='card text-center container'>
			<div style={{ display: "inline-block" }}>
				<img
					src={require("../assets/github.svg")}
					alt=''
					className='round-img'
					style={{ width: "10%", float: "left" }}
				/>
				<h4 style={{}}>{props.item.name}</h4>
			</div>
			<p
				style={{
					display: "inline-block",
					color: "#C0392B",
					fontWeight: "bold",
				}}
			>
				[{" "}
				{props.item.tools.map((item) => (
					<span>{item}, </span>
				))}
				]
			</p>
			<p>{props.item.description}</p>

			<div>
				<button
					onClick={() => window.open(props.item.link)}
					className='btn btn-dark btn-sm my-1'
				>
					more
				</button>
			</div>
		</div>
	);
};

export default ProjectItem;
