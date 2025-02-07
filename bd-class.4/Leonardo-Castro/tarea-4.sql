-- Reporte 1: Mostrar todos los libros publicados por 'Penguin Books'.
SELECT *
FROM books
WHERE publisher = 'Penguin Books';

-- Reporte 2: Mostrar todos los libros publicados después del año 1950.
SELECT *
FROM books
WHERE publication_year > 1950;

-- Reporte 3:nombres de los autores que han escrito libros del género 'Fantasy'.
SELECT DISTINCT a.name
FROM authors a
WHERE a.author_id IN (
  SELECT b.author_id
  FROM books b
  WHERE b.genre = 'Fantasy'
);

-- Reporte 4: títulos de libros escritos por autores cuyo nombre incluye 'J.K
SELECT b.title
FROM books b
WHERE b.author_id IN (
  SELECT a.author_id
  FROM authors a
  WHERE a.name LIKE '%J.K.%'
);

-- (Opcional) Reporte 5: Mostrar los títulos de libros escritos por autores británicos.
SELECT b.title
FROM books b
WHERE b.author_id IN (
  SELECT a.author_id
  FROM authors a
  WHERE a.nationality = 'British'
);

-- Punto 2:

-- Cambiar el género del libro '1984' a 'Science Fiction'.
UPDATE books
SET genre = 'Science Fiction'
WHERE title = '1984';

-- Actualizar la nacionalidad de 'Mark Twain' a 'Canadian'.
UPDATE authors
SET nationality = 'Canadian'
WHERE name = 'Mark Twain';

-- Punto 3: Eliminar Información con DELETE

-- Borrar el libro 'Pride and Prejudice' de la base de datos.
DELETE FROM books
WHERE title = 'Pride and Prejudice';

-- Borrar los autores que no han escrito ningún libro.
DELETE FROM authors
WHERE author_id NOT IN (
  SELECT DISTINCT author_id
  FROM books
);
