import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { getRecipes, getFavoriteRecipes } from 'api/recipesapi'
import store from 'store'

const GridListExampleContainer = React.createClass({
  getInitialState: function() { 
    return {
      recipes: [],
      favorite_Recipes: []
    }
  },

  componentWillMount: function() {
    getRecipes()
    getFavoriteRecipes()
    this.unsubscribe = store.subscribe(() => {
      const appState = store.getState()
      this.setState({
        recipes: appState.recipes,
        favorite_Recipes: appState.favorite_Recipes
      })
      console.log('componentWillMount this.state', this.state) 
    })
  },

  componentWillUnmount: function() {
    this.unsubscribe()
  },

  render: function() {
    return (
      <GridListExampleSingleLine recipes={this.state.recipes} favorite_Recipes={this.state.favorite_Recipes}/>
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
              >
                <img src={recipe.image} />
              </GridTile>
              
            ))}

          </GridList>
        </div>

        <h3> Favorite Recipes </h3>
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
        
      </div>

    )
  }
})

export default GridListExampleContainer;





