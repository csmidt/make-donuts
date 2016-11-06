import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GridListExample from 'ui/gridListExample'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


// Layouts
import App from 'layouts/app';
import Home from 'ui/home'
import AddRecipe from 'ui/addRecipe'
import RecipeProfile from 'ui/recipeProfile'

ReactDOM.render((
	<MuiThemeProvider>
		<Router history={hashHistory}>
			<Route component={ App }>
				 <Route component={ Home } path="/" />
				 <Route component={ GridListExample } path="/gridListExample"/>
				 <Route component={ AddRecipe } path="/addRecipe/:id" />
				 <Route component={ RecipeProfile } path="/recipeProfile/:id"/>
			</Route>
		</Router>
	</MuiThemeProvider>

), document.getElementById('app'));

