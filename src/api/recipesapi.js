import axios from 'axios'
import store from 'store'
import recipeReducer from 'Reducers/recipeReducer'
import * as actions from 'actions'
import { hashHistory } from 'react-router'

axios.defaults.baseURL = 'http://localhost:8001/'

export function getRecipes() {
	return axios.get('recipes').then(resp => {
		store.dispatch({
			type: actions.GET_RECIPES,
			recipes: resp.data
		})
	})
}