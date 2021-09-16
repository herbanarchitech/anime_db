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

//const url='https://ghibliapi.herokuapp.com/films';
 const [ghibliUrl, setURL] = useState([])


const getURL= async(url) => {

    try {
        const response = await axios.get(url);
        console.log(response); // this would not be ideal to work with since it is returning only as objects ; Rememver .map method works best with data being arrays!
       //const data = response.data; // if we remove this the browser will diplays the information as verbose a.k.a only viewed as objectes
       //console.log(data)
    } catch (err) {

        console.log(err)
        
    }   

}

getURL(url);
return(
    <div id='ghibli'>

        <h1> GhibliStudios</h1>
    </div>


)
}

export default GhibliStudios;
