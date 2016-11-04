
var faker = require('faker')

module.exports = function() {
	var data = { recipes: [] }

	for (var i = 0; i < 2; i++) {
		data.recipes.push({ 
			"id": i,
			"image": faker.image.food(),
			"recipe_Name": "",
			"by": faker.name.findName(),
			"scope": "Make It Public",
			"recipe_Type": "breakfast",
			"recipeCategoryId": "Public Recipe",
			"prep_Time": faker.random.number(),
			"cook_Time": faker.random.number(),
			"cook_Temp": faker.random.number(),
			"degree_Units": "Celcius",
			"portion_Amount": faker.random.number(),
			"portion_Type": "",
			"instructions": [
				{
					"stepId": i,
					"AUIs": [
						{
						  "step_Units": "" ,
						  "units": "",
						  "ingredient": ""
						}
					],
					"directions": ""
				}
			],

			"personal_Notes": faker.lorem.paragraph()
		})
	}
} 














var faker = require('faker')

module.exports = function() {
	var data = { users: [] }

	for (var i = 0; i < 1000; i++) {
		data.users.push({ 
			id: i, 
			fname: faker.name.firstName(),
			address: faker.address.streetAddress(),
			city: faker.address.city(),
			zip: faker.address.zipCode()
		})
	}
	return data
}