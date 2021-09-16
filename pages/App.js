//import logo from './logo.svg';
import '../App.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import GhilbiStudio from './GhibliStudio'
import SunRiseInc from './SunRiseInc';
import Kyoto from './Kyoto';


const App =() => {
	return(
		<div id="app"> 
		<Router>
		<NavBar />

			<Switch>
				

				<Route exact path="/">
					<GhilbiStudio />
				</Route>

		   		<Route exact path="/kyoto">

					<Kyoto />
					
				</Route>

				<Route exact path="/SunriseInc">

					< SunRiseInc/>
					
				</Route>

			</Switch>

			</Router>


		<Footer />

		</div>


	);

};

export default App;
