import React, {useState, useEffect} from 'react'
import axios from 'axios'


const GhibliStudios = () => {
const [ghibliURL, setGhibliURL] = useState('');
{/*this is where you make call for this studio
what you need: api url key, 
if dedided to use axios; make sure to import library here!

search will be form 
repeate this process for the rest of the other studios 

DRY: Make one successful then apply it to other pages / studios 
{/*
This will be used as the bae url */}
useEffect(() => {
	console.log("We are mounting Ghibli studio film");

	const fetchInfo = async () => {
		try{
			const response = await axios.get(url='https://ghibliapi.herokuapp.com/films');

			console.log('if this works , this the data from the Ghibli studuis', response);

			setGhibliURL(response.data)

		}catch(err) {

			console.log(err);


		}

	}
	fetchInfo()


}, [])



const showMovieTitles = () => {

	fetch('https://ghibliapi.herokuapp.com/films')
	.then(response => response.json())
	.then(film =>setGhibliURL(film.data.title))
	.catch(err => console.log(err))


}


return(
    <div id='ghibli'>

        <h1> GhibliStudios</h1>
		{ghibliURL}
    </div>


)
}

export default GhibliStudios;
