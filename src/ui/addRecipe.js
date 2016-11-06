import React from 'react'
import { Link, hashHistory } from 'react-router'
import * as actions from 'actions'
import store from 'store'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import addNewRecipe from 'api/recipesapi'




const AddRecipe = React.createClass({
	getInitialState: () => ({
		value: 1,
		id:'',
		image:'',
		recipe_name:'',
		by:'',
		scope:'',
		recipe_type:'',
		recipeCategoryID:'',
		prep_time:'',
		cook_time:'',
		cook_temp:'',
		degree_Units:'',
		portion_amount:'',
		portion_Type:'',
		instructions:'',
		stepNumber: '',
		AUIs: {
				step_Amount:'',
				units: '',
				ingredient:''
			},
		directions:'',
		personal_Notes:''
	}),

	navToRecipeProfile: function(e) {
    e.preventDefault()
    hashHistory.push("/recipeProfile/1")
    },

	handleChange: function(event, index, value) {
	 	this.setState({value})
	},

	handleSubmit: function (e) {
		e.preventDefault()
		var newRecipeObj = {
			id:this.state.id,
			image:this.state.image,
			recipe_name:this.state.recipe_Name,
			by:this.state.by,
			scope:this.state.scope,
			recipe_type:this.state.recipe_Type,
			recipeCategoryID:this.state.recipeCategoryId,
			prep_time:this.state.prep_Time,
			cook_time:this.state.cook_Time,
			cook_temp:this.state.cook_Temp,
			degree_Units:this.state.degree_Units,
			portion_amount:this.state.portion_amount,
			portion_Type:this.state.portion_Type,
			instructions:this.state.instructions,
			stepNumber: this.state.instructions.id,
			AUIs: {
				step_Amount:this.state.step_Amount,
				units:this.state.units,
				ingredient: this.state.ingredient
			},	
			directions:this.state.instructions.directions,
			personal_Notes:this.state.personal_Notes
		}

		addNewRecipe(newRecipeObj)
	},

	update: function (e) {
		var val = e.target.value
		var id = e.target.id

		var stateObj = {}

		stateObj[id] =val

		this.setState(stateObj)
	},
	
	render: function() {
		return (
			<div className="AddRecipeDiv">
				<h3>Basic Info</h3>
				<form onSubmit={this.handleSubmit}>
					<div className="formfields">
						<input onChange={this.update} type="url" id="image" className="image" />
						<div className="names">
							<input onChange={this.update} className="addFields" type="text" id="Recipe Name"placeholder="Recipe Name" />
							<input onChange={this.update} className="addFields" type="text" id="creator" placeholder="Chef's Name"/>
					   		<input onChange={this.update} className="checkbox" type="checkbox" id="public"/><label htmlFor="public">Make it Public</label>
							<input onChange={this.update} className="checkbox" type="checkbox" id="private"/><label htmlFor="private">Make it Private</label>		
					   	</div>
					   	<div className="howToCook">
						    <SelectField className="recipeType" value={this.state.value} onChange={this.handleChange}>
						        <MenuItem value={1} label="Recipe Type" primaryText="Breakfast" />
						        <MenuItem value={2} label="Recipe Type" primaryText="Lunch" />
						        <MenuItem value={3} label="Recipe Type" primaryText="Dinner" />
						        <MenuItem value={4} label="Recipe Type" primaryText="Dessert" />
						    </SelectField>
						    <input onChange={this.update} className="addFields"type="text" id="prepTime"  placeholder="Prep Time"/>
						    <input onChange={this.update} className="addFields" type="cookTime" id="cookTime" placeholder="Cook Time"/>
						    <input onChange={this.update} className="addFields" type="cookTemp" id="cookTemp" placeholder="Cook Temp" />
						     <SelectField className="recipeType" value={this.state.value} onChange={this.handleChange}>
						        <MenuItem value={1} label="C" primaryText="Celcius" />
						        <MenuItem value={2} label="F" primaryText="Fahrenheit" />
						    </SelectField>
						</div>
					</div>   
				    <div>
				    	<h3>Step 1</h3>
				    		<div className="howToCook">
							    <input onChange={this.update} className="addFields" type="text" id="prepTime" placeholder="Amount" />
							    <input onChange={this.update} className="addFields"type="cookTime" id="cookTime"  placeholder="Unit" />
							    <input onChange={this.update} className="addFields"type="cookTemp" id="cookTemp"  placeholder="Ingredient" />
							</div>
							<input onChange={this.update} className="textArea"type="textArea" id="personalNotes"  placeholder="Directions for this step" />
							<button onClick={this.navToAddRecipe}> Add Another Step </button>
				    </div>
				    <div>
				    	<h3>Pesonal Notes</h3>
				    	<input onChange={this.update} className="textArea"type="textArea" id="personalNotes"  />
				    	<button type="submit"> Save This Recipe</button>
				    </div>

				</form>
			</div>	
		)
	}
})
export default AddRecipe


