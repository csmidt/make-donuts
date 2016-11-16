import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { getRecipes, getFavoriteRecipes, getPublicRecipes, getPopularRecipes, getMyPantry } from 'api/recipesapi'
import store from 'store'
import { hashHistory } from 'react-router'

const GridListExampleContainer = React.createClass({
  getInitialState: function() { 
    return {
      recipes: [],
      public_Recipes: [],
      popular_Recipes: [],
      favorite_Recipes: [],
      my_Pantry: []
    }
  },

  componentWillMount: function() {
    getRecipes()
    getFavoriteRecipes()
    getPublicRecipes()
    getPopularRecipes()
    getMyPantry()
    this.unsubscribe = store.subscribe(() => {
      const appState = store.getState()
      this.setState({
        recipes: appState.recipes,
        favorite_Recipes: appState.favorite_Recipes,
        public_Recipes: appState.public_Recipes,
        popular_Recipes: appState.popular_Recipes,
        my_Pantry: appState.my_Pantry
      })
      console.log('componentWillMount this.state', this.state) 
    })
  },

  componentWillUnmount: function() {
    this.unsubscribe()
  },

  render: function() {
    return (
      <GridListExampleSingleLine 
        recipes={this.state.recipes} 
        favorite_Recipes={this.state.favorite_Recipes} 
        public_Recipes={this.state.public_Recipes} 
        popular_Recipes={this.state.popular_Recipes} 
        my_Pantry={this.state.my_Pantry} 
        />
    )
  }
})

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    width: '600px'
  }
};

const GridListExampleSingleLine = React.createClass({

  link: function(id) {
    hashHistory.push(`/recipeProfile/${id}`)
  },

  render: function() {
    return (
      <div className="gridView">
        <h3> My Recipes </h3>
        <div style={styles.root}>
          <GridList style={styles.gridList} cols={3}>
            {this.props.recipes.map( recipe => (           
              <GridTile
                key={`i + ${recipe.id}`}
                title={recipe.recipe_Name}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                onClick={() => this.link(recipe.id)}
                >
                <img src={recipe.image}/>
              </GridTile>  
            ))}
          </GridList>
        </div>
        <h3> Public Recipes </h3>
        <div style={styles.root}>
          <GridList style={styles.gridList} cols={3}>
            {this.props.public_Recipes.map( recipe => (           
              <GridTile
                key={`i + ${recipe.id}`}
                title={recipe.recipe_Name}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              >
                <img src={recipe.image} />
              </GridTile> 
            ))}
          </GridList>
        </div>
        <h3> Popular Recipes </h3>
        <div style={styles.root}>
          <GridList style={styles.gridList} cols={3}>
            {this.props.popular_Recipes.map( recipe => (           
              <GridTile
                key={`i + ${recipe.id}`}
                title={recipe.recipe_Name}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              >
                  <img src={recipe.image} />
              </GridTile> 
            ))}
          </GridList>
        </div>
        <h3> My Favorite Recipes </h3>
        <div style={styles.root}>
          <GridList style={styles.gridList} cols={3}>
            {this.props.favorite_Recipes.map( recipe => (           
              <GridTile
                key={`i + ${recipe.id}`}
                title={recipe.recipe_Name}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              >
                <img src={recipe.image} />
              </GridTile> 
            ))}
          </GridList>
        </div>      
        <h3> My Pantry </h3>
        <div style={styles.root}>
          <GridList style={styles.gridList} cols={3}>
            {this.props.my_Pantry.map( recipe => (           
              <GridTile
                key={`i + ${recipe.id}`}
                title={recipe.recipe_Name}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              >
                <img src={recipe.image} />
              </GridTile>  
            ))}
          </GridList>
        </div>
      </div>
    )
  }
})

export default GridListExampleContainer;





