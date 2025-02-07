import sequelize from './database.js';
import { User, Post } from './models.js';

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); // Usa { force: true } para reiniciar las tablas
    console.log('Base de datos sincronizada');
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
  } finally {
    await sequelize.close();
  }
};

syncDatabase();
