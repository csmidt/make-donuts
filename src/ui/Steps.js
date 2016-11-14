import React from 'react'
import {Link, HashHistory } from 'react-router'
import { addStep, getSteps} from 'api/recipesapi'
import * as actions from 'actions'
import store from 'store'
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
		console.log(obj)
		addStep(obj)
	},
	render: function () {
		return (
			<div>
				{this.props.steps.map((step, i) => (
					<div className="step">
						<h1>Step {i + 1}</h1>
						<p>{step.directions}</p>
					</div>
				))}	
					<TextField
			          id="directions"
			          hintText="Enter directions here."
			          floatingLabelText="Directions"
			          fullWidth={true}          
			          onChange={this.update}
			          value={this.state.directions}
			        />
			   		<button type="button" onClick={this.updateSteps}>Add Step</button>	
			</div>		
		)		
	}
})
	
export default StepsContainer





