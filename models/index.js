const db = require('../db');
const League = require('./League');
const Team = require('./Team');
const Player = require('./Player');

League.hasMany(Team);
Team.belongsTo(League);

Team.hasMany(Player);
Player.belongsTo(Team)

League.hasMany(Player);
Player.belongsTo(League);

module.exports = {
  db,
  League,
  Team,
  Player,
};