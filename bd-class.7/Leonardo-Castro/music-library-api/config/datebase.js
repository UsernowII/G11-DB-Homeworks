const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('music_library', 'postgres', '0627leo', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;
