'use strict';

const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/baseball_league');

module.exports = db;