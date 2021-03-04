import React, { Component } from "react";

class Footer extends Component {
	render() {
		return (
			<div 
			className=' col-m-12 col-lg-12'
			style={{ marginTop: "4%" , bottom: 0, position: "fixed", left: 0}}>
				<footer className='nav bg-light justify-content-center footer'>
					<div>© 2021 Copyright: Rohan Sriram</div>
					
				</footer>
			</div>
		);
	}
}

export default Footer;
