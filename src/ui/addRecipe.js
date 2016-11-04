import React from 'react'
import { Link, hashHistory } from 'react-router'
import * as actions from 'actions'
import store from 'store'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';




const AddRecipe = React.createClass({
	getInitialState: () => ({
		value: 1
	}),

	handleChange: function(event, index, value) {
	 	this.setState({value})
	},
	
	render: function() {
		return (
			<div className="AddRecipeDiv">
				<h3>Basic Info</h3>
				<form>
					<div className="formfields">
						<input type="url" id="image" className="image" />
						<div className="Names">
							<input type="text" id="Recipe Name"className="addFields" placeholder="Recipe Name" />
							<input type="text" id="creator"className="addFields"  placeholder="Chef's Name"/>
							
					   	</div>
					   	<div>
					   		<input type="checkbox" id="public"/><label htmlFor="public">Make it Public</label>
							<input type="checkbox" id="private"/><label htmlFor="private">Make it Private</label>
					   		
					   	</div>
					   	<div className="howToCook">
						    <input type="text" id="prepTime" className="addFields" placeholder="Prep Time"/>
						    <input type="cookTime" id="cookTime" className="addFields" placeholder="Cook Time"/>
						    <input type="cookTemp" id="cookTemp" className="addFields" placeholder="Cook Temp" />
							<SelectField value={this.state.value} onChange={this.handleChange}>
						        <MenuItem value={1} label="5 am - 12 pm" primaryText="Morning" />
						        <MenuItem value={2} label="12 pm - 5 pm" primaryText="Afternoon" />
						        <MenuItem value={3} label="5 pm - 9 pm" primaryText="Evening" />
						        <MenuItem value={4} label="9 pm - 5 am" primaryText="Night" />
						    </SelectField>
						</div>
					</div>   
				    <div>
				    	<h3>Step 1</h3>
				    		<div className="howToCook">
							    <input type="text" id="prepTime" className="addFields" placeholder="Amount" />
							    <input type="cookTime" id="cookTime" className="addFields" placeholder="Unit" />
							    <input type="cookTemp" id="cookTemp" className="addFields" placeholder="Ingredient" />
							</div>
							<input type="textArea" id="personalNotes" className="textArea" placeholder="Directions for this step" />
							<button onClick={this.navToAddRecipe}> Add Another Step </button>
				    </div>
				    <div>
				    	<h3>Pesonal Notes</h3>
				    	<input type="textArea" id="personalNotes" className="textArea" />
				    </div>

				</form>
			</div>	
		)
	}
})
export default AddRecipe