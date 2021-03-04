// import React from "react";
// import { Link } from "react-router-dom";

// const NavBar = () => {
// 	return (
// 		<div data-spy='scroll' data-target='.navbar' data-offset='50'>
// 			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
// 				<button
// 					className='navbar-toggler'
// 					type='button'
// 					data-toggle='collapse'
// 					data-target='#navbarTogglerDemo01'
// 					aria-controls='navbarTogglerDemo01'
// 					aria-expanded='false'
// 					aria-label='Toggle navigation'
// 				>
// 					<span className='navbar-toggler-icon'></span>
// 				</button>
// 				<div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
// 					<Link className='navbar-brand' to='/About'>
// 						PortFolio
// 					</Link>
// 					<ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
// 						<li className='nav-item active'>
// 							<Link className='nav-link' to='/About'>
// 								About <span className='sr-only'>(current)</span>
// 							</Link>
// 						</li>
// 						<li className='nav-item'>
// 							<Link className='nav-link' to='/Work'>
// 								Work Experience
// 							</Link>
// 						</li>
// 						<li className='nav-item'>
// 							<Link className='nav-link' to='/Skills'>
// 								Skills
// 							</Link>
// 						</li>
// 						<li className='nav-item'>
// 							<Link className='nav-link ' to='/Projects'>
// 								Projects
// 							</Link>
// 						</li>
// 						<li className='nav-item'>
// 							<Link className='nav-link ' to='/Contact'>
// 								Contact
// 							</Link>
// 						</li>
// 					</ul>
// 					{false && (
// 						<form className='form-inline my-2 my-lg-0'>
// 							<input
// 								className='form-control mr-sm-2'
// 								type='search'
// 								placeholder='Search'
// 								aria-label='Search'
// 							/>
// 							<button
// 								className='btn btn-outline-success my-2 my-sm-0'
// 								type='submit'
// 							>
// 								Search
// 							</button>
// 						</form>
// 					)}
// 				</div>
// 			</nav>
// 		</div>
// 	);
// };

// export default NavBar;
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
const NavBar = () => {
	return (
		<Navbar collapseOnSelect expand='lg' bg='light' variant='light'>
			{/* <Navbar.Brand>PortFolio</Navbar.Brand> */}
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='mr-auto'>
					<Nav.Link href='/about'><h4>PortFolio</h4></Nav.Link>
					<Nav.Link href='/about'>About</Nav.Link>
					<Nav.Link href='/work'>Work</Nav.Link>
					<Nav.Link href='/projects'>Projects</Nav.Link>
					<Nav.Link href='/contact'>Contact</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
