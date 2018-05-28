const router = require('express').Router()
const { League, Team, Player } = require('../models')

router.get('/', (req, res, next) => {
	Player
		.findAll({
			include: [
				{
					model: Team
				}
			]
		})
		.then(player => {
			res.send(player)
		})
		.catch(err => {
			return next(err)
		})
})

router.get('/:id', (req, res, next) => {
	Player
		.findOne({
			where: {
				id: req.params.id
			},
			include: [
				{
					model: Team
				}
			]
		})
		.then(player => {
			if (!player) { 
				res.status(404).send({ error: 'Player does not exist' }) 
			} else {
				res.send(player)
			} 
		})
		.catch(err => {
			return next(err)
		})
})

router.post('/', (req, res, next) => {
	Player
		.create(req.body)
		.then(player => {
			res.send(player)
		})
		.catch(err => {
			return next(err)
		})
})

router.put('/:id', (req, res, next) => {
	Player
		.findById(req.params.id)
		.then(player => {
			player.update(req.body)
			res.send({ message: 'Player updated.', player })
		})
		.catch(err => {
			return next(err)
		})
})

router.delete('/:id', (req, res, next) => {
	Player
		.destroy({
			where: {
				id: req.params.id,
			}
		})
		.then(player => {
			res.status(204).send({ message: 'Player deleted. '})
		})
		.catch(err => {
			return next(err)
		})
})

module.exports = router;