import React from 'react'
import { Link } from 'react-router'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import { getRecipe } from 'api/recipesapi'
import store from 'store'

const RecipeProfileContainer = React.createClass({
	getInitialState: function() {
		return {
      recipeName:""
		}
	},

	componentWillMount: function() { 
		getRecipe(this.props.params.id)

    this.unsubscribe = store.subscribe(() => {
      const appState = store.getState()
      this.setState({
        recipeName: appState.recipe.recipe_Name
      })
      console.log('appState.recipe.recipe_Name', appState.recipe.recipe_Name)
      console.log('this.state.recipeName', this.state.recipeName)
    })
	},

  componentWillUnmount: function() {
    this.unsubscribe()
  },

	render: function() {
		return (
			<RecipeProfileHeader recipeName={this.state.recipeName}/>
		)	
	}
})

const RecipeProfileHeader = React.createClass({
 render: function() {
    return (
     <Card
         name="recipeProfileHeader"
         style={{
           width: '870px',
           margin: '16px 200px',
           boxShadow: 'none'
       }}
       >
       <CardHeader
         title={this.props.recipeName}
         subtitle="By Rashida" 
         name="recipeProfileHeaderTitle"
         style={{
           textAlign: 'center',
           fontSize: '50px'
         }}
       />
       <CardMedia
         overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
       >
         <img src="http://lorempixel.com/640/480/food" />
       </CardMedia>
     </Card>
   )
 }  
})

export default RecipeProfileContainer;


// React.createClass({
//   render: function() {
//     return (
//       <h1>{this.props.recipeName}</h1>
//     )
//   }
// })





 