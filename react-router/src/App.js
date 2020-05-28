import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Menu from './components/menu/Menu';
import About from './components/about/About';
import Shop from './components/shop/Shop';
import ItemDetail from './components/item-detail/ItemDetail';

function App() {
  return (
    <Router>
	    <div className="App">
	      <Menu/>
	      <Switch>
		      <Route path="/" exact component = {Home} />
		      <Route path="/about" component = {About} />
		      <Route path="/shop" exact component = {Shop} />
		      <Route path="/shop/:type" component = {ItemDetail} />
	      </Switch>
	    </div>
    </Router>
  );
}

const Home = () => (
	<div>
		<h1>Home</h1>
	</div>
)

export default App;
