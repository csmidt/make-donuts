import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Layouts
import App from 'layouts/app';

//Content
import AddRecipe from 'ui/addRecipe'
import RecipeProfile from 'ui/recipeProfile'
import Steps from 'ui/Steps'
import Ingredient from 'ui/Ingredient'
import GridListExample from 'ui/gridListExample'
import AdjustRecipe from 'ui/adjustRecipe'



ReactDOM.render((
	<MuiThemeProvider>
		<Router history={hashHistory}>
			<Route component={ App }>
				 <Route component={ GridListExample } path="/"/>
				 <Route component={ AddRecipe } path="/addRecipe" />
				 <Route component={ Steps } path="/steps/:recipeId" />
				 <Route component={ Ingredient} path="/ingredient/recipeId/:recipeId/stepId/:stepId" />
				 <Route component={ RecipeProfile } path="/recipeProfile/:id"/>
				 <Route component={ AdjustRecipe } path="/adjustRecipe/:id"/>
			</Route>
		</Router>
	</MuiThemeProvider>
 
), document.getElementById('app'));


// <Route component={ Ingredient } path="/ingredient/:stepid" />