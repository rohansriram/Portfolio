import React from "react";

const Work = () => {
	return (
		<div className='container'>
			<div
				class='card text-white  mb-3'
				style={{ marginTop: "2%", backgroundColor: "#566573" }}
			>
				<div class='card-header row col-sm-12'>
					<div className=' col-sm-6'>
						<h2>University of North Carolina at Charlotte</h2>
						<p>Charlotte, NC</p>
					</div>
					<div className=' col-sm-6 '>
						<div className='float-right '>
							<div className='text-center'>
								<h5>January 2021 - Present</h5>
							</div>

							<p></p>
						</div>
					</div>
				</div>
				<div class='card-body'>
					<h4 class='card-title'>Graduate Teaching Assistant</h4>
					<p class='card-text'>
					•	Teaching Assistant of the course Critical Thinking and Communication for a class of 35 students based on Python and its algorithms, data structures, and UNIX/Linux commands.<br></br> 
					•	Responsible to assist and mentor students on Python, clear doubts/queries, encourage discussions and grade programming assignments. 
					</p>
				</div>
			</div>
			<div
				class='card text-white  mb-3'
				style={{ marginTop: "2%", backgroundColor: "#566573" }}
			>
				<div class='card-header row col-sm-12'>
					<div className=' col-sm-6'>
						<h2>Accenture</h2>
						<p>Bangalore, India</p>
					</div>
					<div className=' col-sm-6 '>
						<div className='float-right '>
							<div className='text-center'>
								<h5>November 2018 - July 2019</h5>
							</div>

							<p></p>
						</div>
					</div>
				</div>
				<div class='card-body'>
					<h4 class='card-title'>
						{" "}
						Associate Software Engineer 
					</h4>
					<p class='card-text'>
					•	Worked on the design of REST API’s for the web application by communicating with third-party services to provide integration to the platform with cloud database storage using Node.js and Java Spring Boot. <br></br>
					•	Architected Rest API’s for better performance by using caching, logging, efficient data storing techniques by reducing the response time to 3 ms. Engineered Caching mechanism and integrated the web application to cache mechanism to implement authentication using REDIS and OOP’s SOLID Principles. <br></br>
					•	Completely automated database backup mechanism using MySQL procedures, trigggeres by avoiding manual efforts and hence saved 2 hours of work per day. Followed Agile practices and Test-Driven development for each sprint.

					</p>
				</div>
			</div>
			{/* <div
				class='card text-white  mb-3'
				style={{
					marginTop: "2%",
					backgroundColor: "#566573",
				}}
			>
				<div class='card-header row col-sm-12'>
					<div className=' col-sm-6'>
						<h2>Sri Manjunatha Retailors</h2>
						<p>Bangalore, India</p>
					</div>
					<div className=' col-sm-6 '>
						<div className='float-right '>
							<div className='text-center'>
								<h5>Internship</h5>
							</div>

							<p>June 2017 - July 2018</p>
						</div>
					</div>
				</div>
				<div class='card-body'>
					<h5 class='card-title'>Software Developer (React, Node, Js)</h5>
					<p class='card-text'>
						Build web Apps for real estate, So customers can view properties,
						and contact the agents with messaging features. And Allow owners to
						post adds on the website . Front end was react using hooks to handle
						app level state , back end node as rest API, authentication and
						authorization using JSON web tokens . Firebase as data store for
						storing images and notification of messages.
					</p>
				</div>
			</div> */}
		</div>
	);
};

export default Work;
