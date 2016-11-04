import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

// Layouts
import App from 'layouts/app';
import Borders from 'ui/borders'

ReactDOM.render((
	  <Router history={hashHistory}>
	    <Route component={App}>
	     <Route component={ home } path="/" />
	     <Route component={ addRecipe } path="/addRecipe/:id" />
   
	    </Route>
	  </Router>
    

), document.getElementById('app'));