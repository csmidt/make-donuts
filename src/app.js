import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

// Layouts
import App from 'layouts/app';
import Borders from 'ui/borders'
import Home from 'ui/home'
import AddRecipe from 'ui/addRecipe'

ReactDOM.render((
	  <Router history={hashHistory}>
	    <Route component={ App }>
	     <Route component={ Home } path="/" />
	     <Route component={ AddRecipe } path="/addRecipe/:id" />
	     
	    </Route>
	  </Router>
    

), document.getElementById('app'));

//<Route component={ addRecipe } path="/addRecipe/:id" />
   