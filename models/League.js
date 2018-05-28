const db = require('../db');
const Sequelize = require('sequelize');

const League = db.define('league', {
  name: { 
    type: Sequelize.STRING, 
    allowNull: false 
  },
})

module.exports = League;