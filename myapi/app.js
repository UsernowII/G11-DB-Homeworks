import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

let movies = [
  {
    id: 1,
    title: "Inception",
    directorId: 1,
    genre: "Sci-Fi",
    releaseYear: 2010
  },
  {
    id: 2,
    title: "Interstellar",
    directorId: 1,
    genre: "Sci-Fi",
    releaseYear: 2014
  }
];

let directors = [
  {
    id: 1,
    name: "Christopher Nolan",
    nationality: "British-American"
  },
  {
    id: 2,
    name: "Quentin Tarantino",
    nationality: "American"
  }
];

//Obtener una película por ID/*
app.get('/movies', (req, res) => {
  res.json(movies);
});

app.get('/movies/:id', (req, res) => {
  const movie = movies.find(m => m.id === parseInt(req.params.id));
  if (!movie) return res.status(404).send('Movie not found');
  res.json(movie);
});

// Agregar una nueva película /*
app.post('/movies', (req, res) => {
  console.log(req.body)
  const movie = {
    id: movies.length + 1,
    title: req.body.title,
    directorId: req.body.directorId,
    genre: req.body.genre,
    releaseYear: req.body.releaseYear
  };
  movies.push(movie);
  res.status(201).json(movie);
});

// Actualizar una película /*
app.put('/movies/:id', (req, res) => {
  const movie = movies.find(m => m.id === parseInt(req.params.id));
  if (!movie) return res.status(404).send('Movie not found');

  movie.title = req.body.title;
  movie.directorId = req.body.directorId;
  movie.genre = req.body.genre;
  movie.releaseYear = req.body.releaseYear;

  res.json(movie);
});

// Eliminar una película /*

app.delete('/movies/:id', (req, res) => {
  const movieIndex = movies.findIndex(m => m.id === parseInt(req.params.id));
  if (movieIndex === -1) return res.status(404).send('Movie not found');

  const deletedMovie = movies.splice(movieIndex, 1);
  res.json(deletedMovie[0]);
});

// Manejo de Errores /*
app.get('/movies/:id', (req, res) => {
  const movie = movies.find(m => m.id === parseInt(req.params.id));
  if (!movie) return res.status(404).send('Movie not found');
  res.json(movie);
});