import React from 'react'
import { Link, hashHistory } from 'react-router'
import * as actions from 'actions'
import store from 'store'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const AddRecipe = React.createClass({
	handleChange = (event, index, value) => 
	 	this.setState({value});

	render: function() {
		return (
			<div>
				<h3>Basic Info</h3>
				<form>
					<div>
						<input type="url" id="image" />
						<input type="text" id="Recipe Name" />
						<input type="text" id="creator" />
					    <SelectField value={this.state.value} onChange={this.handleChange}>
				          <MenuItem value={1} label="Breakfast" primaryText="Breakfast" />
				          <MenuItem value={2} label="Lunch" primaryText="Lunch" />
				          <MenuItem value={3} label="Dinner" primaryText="Dinner" />
				          <MenuItem value={4} label="Dessert" primaryText="Dessert" />
				        </SelectField>
					    <input type="text" id="prepTime" />
					    <input type="cookTime" id="cookTime" />
					    <input type="cookTemp" id="cookTemp" />
					    <SelectField value={this.state.value} onChange={this.handleChange}>
					      <MenuItem value={1} label="C" primaryText="C" />
					      <MenuItem value={2} label="F" primaryText="F" />  
					    </SelectField>
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