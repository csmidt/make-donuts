import React from 'react'
import { Link, hashHistory } from 'react-router'
import * as actions from 'actions'
import store from 'store'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { addRecipe, addStep } from 'api/recipesapi'
//checkbox
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';


//Styling for submit button
const style = {
  margin: 12,
  button: {
  	backgroundColor: "#00FF00"	
  },

}

const styles = {
  customWidth: {
    width: 150,
  },
   block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
} 

const AddRecipe = React.createClass({
	getInitialState: function() {
		return {
			image: "",
			recipe_Name: "",
			recipe_Type: "",
			scope:"",
			degree_Units: "",
			by: "",
			prep_Time:"",
			cook_Time:"",
			cook_Temp:"",
			portion_Amount:"",
			portion_Type:"",
		    personal_Notes: "",
		  			
		}
	},
	
	updateRecipes: function(e) {
		e.preventDefault()
		var obj = {
			image: this.state.image,
			recipe_Name: this.state.recipe_Name,
			by: this.state.by,
			scope: this.state.scope,
			recipe_Type: this.state.recipe_Type,
			degree_Units: this.state.degree_Units,
			prep_Time: this.state.prep_Time,
			cook_Time: this.state.cook_Time,
			cook_Temp: this.state.cook_Temp,
			portion_Amount: this.state.portion_Amount,
			portion_Type: this.state.portion_Type,
			personal_Notes: this.state.personal_Notes,
		}

		addRecipe(obj)
		console.log("COMPONENT FUNCTION: updateRecipes()", obj)
	},

	update: function(e) {
		var obj = {}
		var id = e.target.id
		var value = e.target.value
		obj[id] = value
		this.setState(obj);
	},

	scopeChange: function(event, index, value) {
		this.setState({
			scope: value
		})
	},
	recipeChange: function(event, index, value) {
		this.setState({
			recipe_Type: value
		})
	},

	degreeChange: function (event, index, value) {
		this.setState({
			degree_Units: value
		})

		console.log("COMPONENT FUNCTION: updateRecipes()", obj)

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
				      id="recipe_By"
				      hintText="By"
				      floatingLabelText="Enter Recipe Author Here"
				      fullWidth={true}
				      value={this.state.recipe_By}
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
				     <div 
				       id="scope"
				       style={styles.block}
				       value={this.state.scope}
			           onChange={this.scopeChange}>
					     <Checkbox label="Make Public" style={styles.checkbox}/>
					     <Checkbox label="Make Private" style={styles.checkbox}/>
					 </div>
					<SelectField
					  id="recipe_Type"
			          floatingLabelText="Recipe Type"
			          value={this.state.recipe_Type}
			          onChange={this.recipeChange}
			          style={styles.customWidth}>
				          <MenuItem value="breakfast" primaryText="Breakfast" />
				          <MenuItem value="lunch" primaryText="Lunch" />
				          <MenuItem value="dinner" primaryText="Dinner" />
				          <MenuItem value="dessert" primaryText="Dessert" />
			        </SelectField>
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
                    <SelectField
                      id="degree_Units"
			          floatingLabelText="°F"
			          value={this.state.degree_Units}
			          onChange={this.degreeChange}
			          style={styles.customWidth}>
				          <MenuItem value="Fahrenheit" primaryText="Fahrenheit" />
				          <MenuItem value="Celcius" primaryText="Celcius" />		         
			        </SelectField>
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
                    <h3> Personal Notes </h3>
                    <TextField
                      id="personal_Notes"
                      hintText="Personal Notes"
                      floatingLabelText="Tell us about your recipe!"
                      fullWidth={true}
                      value={this.state.personal_Notes}
                      onChange={this.update}/>
                    <RaisedButton type="submit" label="Add Directions" primary={true} style={style.button}/>

				</form>
				
			</div>	
		)
	}
})
export default AddRecipe


  // {this.props.steps.map((step, i) =>(
 //	<Steps stepId={i + 1} recipeId={1}/>  
// ))}	 

