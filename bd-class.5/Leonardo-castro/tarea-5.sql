- Creación de la base de datos y las tablas

-- Tabla de Autores
CREATE TABLE autores (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    nacionalidad VARCHAR(255)
);

-- Tabla de Editoriales
CREATE TABLE editoriales (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);

-- Tabla de Libros
CREATE TABLE libros (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor_id INT,
    editorial_id INT,
    anio_publicacion INT,
    genero VARCHAR(100),
    FOREIGN KEY (autor_id) REFERENCES autores(id),
    FOREIGN KEY (editorial_id) REFERENCES editoriales(id)
);

-- Tabla intermedia para Libros y Autores (si un libro puede tener múltiples autores)
CREATE TABLE libro_autor (
    libro_id INT,
    autor_id INT,
    PRIMARY KEY (libro_id, autor_id),
    FOREIGN KEY (libro_id) REFERENCES libros(id),
    FOREIGN KEY (autor_id) REFERENCES autores(id)
);

-- Insertar autores
INSERT INTO autores (nombre, nacionalidad) VALUES
('George Orwell', 'Británica'),
('Harper Lee', 'Americana'),
('J.D. Salinger', 'Americana'),
('Jane Austen', 'Británica'),
('J.K. Rowling', 'Británica');

-- Insertar editoriales
INSERT INTO editoriales (nombre) VALUES
('Penguin Books'),
('J.B. Lippincott & Co.'),
('T. Egerton');

-- Insertar libros
INSERT INTO libros (titulo, autor_id, editorial_id, anio_publicacion, genero) VALUES
('1984', 1, 1, 1949, 'Dystopian'),
('To Kill a Mockingbird', 2, 2, 1960, 'Fiction'),
('The Catcher in the Rye', 3, 1, 1951, 'Fiction'),
('Pride and Prejudice', 4, 3, 1813, 'Romance'),
('Harry Potter and the Philosopher''s Stone', 5, 1, 1997, 'Fantasy');

-- Insertar relaciones entre libros y autores (si es necesario)
INSERT INTO libro_autor (libro_id, autor_id) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

-- Punto 1: Reporte con JOINs

-- Reporte 1: Usar INNER JOIN para seleccionar los títulos de los libros junto con el nombre de su editorial.
SELECT l.titulo AS book_title, e.nombre AS publisher_name
FROM libros l
INNER JOIN editoriales e ON l.editorial_id = e.id;

-- Reporte 2: Usar LEFT JOIN para seleccionar todos los autores y los títulos de los libros que han escrito, incluyendo autores que no han escrito ningún libro.
SELECT a.nombre AS author_name, l.titulo AS book_title
FROM autores a
LEFT JOIN libros l ON a.id = l.autor_id;

-- Reporte 3: Usar RIGHT JOIN para seleccionar todos los libros y los nombres de los autores que los han escrito, incluyendo libros que no tienen autores asociados.
SELECT l.titulo AS book_title, a.nombre AS author_name
FROM libros l
RIGHT JOIN autores a ON l.autor_id = a.id;

-- Reporte 4: Usar una combinación de INNER JOIN y LEFT JOIN para seleccionar todos los libros, sus autores, y la editorial, incluyendo libros que no tienen autores y aquellos sin editorial.
SELECT l.titulo AS book_title, a.nombre AS author_name, e.nombre AS publisher_name
FROM libros l
LEFT JOIN autores a ON l.autor_id = a.id
LEFT JOIN editoriales e ON l.editorial_id = e.id;

-- Reporte 5: Usar INNER JOIN para seleccionar todos los libros que han sido escritos por más de un autor y mostrar el título del libro junto con los nombres de los autores.
SELECT l.titulo AS book_title, a.nombre AS author_name
FROM libros l
INNER JOIN libro_autor la ON l.id = la.libro_id
INNER JOIN autores a ON la.autor_id = a.id;

-- Reporte 6 (Opcional): Usar INNER JOIN, LEFT JOIN, y GROUP BY para seleccionar la editorial que tiene más libros publicados, junto con el número total de libros y los títulos de esos libros.
SELECT e.nombre AS publisher_name, COUNT(l.id) AS total_books, STRING_AGG(l.titulo, ', ') AS book_titles
FROM editoriales e
LEFT JOIN libros l ON e.id = l.editorial_id
GROUP BY e.id
ORDER BY total_books DESC
LIMIT 1;
