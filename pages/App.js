//import logo from './logo.svg';
import '../App.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import Movie from './Movie'
import Producer from './Producer'

// scrap plan make the nav to single to only miyazaki so that one api can actually work 
//potentially create three links for navbar movie ,director, all 
//url: https://ghibliapi.herokuapp.com/#tag/Films%2Fpaths%2F~1films%2Fget 
// this will be used to quert ALL the films 
//===OBJECTIVE === get the main call to work======  
function App() {
	return(
		<div id="app"> 
		<Router>
		<NavBar />

			<Switch>
				

				<Route exact path="/">
					<Movie />
				</Route>

		   		<Route exact path="/Producer">

					<Producer /> 
					
				</Route>

				<Route exact path="/SunriseInc">

					{/*< SunRiseInc/> */}
 					
				</Route>

			</Switch>

			</Router>


		<Footer />

		</div>


	);

};

export default App;
