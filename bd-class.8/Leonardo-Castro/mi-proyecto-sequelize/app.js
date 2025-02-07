import sequelize from './database.js';
import { User, Post } from './models.js';

const runApp = async () => {
  try {
    // Crear un nuevo usuario
    const newUser = await User.create({ name: 'John Doe', email: 'john@example.com' });
    
    // Crear un nuevo post
    const newPost = await Post.create({
      title: 'Primer Post',
      content: 'Este es el contenido del primer post.',
      userId: newUser.id,
    });

    // Encontrar todos los usuarios
    const users = await User.findAll();
    console.log(users);

    // Encontrar un post por ID
    const post = await Post.findOne({ where: { id: newPost.id } });
    console.log(post);

  } catch (error) {
    console.error('Error en la aplicación:', error);
  } finally {
    await sequelize.close();
  }
};

runApp();
