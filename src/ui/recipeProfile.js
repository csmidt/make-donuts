import React from 'react'
import { Link, hashHistory } from 'react-router'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'
import { getRecipe, getAUIs, getStep } from 'api/recipesapi'
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
      AUIs: [],
      step: [],
      personal_Notes: "",
      recipe_Id: ""
		}
	},

	componentWillMount: function() { 
		getRecipe(this.props.params.id)
    getAUIs(this.props.params.id)
    getStep(this.props.params.id)

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
        AUIs: appState.AUIs,
        step: appState.step,
        personal_Notes: appState.recipe.personal_Notes,
        recipe_Id: this.props.params.id

      })
      console.log('component state', this.state)
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
          recipe_Id={this.state.recipe_Id}

          />

        <RecipeDirections 

          AUIs={this.state.AUIs}
          step={this.state.step}

          />

        <PersonalNotes 
          personal_Notes={this.state.personal_Notes}
          />

        <SubmitButtons />
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
  },

  button: {
    position: 'absolute',
    right: '16%',
    marginTop: '5%',
    marginBottom: '15%',
    width: '10%',
    height: '50px'
  },

  buttonChild: {
    lineHeight: 3
  },

  adjustButton: {
    position: 'absolute',
    right: '30%',
    width: '7%',
    height: '4%',
  },

  adjustButtonChild: {
    height: '100%',
    paddingBottom: '10px'
  }

}
const style = {
   margin: 12,
   button: {
    backgroundColor: "#00FF00"  
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
          <div className="bottomRow">{this.props.prep_Time}</div>
        </div>
        <div className="table">
          <div className="topRow">Cook Time</div>
          <div className="bottomRow">{this.props.cook_Time}</div>
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
            <td colSpan="2" className="tableRow">{this.props.portion_Amount} {this.props.portion_Type} 
              <RaisedButton 
              label="Adjust" 
              style={styles.adjustButton} 
              buttonStyle={styles.adjustButtonChild}
              backgroundColor="#504f4f"
              labelColor="#FFFFFF"
              icon={<FontIcon className="material-icons" color="#cccccc">create</FontIcon>}
              href="http://localhost:8000/adjustRecipe/1"
              />
          

            </td>
          </tr>
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
           {this.props.step.map (item => {
            {var stepNumber = item.id}
            return(
              <div key={"d" + item.id} className="fullStep">
                <div className="recipeDiretionsHeader"><span className="stepHeader">Step {item.id}</span></div>
                <div className="recipeDirectionsContent">
                  <div className="recipeInsturctions">{item.directions}</div>
                    <table className="recipeIngredientTable">
                      <tbody> 
                        {this.props.AUIs.map (item => {
                           if( stepNumber === item.stepId) 
                            return (
                              <tr key={"a" + item.id} className="recipeIngredientRow">
                                <td key={"b" + item.id} className="recipeIngredientCell1"><span className="ingredientCell1">{item.step_Amount} {item.units}</span></td>
                                <td key={"c" + item.id} className="recipeIngredientCell2">{item.ingredient}</td>
                              </tr> 
                            )
                        })}
                      </tbody>            
                    </table>
                </div>
              </div>
            )
            })} 
        </div>
    )                
  }
})

const PersonalNotes = React.createClass({
  render: function() {
    return (
      <div className="personalNotes">
        <div className="personalNotesHeader">
          <span className="noteHeader">Personal Notes</span>
        </div>
        <div className="personalNotesContent">
          {this.props.personal_Notes}
        </div>

      </div>
    )
  }
})

const SubmitButtons = React.createClass({
  navToHome: function(e) {
      e.preventDefault()
      hashHistory.push("/gridListExample")
  },

  navToGridList: function(e) {
    e.preventDefault()
    hashHistory.push("/gridListExample")
  },
  render: function() {
    return (
      <div className="submitButtonContainer">
        <div className="editButton">
          Edit this recipe
        </div>
        <RaisedButton 
            label="Start" 
            style={styles.button} 
            buttonStyle={styles.buttonChild}
            backgroundColor="#504f4f"
            labelColor="#FFFFFF"
            />
        <div className="navHome">
           <RaisedButton 
              type="submit" 
              label="Back to Home" 
              primary={true} 
              style={style.button} 
              onClick={this.navToHome}/>
        </div>
      </div>
    )
  }
})



export default RecipeProfileContainer

 
// "http://localhost:8000/adjustRecipe/recipeId/" + this.props.recipe_Id

// <tr className="recipeIngredientRow">
  // <td className="recipeIngredientCell1"><span className="ingredientCell1">1/2 cup</span></td>
  // <td className="recipeIngredientCell2">Sugar</td>
// </tr> 
// <tr className="recipeIngredientRow">
  // <td className="recipeIngredientCell1"><span className="ingredientCell1">1/2 cup</span></td>
  // <td className="recipeIngredientCell2">Sugar</td>
// </tr>  

 