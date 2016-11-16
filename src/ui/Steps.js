import React from 'react'
import {Link, hashHistory } from 'react-router'
import { addStep, getSteps} from 'api/recipesapi'
import * as actions from 'actions'
import store from 'store'
import Ingredient from 'ui/Ingredient'
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  margin: 12,
  button: {
  	backgroundColor: "#00FF00"	
  }
}
const styles = {
  customWidth: {
    width: 150,
  }
} 
const StepsContainer = React.createClass({
	getInitialState: function() {
		return {
			steps: []
		}
	},
	componentWillMount: function () {
		this.unsubscribe = store.subscribe(() => {
			const appState = store.getState()
			this.setState({
				steps: appState.steps
			})
		})
	},
	componentWillUnmount: function () {
		this.unsubscribe()
	},
	render: function () {
		return (
			<StepsView recipeId={this.props.params.recipeId} steps={this.state.steps} />
		)
	}
})

const StepsView = React.createClass ({
	getInitialState: function() {
		return {
			directions: ""
		}
	},
	update: function(e) {
		var obj = {}
		var id = e.target.id
		obj[id] = e.target.value
		this.setState(obj)
	},
	updateSteps: function(e) {
		e.preventDefault()
		var obj = {
			recipeId: this.props.recipeId,
			directions: this.state.directions
		}
		console.log('updateSteps()', obj)
		addStep(obj)
	},
	

	render: function () {
		return (
			<div>
				<form onSubmit={this.updateSteps}>
						<TextField
				          id="directions"
				          hintText="Enter directions here."
				          floatingLabelText="Directions"
				          fullWidth={true}          
				          onChange={this.update}
				          value={this.state.directions}
				        />
				   		
				   		<RaisedButton type="submit" label="Add Step" primary={true} style={style.button}/>	
				</form>	
				
			</div>	
		)		
	}
})
	
export default StepsContainer





