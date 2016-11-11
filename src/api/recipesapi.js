import axios from 'axios'
import store from 'store'
import * as actions from 'actions'
import { hashHistory } from 'react-router'

axios.defaults.baseURL = 'http://localhost:8001/'

// export function getFullRecipie(id, stepId) {
// 	return axios.get(`recipes/${id}`).then(resp => {
// 		return axios.get(`auis?stepId=${id}`).then(resp2 => {
// 			store.dispatch({
// 				type:'GET_FULL_RECIPE',
// 				recipe: resp.data,
// 				AUIs: resp2.data
// 			})
// 		})
// 	})
// }

export function getRecipe(id) {
	return axios.get(`recipes/${id}`).then(resp => {
		console.log('getRecipe()', resp.data)
		store.dispatch({
			type: 'GET_RECIPE',
			recipe: resp.data
		})
	})
}

export function getRecipes() {
	return axios.get("recipes").then(resp => {
		console.log("getRecipes()", resp.data)
		store.dispatch({
			type: 'GET_RECIPES',
			recipes: resp.data
		})
	})
}

export function addRecipe(obj) {
	return axios.post("recipes", obj).then(resp => {
		console.log("API CALL: addRecipe()", resp.data)
		store.dispatch({
			type: 'ADD_RECIPE',
			recipe: resp.data
		})
	})
}

export function getAUIs(id) {
	return axios.get(`auis?stepId=${id}`).then(resp => {
		console.log('getAUIs()', resp.data)
		store.dispatch({
			type: 'GET_AUIS',
			AUIs: resp.data
		})
	})
}