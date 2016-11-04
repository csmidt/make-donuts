
var faker = require('faker')

module.exports = function() {
	var data = { recipes: [] }

	for (var i = 0; i < 10; i++) {
		data.recipes.push({ 
			"id": i,
			"image": faker.image.food(),
			"recipe_Name": "Ciabatta",
			"by": faker.name.findName(),
			"scope": "Public",
			"recipe_Type": "Breakfast",
			"recipeCategoryId": "Public Popular Favorite",
			"prep_Time": faker.random.number(),
			"cook_Time": faker.random.number(),
			"cook_Temp": faker.random.number(),
			"degree_Units": "Celcius",
			"portion_Amount": faker.random.number(),
			"portion_Type": "Loafs",
			"instructions": [
				{
					"id": 1,
					"AUIs": [
						{
						  "step_Amount": 2  ,
						  "units": "cups",
						  "ingredient": "flour"
						}
					],
					"directions": faker.lorem.paragraph()
				}
			],

			"personal_Notes": faker.lorem.paragraph()
		})
	}
	return data
} 


// var faker = require('faker')

// module.exports = function() {
// 	var data = { users: [] }

// 	for (var i = 0; i < 1000; i++) {
// 		data.users.push({ 
// 			id: i, 
// 			fname: faker.name.firstName(),
// 			address: faker.address.streetAddress(),
// 			city: faker.address.city(),
// 			zip: faker.address.zipCode()
// 		})
// 	}
// 	return data
// }