const { db, League, Team, Player } = require('./')
const faker = require('faker')

// Helper functions
const floor = function (random) {
  return Math.floor(random);
}

const random = function (min = 0, max) {
  return (Math.random() * ( max - min + 1 )) + min;
}

// Database seed
db
	.sync({ force: true })
	.then(() => {

		const leagues = []

		// Create Silly Name Universities and Faker addresses
		for (let i = 0; i < 6; i++) {
			leagues.push({
				name:        `${faker.address.city()} League`,
				// street:      `${faker.address.streetAddress()} ${faker.address.streetName()}`,
				// city:        `${faker.address.city()}`,
				// state:       `${faker.address.state()}`,
				// zipcode:     `${faker.address.zipCode()}`,
				// description: `${faker.lorem.paragraph()}`
			})
		}

		return League.bulkCreate( leagues, { returning: true } )
	})
	.then(league => {

		const teams = []

		for (let i = 0; i < 30; i++) {
			teams.push({
				name: `${faker.address.city()} ${faker.company.bsBuzz()}`,
				leagueId: floor(random(1, 6))
			})
		}

		return Team.bulkCreate( teams, { returning: true } )
	})
	.then(team => {

		const players = []

		for (let i = 0; i < 749; i++) {
			players.push({
				firstName: `${faker.name.firstName()}`,
				lastName: `${faker.name.lastName()}`,
				teamId: floor(random(1, 30))
			})
		}

		return Player.bulkCreate( players, { returning: true } )
	})
	.then(() => {
		console.log('[SUCCESS]: Database synced successfully.')
	})
	.catch(err => {
		console.log('[ERROR]: Database not synced successfully.')
		console.log(err)
	})
	.finally(() => {
		db.close()
	})