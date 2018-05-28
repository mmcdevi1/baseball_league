const db = require('../db');
const Sequelize = require('sequelize');

const Player = db.define('player', {
  firstName: { 
    type: Sequelize.STRING, 
    allowNull: false 
  },
  lastName: { 
    type: Sequelize.STRING, 
    allowNull: false 
  },
})

module.exports = Player;