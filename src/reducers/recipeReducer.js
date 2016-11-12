const DefaultState = {
	recipes: [],
	recipe: '',
	AUIs: [],
	step: []
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

		case 'GET_STEP':
			return {...state, step: action.step}

		default:
			return state

	}
}


