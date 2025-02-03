const { Sequelize } = require('sequelize');
const env = require('../config/env');

const sequelize = new Sequelize(env.databaseDB, env.usernameDB, env.passwordDB, {
    host: env.hostDB,
    dialect: env.dialect,
    logging: env.env === 'dev',
});

sequelize.query(`
    CREATE TABLE IF NOT EXISTS Artists (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        bio TEXT,
        photoUrl VARCHAR(255)
    );
`)
.then(() => console.log('XX table was created successfully'))
.catch(error => console.log(error));


sequelize.query(`
    CREATE TABLE IF NOT EXISTS Songs (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255),
        artistId INT REFERENCES Artists(id),
        releaseYear INT,
        duration INT,
        coverUrl VARCHAR(255)
    );
`)
.then(() => console.log('XX table was created successfully'))
.catch(error => console.log(error));

module.exports = { sequelize };