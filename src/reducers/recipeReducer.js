const DefaultState = {
	recipes: [],
	favorite_Recipes: [],
	public_Recipes: [],
	popular_Recipes: [],
	recipe: ''
}

export default function(state=DefaultState, action) {
	switch(action.type) {
		
		case 'GET_RECIPES':
			return {...state, recipes: action.recipes}

		case 'GET_RECIPE': 
			return {...state, recipe: action.recipe}

		case 'GET_FAVORITE_RECIPES':
			return {...state, favorite_Recipes:action.favorite_Recipes}

		case 'GET_PUBLIC_RECIPES':
			return {...state, public_Recipes:action.public_Recipes}

		case'GET_POPULAR_RECIPES':
			return {...state, popular_Recipes:action.popular_Recipes}

		case'GET_MY_PANTRY':
			return {...state, my_Pantry:action.my_Pantry}

	
		case 'ADD_RECIPE':
			return {...state, recipe: action.recipe}






		default:
			return state

	}
}


