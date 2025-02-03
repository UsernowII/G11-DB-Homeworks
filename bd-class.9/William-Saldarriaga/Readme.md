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
- `POST /artists`: Crear un nuevo artista
- `GET /artists`: Obtener todos los artistas
- `GET /artists/:id`: Obtener un artista por ID
- `PUT /artists/:id`: Actualizar un artista por ID
- `DELETE /artists/:id`: Eliminar un artista por ID
- `GET /artists/:id/songs`: Obtener todas las canciones de un artista específico
- `GET /artists-by-song-duration/:duration`: Obtener artistas con canciones de duración específica o mayor

### Canciones
- `POST /songs`: Crear una nueva canción
- `GET /songs`: Obtener todas las canciones
- `GET /songs/:id`: Obtener una canción por ID
- `PUT /songs/:id`: Actualizar una canción por ID
- `DELETE /songs/:id`: Eliminar una canción por ID
- `GET /songs-with-artists`: Obtener todas las canciones con sus respectivos artistas
- `GET /songs/artist/:artistId`: Obtener todas las canciones de un artista específico

## Estructura de Datos

### Artista
```json
{
  "name": "Nombre del artista",
  "bio": "Biografía del artista",
  "photoUrl": "URL de la foto del artista"
}
```

#### Ejemplo de Artistas:
```json
[
  {
    "id": 1,
    "name": "The Beatles",
    "bio": "The Beatles were an English rock band formed in Liverpool.",
    "photoUrl": "https://picsum.photos/id/1015/400/400"
  },
  {
    "id": 2,
    "name": "Adele",
    "bio": "Adele is an English singer-songwriter known for her soulful voice.",
    "photoUrl": "https://picsum.photos/id/1016/400/400"
  }
]
```

### Canción
```json
{
  "title": "Título de la canción",
  "artistId": "ID del artista",
  "releaseYear": "Año de lanzamiento",
  "duration": "Duración en segundos",
  "coverUrl": "URL de la portada"
}
```

#### Ejemplo de Canciones:
```json
[
  {
    "id": 1,
    "title": "Hey Jude",
    "artistId": 1,
    "releaseYear": 1968,
    "duration": 431,
    "coverUrl": "https://picsum.photos/id/1018/400/400"
  },
  {
    "id": 2,
    "title": "Let It Be",
    "artistId": 1,
    "releaseYear": 1970,
    "duration": 243,
    "coverUrl": "https://picsum.photos/id/1020/400/400"
  },
  {
    "id": 3,
    "title": "Rolling in the Deep",
    "artistId": 2,
    "releaseYear": 2010,
    "duration": 228,
    "coverUrl": "https://picsum.photos/id/1021/400/400"
  },
  {
    "id": 4,
    "title": "Someone Like You",
    "artistId": 2,
    "releaseYear": 2011,
    "duration": 284,
    "coverUrl": "https://picsum.photos/id/1022/400/400"
  },
  {
    "id": 5,
    "title": "Hello",
    "artistId": 2,
    "releaseYear": 2015,
    "duration": 295,
    "coverUrl": "https://picsum.photos/id/1023/400/400"
  }
]
```

