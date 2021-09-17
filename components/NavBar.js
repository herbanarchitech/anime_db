import {Link} from 'react-router-dom';
// create a landing page to link the nav 
//I.E medium.com
const NavBar =() => {
	return(
		<nav id="nav-bar">
		<ul className='navBar'>

		<li>
		<Link to="/"> Movies</Link>
		</li>

		<li>
		<Link to="/kyoto"> Kyoto</Link>
		</li>
		
		<li>
		<Link to="/sunrise">Sunrise </Link>
		</li>

		</ul>

		</nav>
	);

};
export default NavBar;
