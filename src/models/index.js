'use strict';

require('dotenv').config();

const users = require('./users.js')

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory';
const { Sequelize, DataTypes } = require('sequelize');

const options = process.env.NODE_ENV === 'test'
  ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  }
  : {};

  let sequelizeInstance = new Sequelize(DATABASE_URL);

  module.exports = {
    db: sequelizeInstance,
    User: users(sequelizeInstance, DataTypes),
  }