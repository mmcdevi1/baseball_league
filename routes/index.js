const express = require('express');
const router = express.Router();

router.use('/leagues', require('./leagueRoutes'));
router.use('/teams',   require('./teamRoutes'));
router.use('/players', require('./playerRoutes'));

router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router