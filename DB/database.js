const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('geocustodian', 'root', '1234', {
  host: '127.0.0.1',
  dialect: 'mariadb',
});

module.exports = sequelize;