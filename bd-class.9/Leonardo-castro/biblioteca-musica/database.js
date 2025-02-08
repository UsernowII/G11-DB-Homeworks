import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('Música con Express', 'postgres', '0627leo', {
  host: 'localhost',
  dialect: 'postgres',
});

export default sequelize;
