 import React from 'react'
 import { Link, hashHistory } from 'react-router'
 import { addAuis } from 'api/recipesapi'
 import * as actions from 'actions'
 import store from 'store'
 import MenuItem from 'material-ui/MenuItem'
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
 const IngredientContainer = React.createClass({
 	getInitialState: function() {
 		return {
 			auis: [],
 			recipeId: ''
 		}
 	},
 	componentWillMount: function () {

 		this.unsubscribe = store.subscribe(() => {
 			const appState = store.getState()
 			this.setState({
 				auis: appState.auis
 			})
 		})
 	},
 	componentWillUnmount: function () {
 		this.unsubscribe()
 	},
 	render: function () {
 		return (
 			<Ingredient stepId={this.props.params.stepId} auis={this.state.auis} recipeId={this.props.params.recipeId} />
 		)
 	}
 })
 const Ingredient = React.createClass ({
 	getInitialState: function() {
 		return {
 			step_Amount: "",
 			units: "",
 			ingredient:""
 		}
 	},
 	update: function(e) {
		var obj = {}
		var id = e.target.id
		obj[id] = e.target.value
		this.setState(obj)
 	},
 	updateAuis: function(e) {
 		e.preventDefault()
 		var obj = {
 			stepId: this.props.stepId,
 			ingredient: this.state.ingredient,
 			units: this.state.units,
 			step_Amount: this.state.step_Amount,
 			recipeId: this.props.recipeId
 		}
 		console.log('stepId', obj.stepId)
 		console.log('ingredient', obj.ingredient)
 		console.log('units', obj.units)
 		console.log('step_Amount', obj.step_Amount)

 		addAuis(obj)
 	},
 	navToProfile: function(id) {
	    hashHistory.push(`/recipeProfile/${id}`)
	},
 	render: function () {
 		return (
 			<div>
	 			<form onSubmit={this.updateAuis}>
		 			<div>
						<TextField
				          id="step_Amount"
				          hintText="Enter quantity here."
				          floatingLabelText="1/4, 1/2, 1, 2..."
				          fullWidth={true}          
				          onChange={this.update}
				          value={this.state.step_Amount}
				        />
				        <TextField
				          id="units"
				          hintText="Enter unit of measure here."
				          floatingLabelText="Cup, TBS, tsp, lb., etc..."
				          fullWidth={true}          
				          onChange={this.update}
				          value={this.state.units}
				        />
				        <TextField
				          id="ingredient"
				          hintText="Enter ingredient here."
				          floatingLabelText="Ingredient"
				          fullWidth={true}          
				          onChange={this.update}
				          value={this.state.ingredient}
				        />
				   		<RaisedButton type="submit" label="Add Ingredient" primary={true} style={style.button} />	
		 			</div>
	 			</form>	
	 			<RaisedButton type="submit" label="Add Recipe" primary={true} style={style.button} onClick={this.navToProfile}/>
	 		</div>	
 		)		
 	}
 })
 export default IngredientContainer

 // {this.props.auis.map((aui, i) => (
	//  					<div key={ingredient.id} className="step">
	//  						<h1>Ingredients</h1>
	//  						<p>{auis.step_Amount} {auis.units} {auis.ingredient}</p>
	//  					</div>
	//  				))}
