const db = require('../db');
const Sequelize = require('sequelize');

const Team = db.define('team', {
  name: { 
    type: Sequelize.STRING, 
    allowNull: false 
  },
})

module.exports = Team;