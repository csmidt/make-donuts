import axios from 'axios'
import store from 'store'
import * as actions from 'actions'
import { hashHistory } from 'react-router'

axios.defaults.baseURL = 'http://localhost:8001/'

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

export function getFavoriteRecipes() {
	return axios.get("recipes?recipeCategoryId=Favorite").then(resp => {
		console.log("getFavoriteRecipes() api", resp.data)
		store.dispatch({
			type: 'GET_FAVORITE_RECIPES',
			favorite_Recipes: resp.data
		})
	})
}

export function getPublicRecipes() {
	return axios.get("recipes?recipeCategoryId=Public").then(resp => {
		console.log("getPublicRecipes() api", resp.data)
		store.dispatch({
			type: 'GET_PUBLIC_RECIPES',
			public_Recipes: resp.data
		})
	})
}

export function getPopularRecipes() {
	return axios.get("recipes?recipeCategoryId=Popular").then(resp => {
		console.log("getPopularRecipes() api", resp.data)
		store.dispatch({
			type: "GET_POPULAR_RECIPES",
			popular_Recipes: resp.data
		})

	})
}

export function getMyPantry() {
	return axios.get("recipes?recipeCategoryId=My Pantry").then(resp => {
		console.log("getMyPantry() api", resp.data)
		store.dispatch({
			type: "GET_MY_PANTRY",
			my_Pantry: resp.data
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