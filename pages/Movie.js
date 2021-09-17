import React, {useState, useEffect} from 'react'
import axios from 'axios'


const GhibliStudios = () => {
const [ghibliURL, setGhibliURL] = useState([]);
const [query, setQuery] =useState("");

const onChange =(e) => {
	e.preventDefault();
	setQuery(e.target.value)
};
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
			const response = await axios.get('https://ghibliapi.herokuapp.com/films');

			console.log('if this works , this the data from the Ghibli studuis', response.data);

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
    <div className="Movie_List">
		<div className="container">
			<div className="add-content">
				<div className="input-wrapper">
					<input type="text" 
					placeholder="enter text for film title"
					 value={query} onChange={onChange}/>
					 </div>
					 </div>
					 </div>
	</div>


)
}

export default GhibliStudios;
