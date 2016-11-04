import React from 'react'
import { Link, hashHistory } from 'react-router'
import * as actions from 'actions'
import store from 'store'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';




const AddRecipe = React.createClass({

//	handleChange = (event, index, value) => 
//	 	this.setState({value})

	render: function() {
		return (
			<div className="AddRecipeDiv">
				<h3>Basic Info</h3>
				<form>
					<div>
						<input type="url" id="image" className="addFields" />
						<input type="text" id="Recipe Name"className="addFields"  />
						<input type="text" id="creator"className="addFields"  />
					   
					    <input type="text" id="prepTime" className="addFields" />
					    <input type="cookTime" id="cookTime" className="addFields" />
					    <input type="cookTemp" id="cookTemp" className="addFields" />
					</div>   
				    <div>
				    	<h3>Step 1</h3>
				    </div>
				    <div>
				    	<h3>Pesonal Notes</h3>
				    	<input type="textArea" id="personalNotes" />
				    </div>
				</form>
			</div>	
		)
	}
})
export default AddRecipe