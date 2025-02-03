# My Music Library

## Descripción
My Music Library es una aplicación que permite gestionar una biblioteca de música, incluyendo artistas y canciones. Utiliza Node.js y Express para el backend y Sequelize para la gestión de la base de datos.

## Tecnologías
- Node.js
- Express
- Sequelize
- PostgreSQL
- dotenv

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu_usuario/my-music-library.git
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd my-music-library
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias:
   ```
   PORT=3000
   DB_USERNAME=tu_usuario
   DB_PASSWORD=tu_contraseña
   DB_DATABASE=tu_base_de_datos
   DB_HOST=localhost
   DB_PORT=5432
   DB_DIALECT=postgres
   ENV=dev
   ```

## Uso

Para iniciar la aplicación en modo desarrollo, ejecuta el siguiente comando:
```bash
npm run start:dev
```

La aplicación estará disponible en `http://localhost:3000`.

## Rutas

### Artistas
- `POST /artists`: Crear un nuevo artista.
- `GET /artists`: Obtener todos los artistas.
- `GET /artists/:id`: Obtener un artista por ID.
- `PUT /artists/:id`: Actualizar un artista por ID.
- `DELETE /artists/:id`: Eliminar un artista por ID.

### Canciones
- `POST /songs`: Crear una nueva canción.
- `GET /songs`: Obtener todas las canciones.
- `GET /songs/:id`: Obtener una canción por ID.
- `PUT /songs/:id`: Actualizar una canción por ID.
- `DELETE /songs/:id`: Eliminar una canción por ID.

