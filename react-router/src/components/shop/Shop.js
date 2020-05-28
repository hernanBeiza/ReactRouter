import React, {useState, useEffect} from 'react';
import './Shop.css';

import { Link } from 'react-router-dom';

function Shop() {
	
	useEffect(() => {
		console.log("ahora");
		fetchItems();
	},[]);

	const h3Style = {
		textTransform:"uppercase",
		textDecoration:"none",
		color:"white"
	}

	const [tipos, setTipos] = useState([]);

	const fetchItems = async () =>{
		const data = await fetch("https://pokeapi.co/api/v2/type");
		let tipos = await data.json();
		//tipos.results.map(item=>console.log(item));
		console.log(tipos.results);
		setTipos(tipos.results);
	}

  return (
    <div className="Shop">
      <header className="Shop-header">
        <h1>Shop Pokemons by Type</h1>
        {tipos.map(tipo => (
        	<Link style={h3Style} key={tipo.name} to={`/shop/${tipo.name}`}><h3 key={tipo.name}>{tipo.name}</h3></Link>
        ))}
      </header>
    </div>
  );
}

export default Shop;
