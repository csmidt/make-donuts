const DefaultState = {
	recipes: {}
}

export default function(state=DefaultState, action) {
	switch(action.type) {
		case 'GET_RECIPES':
			return {...state, recipes:action.recipes}
		

		case 'GET_RECIPE': 
			return {...state, recipe:action.recipe}

		default:
			return state

	}
}


