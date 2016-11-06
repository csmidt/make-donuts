import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { getRecipes } from 'api/recipesapi'
import store from 'store'

const GridListExampleContainer = React.createClass({
  getInitialState: function() { 
    return {
      recipes: []
    }
  },

  componentWillMount: function() {
    getRecipes()
    this.unsubscribe = store.subscribe(() => {
      const appState = store.getState()
      this.setState({
        recipes: appState.recipes
      })
      console.log('this.state.recipes', this.state.recipes) 
    })
  },

  componentWillUnmount: function() {
    this.unsubscribe()
  },

  render: function() {
    return (
      <GridListExampleSingleLine recipes={this.state.recipes}/>
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
  },
};


const GridListExampleSingleLine = React.createClass({
  render: function() {
    return (
      <div style={styles.root}>
        <GridList style={styles.gridList} cols={1}>
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

    )
  }
})

export default GridListExampleContainer;

// <div>
// {this.props.recipes.map(recipe => {
//   return (
//     <div>
//       <h1>{recipe.recipe_Name}</h1>
//     </div>
//   )  
// })}
// </div>



// const tilesData = [
//   {
//     img: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg',
//     title: 'Breakfast',
//     author: 'jill111',
//   },
//   {
//     img: 'http://static.boredpanda.com/blog/wp-content/uuuploads/food-art/food-art-6.jpg',
//     title: 'Tasty burger',
//     author: 'pashminu',
//   },
//   {
//     img: 'https://i.ytimg.com/vi/QiX5VjLU6Ts/maxresdefault.jpg',
//     title: 'Camera',
//     author: 'Danson67',
//   },
//   {
//     img: 'https://v.cdn.vine.co/v/avatars/C79E2AB5-990F-44D6-83A6-44AFBE56319F-123-000000019F2400CB.jpg?versionId=hsWyf4u4VYzCo5WpLeqW8b82dNI9AEyo',
//     title: 'Morning',
//     author: 'fancycrave1',
//   },
//   {
//     img: 'http://cdnak1.psbin.com/img/mw=160/mh=210/cr=n/d=dg8x9/af159g269ofg64mh.jpg',
//     title: 'Hats',
//     author: 'Hans',
//   },
//   {
//     img: 'http://cdn.wegotthiscovered.com/wp-content/uploads/Ryan-Lee-569x360.jpg',
//     title: 'Honey',
//     author: 'fancycravel',
//   },
//   {
//     img: 'http://starcasm.net/wp-content/uploads/2011/08/Jason_Sabo.jpg',
//     title: 'Vegetables',
//     author: 'jill111',
//   },
//   {
//     img: 'http://www.liberty.edu/media/1617/2012/nov2012/militaryweek20121107_1634DDsdy.jpg',
//     title: 'Water plant',
//     author: 'BkrmadtyaKarki',
//   }
// ];

/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */



