import React from 'react'
import { Link, hashHistory } from 'react-router'
import * as actions from 'actions'
import store from 'store'
import { getRecipes } from 'api/recipesapi'


const SummaryContainer =  React.createClass({
  getInitialState: function() {
    return  {
    	recipes: []
    }
  },

  componentWillReceiveProps(props) {
  	getRecipes(props.params.id)

  		this.unsubscribe = store.subscribe(() => {
  			const state = store.getState()
  			this.setState({
  				recipes: state.recipes
  			})
  		})
  },
  componentWillUnmount: function () {
  	this.unsubscribe()
  },
  render:function () {
  	return (
  		<SummaryView recipes={this.state.recipes} />
  	)
  }
})

const SummaryView = React.createClass({
 navToAddRecipe: function(e) {
  e.preventDefault()
  hashHistory.push('/addRecipe/:id')
  },

	render:function(){
		return (
			<div className="homepage">
				<h3>My Recipes</h3>
				<ul className="recipeView">
					{this.props.recipes.map(recipe => {
						return (
							<li key={recipe.id}>
								<div>
									<img src={album.image} />
								</div>
							</li>
						)
					})}
							<li>
								<button onClick={this.navToAddRecipe}> Add Recipe </button>
							</li>
				</ul>
			</div>
		)
	}
})

export default SummaryContainer