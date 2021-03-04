import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyForm from './myform.js';

const Contact = () => {
	const [email, setEmail] = useState("");
	const [body, setBody] = useState("");

	const sendMail = async (e) => {
		e.preventDefault();
		if (body.length === 0) {
			alert("enter something to send !!!");
		} else {
			console.log(email);
			await axios
				.post(
					"http://localhost:5000/api/db/mailer",
					{
						from: email,
						body: body,
					},
					{
						headers: {
							"Access-Control-Allow-Origin": "*",
						},
					}
				)
				.then((res) => {
					console.log(res);
					toast("Mail Sent !");
					setEmail("");
					setBody("");
					//const timer = setTimeout(() => {}, 2000);
				})
				.catch((err) => console.log(err));
		}
	};
	return (
		<div className='container' style={{ marginTop: "2%" }}>
			<ToastContainer />
			<MyForm/>
			{/* <Review /> */}
			<div className='container'>
				
				<form className='container'>
					
					<div
						className='container'
						style={{
							textAlign: "center",
							marginTop: "3%",
						}}
					>
						<img
							src={require("../assets/portfolio.svg")}
							style={{ width: "10%", margin: "2%" }}
							alt=""
							onClick={() =>
								window.open(
									"https://drive.google.com/file/d/16ObHFU6tnwgsksOH9QEQZlcjly7K7l9z/view?usp=sharing",
									"_blank"
								)
							}
						/>
						<p>Get a Copy of my Resume</p>
					</div>
					<div
						className='container'
						style={{
							textAlign: "center",
						}}
					>
						<img
							src={require("../assets/linkedin.svg")}
							style={{ width: "5%", marginRight: "2%" }}
							alt=""
							onClick={() =>
								window.open(
									"https://www.linkedin.com/in/rohan-sriram",
									"_blank"
								)
							}
						/>
						<img
							src={require("../assets/github.svg")}
							alt=""
							style={{ width: "5%", marginLeft: "2%" }}
							onClick={() => window.open("https://github.com/rohansriram", "_blank")}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
