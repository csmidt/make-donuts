import React from 'react'
import { Link } from 'react-router'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

// const RecipeProfileContainer = React.createClass({
// 	getInitialState: function() {
// 		replaceMe: ""
// 	},

// 	render: function() {
// 		return (
// 			<RecipeProile/>
// 		)	
// 	}
// })

const CardExampleWithAvatar = () => (
  <Card
  	name="recipeProfileHeader"
  	style={{
  		width: '870px',
  		margin: '16px 200px',
  		boxShadow: 'none'
	}}
	>
    <CardHeader
      title="The Most Awesome Chocolate Chip Cookies" 
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
      <img src="http://maquinnasuperheroes.pbworks.com/f/1347855554/banner-corporate.jpg" />
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
);

export default CardExampleWithAvatar;

