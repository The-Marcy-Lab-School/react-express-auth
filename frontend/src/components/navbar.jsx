// import React, {useState} from 'react';
// import './navbar.css';


// function Navbar(){
// 	const [active, setActive] = useState('nav_menu');
// 	const [toggle, setToggle] = useState('nav_toggler');

// 	const navToggle = () => {
// 		active === 'nav_menu' ? setActive('nav_menu active') : setActive('nav_menu');

// 		toggle === 'nav_toggler' ? setToggle('nav_toggler active') : setToggle('nav_toggler');
// 	}
// 	return(
// 		<nav className='navbar'>
// 			<ul className={active}>
// 				<li className='nav_item'><a href='#' className='nav_link'>Home</a></li>
// 				<li className='nav_item'><a href='#' className='nav_link'>Users</a></li>
// 				<li className='nav_item'><a href='#' className='nav_link'>Quiz Test</a></li>
// 				<li className='nav_item'><a href='#' className='nav_link'>Selected Language</a></li>
// 				<li className='nav_item'><a href='#' className='nav_link'>Quiz Lesson</a></li>
// 				<li className='nav_item'><a href='#' className='nav_link'>Login</a></li>
// 				<li className='nav_item'><a href='#' className='nav_link'>Sign Up</a></li>
// 			</ul>
// 			<div onClick={navToggle} className={toggle}>
// 				<div className='line1'></div>
// 				<div className='line2'></div>
// 				<div className='line3'></div>
// 			</div>
// 		</nav>	
// 	);
// }

// export default Navbar;