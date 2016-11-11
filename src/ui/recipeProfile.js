import React from 'react'
import { Link } from 'react-router'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import { getRecipe, getAUIs } from 'api/recipesapi'
import store from 'store'

const RecipeProfileContainer = React.createClass({
	getInitialState: function() {
		return {
      recipe_Name:"",
      recipe_By:"",
      image: "",
      recipe_Type: "",
      prep_Time: "",
      cook_Time: "",
      cook_Temp: "",
      degree_Units: "",
      portion_Amount: "",
      portion_Type: "",
      AUIs: []
		}
	},

	componentWillMount: function() { 
		getRecipe(this.props.params.id)
    getAUIs(this.props.params.id)

    this.unsubscribe = store.subscribe(() => {
      const appState = store.getState()
      this.setState({
        
        recipe_Name: appState.recipe.recipe_Name,
        recipe_By: appState.recipe.by,
        image: appState.recipe.image,
        recipe_Type: appState.recipe.recipe_Type,
        prep_Time: appState.recipe.prep_Time,
        cook_Time: appState.recipe.cook_Time,
        cook_Temp: appState.recipe.cook_Temp,
        degree_Units: appState.recipe.degree_Units,
        portion_Amount: appState.recipe.portion_Amount,
        portion_Type: appState.recipe.portion_Type,
        AUIs: appState.AUIs
        // step_Amount: appState.AUIs.step_Amount
        // units: appState.AUIs.units,
        // ingredient: appState.AUIs.ingredient

      })
    })    
	},

  componentWillUnmount: function() {    
    this.unsubscribe()
  },

	render: function() {
		return (
			
      <div className="recipeProfileContainer">
        <RecipeProfileHeader 
          
          recipe_Name={this.state.recipe_Name} 
          recipe_By={this.state.recipe_By} 
          image={this.state.image}
          
          />

        <SummaryHorizontalBar 

          recipe_Type={this.state.recipe_Type}
          recipe_By={this.state.recipe_By} 
          image={this.state.image}
          prep_Time={this.state.prep_Time}
          cook_Time={this.state.cook_Time}
          cook_Temp={this.state.cook_Temp}
          degree_Units={this.state.degree_Units}
        
          />

        <RecipeCard

          portion_Amount={this.state.portion_Amount}
          portion_Type={this.state.portion_Type}
          AUIs={this.state.AUIs}
          // units={this.state.units}
          // ingredient={this.state.ingredient}
          />

        <RecipeDirections AUIs={this.state.AUIs}/>

      </div>

		)	
	}
})

const styles = {
  card: {
    width: '870px',
    margin: '16px 200px',
    boxShadow: 'none',
    color: '#BBBBBB'  
  },

  cardTitle: {
    textAlign: 'center'
  },

  img: {
    height: '386px',
    borderRadius: '5px',
    margin: 'auto'
  }
}


const RecipeProfileHeader = React.createClass({
 render: function() {
    return (
     <Card
         name="recipeProfileHeader"
         style={styles.card}
      >

      <CardTitle 
        title={this.props.recipe_Name} 
        subtitle={"By " + this.props.recipe_By} 
        style = {styles.cardTitle}
        />
       
      <CardMedia>
        <img src={this.props.image} style={styles.img}/>
      </CardMedia>
     
     </Card>
   )
 }  
})

const SummaryHorizontalBar = React.createClass({
  render: function() {
    return (
      <div className="headerRow">
        <div className="table">
          <div className="topRow">Recipe Type</div>
          <div className="bottomRow">{this.props.recipe_Type}</div>
        </div>
        <div className="table">
          <div className="topRow">Prep Time</div>
          <div className="bottomRow">{this.props.prep_Time}min</div>
        </div>
        <div className="table">
          <div className="topRow">Cook Time</div>
          <div className="bottomRow">{this.props.cook_Time}min</div>
        </div>
        <div className="table">
          <div className="topRow">Cook Temp</div>
          <div className="bottomRow">{this.props.cook_Temp}{String.fromCharCode(176)} {this.props.degree_Units}</div>
        </div>
      </div>
    ) 
  }
})

const RecipeCard = React.createClass({
  render: function() {
    return (
      <table className="recipeCardTable">
        <tbody>
          <tr>
            <td colSpan="2" className="tableRow">{this.props.portion_Amount} {this.props.portion_Type}</td>
          </tr>
            {console.log('auis',this.props.AUIs)}
            {this.props.AUIs.map (item => {
              return(
                <tr key={item.id}>
                  <td className="ingridentTable1Col"><span className="col1span">{item.step_Amount}<span className="space">{item.units}</span></span></td>
                  <td className="ingridentTable2Col"><span className="col2span">{item.ingredient}</span></td>  
                </tr>
              )
            })}
        </tbody>
      </table>
    )
  }
})

const RecipeDirections = React.createClass({
  render: function() {
    return (
      <div className="recipeDirections">
        <div className="recipeDiretionsHeader"><span className="stepHeader">Step 2</span></div>
        <div className="recipeDirectionsContent">
          <div className="recipeInsturctions">Reiciendis quis aut ad nemo. Est excepturi corrupti autem. Mollitia qui laudantium saepe eos. Iste non laboriosam atque quo eum sit magnam eum iusto.</div>
              <table className="recipeIngredientTable">
                <tbody> 
                  {this.props.AUIs.map (item => {
                    return (
                      <tr className="recipeIngredientRow">
                        <td className="recipeIngredientCell1"><span className="ingredientCell1">{item.step_Amount} {item.units}</span></td>
                        <td className="recipeIngredientCell2">{item.ingredient}</td>
                      </tr> 
                    )
                   })}
                  
                </tbody>            
              </table>
        </div>
      </div>
    )                
  }
})



export default RecipeProfileContainer


// <tr className="recipeIngredientRow">
  // <td className="recipeIngredientCell1"><span className="ingredientCell1">1/2 cup</span></td>
  // <td className="recipeIngredientCell2">Sugar</td>
// </tr> 
// <tr className="recipeIngredientRow">
  // <td className="recipeIngredientCell1"><span className="ingredientCell1">1/2 cup</span></td>
  // <td className="recipeIngredientCell2">Sugar</td>
// </tr>  

 