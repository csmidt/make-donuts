import React from 'react'
import { hashHistory } from 'react-router'
import store from 'store'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { getRecipe, getAUIs, getStep } from 'api/recipesapi'
import ActionFavorite from 'material-ui/svg-icons/action/favorite'
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border'
import Visibility from 'material-ui/svg-icons/action/visibility'
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off'



const adjustRecipeContainer = React.createClass({
	getInitialState: function() {
		return {
			recipe_Name: ""
		}
	},

	componentWillMount: function() {
		getRecipe(this.props.params.id)
		this.unsubscribe = store.subscribe(() => {
			const appState = store.getState()
			this.setState({
				recipe_Name: appState.recipe.recipe_Name
			})
		})
	},

	update: function(e) {
		var obj = {}
		var id = e.target.id
		var value = e.target.value
		obj[id] = value
		this.setState(obj)
	},

	updateData: function(obj) {

	},

	render: function() {
		return (
			<div>
				<TextField
		      id="recipe_Name"
		      hintText="Recipe Name"
		      floatingLabelText={this.state.recipe_Name}
		      fullWidth={true}
		      onChange={this.update}
		    	/>
	    	<RaisedButton label="Submit changes"
	    		onClick=
	    		/>
    	</div>
		)
	}
})

export default adjustRecipeContainer