import React from "react";
import Fade from "react-reveal/Fade";
import Dp from "../assets/dp.jpg";
import ReactCardFlip from 'react-card-flip';

const About = () => {
	return (
		<div className='container-fluid'>
			{/* <Fade left big> */}

			<Fade left big>
				<div
					className=' col-sm-6 text-center '
					style={{
						float: "left",
						width: "50%",
					}}
				>
					<h1>Rohan Sriram</h1>
					<img
						src={Dp}
						className='rounded-circle'
						alt='Cinque Terre'
						width='40%'
						height='40%'
						style={{ margin: "2%" }}
					></img>
					<h2 style={{ color: "#566573" }}>
						Masters in Computer Science
						<br />
						University of North Carolina at Charlotte
					</h2>
				</div>
			</Fade>
			<div
				className='col-sm-6 align-items-xl-right'
				style={{
					float: "right",
					width: "50%",
					height: "100%",
					alignItems: "center",
				}}
			>
				<Fade right big>
					<h2 style={{ padding: "2%", backgroundColor: "white" }}>
						<span
							style={{
								color: "#900",
								float: "left",
								fontSize: "250%",
								lineheight: "90px",
								paddingRight: "8px",
								paddinLeft: "3px",
							}}
						>
					    Hello,
						</span>
						<br></br><br></br><br></br>
						I am currently pursuing my Master's degree at UNC, Charlotte graduating
						in May 2021 and am looking for full time Software Engineer roles. 
						I am a passionate programmer who understands the importance of simple yet optimized solution. 
						I strive to sharpen my programming skills through problem solving.<br />
						<br />
						&nbsp;  &nbsp; &nbsp; With experience as a Software Engineer,
						I have experience in designing and building distributed environment, 
						distributed systems, design, and maintain high-quality code. I
						would be able to solve the real world problems or challenges that
						comes across me.
					</h2>
					<div style={{ backgroundColor: "white" }}>
						<h4 style={{ color: "#903" }}>Skills :</h4>
						<br></br>
						<h5>
						•	Programming Language:{" "}
							<span style={{ color: "#566573" }}>
							Java, Python, C, C++.
							</span>{" "}
						</h5>
						<h5>
						•	Databases:{" "}
							<span style={{ color: "#566573" }}>
							MySQL, SQLServer, MongoDB, Mongoose.
							</span>
						</h5>
						<h5>
						•	Web Applications:{" "}
							<span style={{ color: "#566573" }}>
								{" "}
								HTML, CSS, JavaScript, Spring Boot, JSON, Express.js, Node.js, React.js, REST APIs, Swagger.                                     
							</span>
						</h5>
						<h5>
						•	Android Development:{" "}
							<span style={{ color: "#566573" }}>
								{" "}
								Firebase, OKHTTP, Google Analytics, Picasso, Postman.                                     
							</span>
						</h5>
						<h5>
						•	Frameworks/Applications:{" "}
							<span style={{ color: "#566573" }}>
								{" "}
								Docker, Kubernetes, Git, Github, Apache Kafka, AWS, TensorFlow, NumPy.                                     
							</span>
						</h5>
					</div>
				</Fade>
			</div>

			
		</div>
	);
};

export default About;
