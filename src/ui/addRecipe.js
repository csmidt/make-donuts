import React from 'react'
import { Link, hashHistory } from 'react-router'
import * as actions from 'actions'
import store from 'store'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { addRecipe } from 'api/recipesapi'


//Styling for submit button
const style = {
  margin: 12,
  button: {
  	backgroundColor: "#00FF00"	
  }
}

const AddRecipe = React.createClass({
	getInitialState: function() {
		return {
			image: "",
			recipe_Name: "",
			recipe_Type: "",
			by: "",
			prep_Time:"",
			cook_Time:"",
			cook_Temp:"",
			portion_Amount:"",
			portion_Type:"",
			step_Amount: "",
		    units: "",
		    ingredient: "",
		    personal_Notes: ""
			
			
			
		}
	},

	updateRecipes: function(e) {
		e.preventDefault()
		var obj = {
			image: this.state.image,
			recipe_Name: this.state.recipe_Name,
			by: this.state.by,
			recipe_Type: this.state.recipe_Type,
			prep_Time: this.state.prep_Time,
			cook_Time: this.state.cook_Time,
			cook_Temp: this.state.cook_Temp,
			portion_Amount: this.state.portion_Amount,
			portion_Type: this.state.portion_Type,
			step_Amount: this.state.step_Amount,
			units: this.state.units,
			ingredient: this.state.ingredient,
			personal_Notes: this.state.personal_Notes
		
		}

		addRecipe(obj).then(resp => {
			hashHistory.push("/")
		})
		console.log("COMPONENT FUNCTION: updateRecipes()", obj)
	},

	update: function(e) {
		var obj = {}
		var id = e.target.id
		obj[id] = e.target.value
		this.setState(obj);
	},

	


	render: function() {
		return (
			<div className="AddRecipeDiv">
				<h3>Basic Info</h3>
				<form onSubmit={this.updateRecipes}>
					 <TextField
                      id="image"
                      hintText="Add Image url here"
                      floatingLabelText="Add image URL here."
                      fullWidth={true}
                      value={this.state.image}
                      onChange={this.update}
                    />
				    <TextField
				      id="recipe_Name"
				      hintText="Recipe Name"
				      floatingLabelText="Enter recipe name here."
				      fullWidth={true}
				      value={this.state.recipe_Name}
				      onChange={this.update}
				    />
				     <TextField
				      id="by"
				      hintText="By"
				      floatingLabelText="Enter chef's name here."
				      fullWidth={true}
				      value={this.state.by}
				      onChange={this.update}
				    />
				    <TextField   
				      id="recipe_Type"   
				      hintText="Breakfast, Lunch, Dinner, dessert"
					  floatingLabelText="Enter the type of recipe here."
					  fullWidth={true}
					  value={this.state.recipe_Type}
					  onChange={this.update}
					/>
				    <TextField   
				      id="prep_Time"   
				      hintText="Prep Time"
					  floatingLabelText="Enter prep time here."
					  fullWidth={true}
					  value={this.state.prep_Time}
					  onChange={this.update}
					/>
				    <TextField
                      id="cook_Time"
                      hintText="Cook Time"
                      floatingLabelText="Enter cook time here."
                      fullWidth={true}
                      value={this.state.cook_Time}
                      onChange={this.update}
                    />
                    <TextField
                      id="cook_Temp"
                      hintText="Cook Temp"
                      floatingLabelText="Enter cook temperature here."
                      fullWidth={true}
                      value={this.state.cook_Temp}
                      onChange={this.update}
                    />
                    <TextField   
                      id="portion_Amount"
                      hintText="Amount"
                      floatingLabelText="Enter recipe yeild amount here."
                      fullWidth={true}
                      value={this.state.portion_Amount}  
                      onChange={this.update} />
                    <TextField
                      id="portion_Type"
                      hintText="Type"
                      floatingLabelText="Cookies, loaves, etc..."
                      fullWidth={true}
                      value={this.state.portion_Type}
                      onChange={this.update}
                    />
                    <TextField
                      id="step_Amount"
                      hintText="Enter quantity of ingredient here."
                      floatingLabelText="1,2,3 etc..."
                      fullWidth={true}
                      value={this.state.step_Amount}
                      onChange={this.update}
                    />
                     <TextField
                      id="units"
                      hintText="Enter unit of measure here."
                      floatingLabelText="Cups, TBS, tsp, etc..."
                      fullWidth={true}
                      value={this.state.units}
                      onChange={this.update}
                    />
                    <TextField
                      id="ingredient"
                      hintText="Ingredient"
                      floatingLabelText="Enter ingredient here."
                      fullWidth={true}
                      value={this.state.ingredient}
                      onChange={this.update}
                    />
                    <TextField
                      id="personal_Notes"
                      hintText="Personal Notes"
                      floatingLabelText="Tell us about your recipe!"
                      fullWidth={true}
                      value={this.state.personal_Notes}
                      onChange={this.update}
                    />
                  

				</form>
				<div>
				    <RaisedButton label="Submit Recipe" primary={true} style={style.button} onClick={this.updateRecipes}/>
				 </div>
			</div>	
		)
	}
})
export default AddRecipe


// value: 1 "this is a value for getInitialState for material UI select fields"

// handleChange: function(event, index, value) {
//  	this.setState({value})
// }, "this is a handle property used for select fields"



// <div className="formfields">
// 	<input type="url" id="image" className="image" />
// 	<div className="Names">
// 		<input type="text" id="Recipe Name"className="addFields" placeholder="Recipe Name" />
// 		<input type="text" id="creator"className="addFields"  placeholder="Chef's Name"/>
		
//    	</div>
//    	<div>
//    		<input type="checkbox" id="public"/><label htmlFor="public">Make it Public</label>
// 		<input type="checkbox" id="private"/><label htmlFor="private">Make it Private</label>
   		
//    	</div>
//    	<div className="howToCook">
// 	    <input type="text" id="prepTime" className="addFields" placeholder="Prep Time"/>
// 	    <input type="cookTime" id="cookTime" className="addFields" placeholder="Cook Time"/>
// 	    <input type="cookTemp" id="cookTemp" className="addFields" placeholder="Cook Temp" />
// 		<SelectField value={this.state.value} onChange={this.handleChange}>
// 	        <MenuItem value={1} label="5 am - 12 pm" primaryText="Morning" />
// 	        <MenuItem value={2} label="12 pm - 5 pm" primaryText="Afternoon" />
// 	        <MenuItem value={3} label="5 pm - 9 pm" primaryText="Evening" />
// 	        <MenuItem value={4} label="9 pm - 5 am" primaryText="Night" />
// 	    </SelectField>
// 	</div>
// </div>   
// <div>
// 	<h3>Step 1</h3>
// 		<div className="howToCook">
// 		    <input type="text" id="prepTime" className="addFields" placeholder="Amount" />
// 		    <input type="cookTime" id="cookTime" className="addFields" placeholder="Unit" />
// 		    <input type="cookTemp" id="cookTemp" className="addFields" placeholder="Ingredient" />
// 		</div>
// 		<input type="textArea" id="personalNotes" className="textArea" placeholder="Directions for this step" />
// 		<button onClick={this.navToAddRecipe}> Add Another Step </button>
// </div>
// <div>
// 	<h3>Pesonal Notes</h3>
// 	<input type="textArea" id="personalNotes" className="textArea" />
// </div>
