const router = require('express').Router()
const { League, Team, Player } = require('../models')

router.get('/', (req, res, next) => {
	League
		.findAll({
			include: [
				{
					model: Team
				}
			]
		})
		.then(league => {
			res.send(league)
		})
		.catch(err => {
			return next(err)
		})
})

router.get('/:id', (req, res, next) => {
	League
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
		.then(league => {
			if (!league) { 
				res.status(404).send({ error: 'League does not exist' }) 
			} else {
				res.send(league)
			} 
		})
		.catch(err => {
			return next(err)
		})
})

router.post('/', (req, res, next) => {
	League
		.create(req.body)
		.then(league => {
			res.send(league)
		})
		.catch(err => {
			return next(err)
		})
})

router.put('/:id', (req, res, next) => {
	League
		.findById(req.params.id)
		.then(league => {
			league.update(req.body)
			res.send({ message: 'League updated.', league })
		})
		.catch(err => {
			return next(err)
		})
})

router.delete('/:id', (req, res, next) => {
	League
		.destroy({
			where: {
				id: req.params.id,
			}
		})
		.then(league => {
			res.status(204).send({ message: 'League deleted. '})
		})
		.catch(err => {
			return next(err)
		})
})

module.exports = router;