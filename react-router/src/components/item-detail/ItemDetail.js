import React, {useState, useEffect} from 'react';
import './ItemDetail.css';

import { Link } from 'react-router-dom';

function ItemDetail({match}) {
	console.log("ItemDetail");
	//console.log(match);
	//console.log(match.params);
	const liStyle = {
		textTransform:"uppercase",
		listStyleType:"none"
	}

	useEffect(() => {
		fetchData();
	},[]);

	const [pokemons, setPokemons] = useState([]);

	const fetchData = async () =>{
		let url = `https://pokeapi.co/api/v2/type/${match.params.type}`;
		const data = await fetch(url);
		console.log(data);
		let dataJSON = await data.json();
		//tipos.results.map(item=>console.log(item));
		console.log(dataJSON);
		setPokemons(dataJSON.pokemon);
	}

  return (
    <div className="ItemDetail">
      <header className="ItemDetail-header">
        <h1>Pokemon Detail</h1>
        <ul>
        {pokemons.map(pokemon=>(
        	<li style={liStyle} key={pokemon.pokemon.name}>{pokemon.pokemon.name}</li>
      	))}
      	</ul>
      </header>

    </div>
  );
}

export default ItemDetail;
