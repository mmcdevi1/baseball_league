const router = require('express').Router()
const { League, Team, Player } = require('../models')

router.get('/', (req, res, next) => {
	Team
		.findAll({
			include: [
				{
					model: Player
				}
			]
		})
		.then(team => {
			res.send(team)
		})
		.catch(err => {
			return next(err)
		})
})

router.get('/:id', (req, res, next) => {
	Team
		.findOne({
			where: {
				id: req.params.id
			},
			include: [
				{
					model: Player
				}
			]
		})
		.then(team => {
			if (!team) { 
				res.status(404).send({ error: 'Team does not exist' }) 
			} else {
				res.send(team)
			} 
		})
		.catch(err => {
			return next(err)
		})
})

router.post('/', (req, res, next) => {
	Team
		.create(req.body)
		.then(team => {
			res.send(team)
		})
		.catch(err => {
			return next(err)
		})
})

router.put('/:id', (req, res, next) => {
	Team
		.findById(req.params.id)
		.then(team => {
			team.update(req.body)
			res.send({ message: 'Team updated.', team })
		})
		.catch(err => {
			return next(err)
		})
})

router.delete('/:id', (req, res, next) => {
	Team
		.destroy({
			where: {
				id: req.params.id,
			}
		})
		.then(team => {
			res.status(204).send({ message: 'Team deleted. '})
		})
		.catch(err => {
			return next(err)
		})
})

module.exports = router;