const DefaultState = {
	recipes: [],
	recipe: '',
	AUIs: []
}

export default function(state=DefaultState, action) {
	switch(action.type) {
		
		case 'GET_RECIPES':
			return {...state, recipes: action.recipes}


		case 'GET_RECIPE': 
			return {...state, recipe: action.recipe}

		
		case 'ADD_RECIPE':
			return {...state, recipe: action.recipe}


		case 'GET_AUIS':
			return {...state, AUIs: action.AUIs}

		case 'GET_FULL_RECIPE':
			return {...state, recipe: action.recipe, AUIs: action.AUIs}

		default:
			return state

	}
}


