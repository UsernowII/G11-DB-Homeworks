import { Sequelize } from 'sequelize';

// Cambia los parámetros según tu base de datos
const sequelize = new Sequelize('clase-8','postgres','0627leo',{
  host: 'localhost',
  dialect: 'postgres', 
});

export default sequelize;
