const DefaultState = {
	recipes: [],
	favorite_Recipes: [],
	recipe: ''
}

export default function(state=DefaultState, action) {
	switch(action.type) {
		
		case 'GET_RECIPES':
			return {...state, recipes:action.recipes}

		case 'GET_RECIPE': 
			return {...state, recipe:action.recipe}

		case 'GET_FAVORITE_RECIPES':
			return {...state, favorite_Recipes:action.favorite_Recipes}

		

		default:
			return state

	}
}


