import logo from './logo.svg';
import './App.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import {Switch , Route} from 'react-router-dom'
import GhilbiStudio from 'from ./GhilbiStudio'
import SunRiseInc from './SunRiseInc' 


const App =() => {
	return(
		<div id="app"> 

		<NavBar />

			<Switch>

				<Route exact path="/">
					<GhilbiStudio />
				</Route>

		   		<Route exact path="/kyoto">

					<Kyoto />
					
				</Route>

				<Route exact path="/SunriseInc">

					< SunriseInc/>
					
				</Route>



		<Footer />

		</div>


	);

};

export default App;
