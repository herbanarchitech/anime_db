import React, {useState, useEffect} from 'react'
import axios from 'axios'


const GhibliStudios = () => {
{/*this is where you make call for this studio
what you need: api url key, 
if dedided to use axios; make sure to import library here!

search will be form 
repeate this process for the rest of the other studios 

DRY: Make one successful then apply it to other pages / studios 

This will be used as the bae url */}

const url='https://ghibliapi.herokuapp.com/films';
	
const getURL = async () =>{
try {
        const response = await axios.get(url);
        
	{/* console logging the repsons is nonsensical => console.log(response).It should only be used to test whether the fetch is actually working. 
	this would not be ideal to work with since it is returning only as objects ; Rememver .map method works best with data being arrays! For the respose below that we would use. If doesn'nt make sense , comment it out to see the difference. Reason why is not a good idee is, if we need to map over the data , it's impossible since we the map methods works best with array method only*/}
	

	//console.log(response); // this would not be ideal to work with since it is returning only as objects ; Rememver .map method works best with data being arrays!
       const data = response.data;
       console.log(data)
    } catch (err) {

        console.log(err)
        
    }   
};

getURL(url);
return(
    <div id='ghibli'>

        <h1> GhibliStudios</h1>
    </div>


)
}

export default GhibliStudios;
