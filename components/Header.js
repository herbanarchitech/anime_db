import React from 'react';

const Header = (props) => {
	return(
	<header className="App-Header">
		<h2>{props.words}</h2>
		</header>
	)
}

export default Header;
