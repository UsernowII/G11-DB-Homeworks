-- Tarea: Practicando JOINs en SQL
-- Punto 1: Generar Reportes con JOINs
-- Reporte 1: Usar INNER JOIN para seleccionar los títulos de los libros junto con el nombre de su editorial.
SELECT b.title, p.name AS publisher_name
FROM book b
INNER JOIN publisher p ON b.publisher_id = p.publisher_id;

-- Reporte 2: Usar LEFT JOIN para seleccionar todos los autores y los títulos de los libros que han escrito, incluyendo autores que no han escrito ningún libro.
SELECT a.name AS author_name, b.title AS book_title
FROM author a
LEFT JOIN book_author ba ON a.author_id = ba.author_id
LEFT JOIN book b ON ba.book_id = b.book_id;

-- Reporte 3: Usar RIGHT JOIN para seleccionar todos los libros y los nombres de los autores que los han escrito, incluyendo libros que no tienen autores asociados.
SELECT b.title AS book_title, a.name AS author_name
FROM book b
RIGHT JOIN book_author ba ON b.book_id = ba.book_id
RIGHT JOIN author a ON ba.author_id = a.author_id;

-- Reporte 4: Usar una combinación de INNER JOIN y LEFT JOIN para seleccionar todos los libros, sus autores, y la editorial, incluyendo libros que no tienen autores y aquellos sin editorial.
SELECT b.title AS book_title, a.name AS author_name, p.name AS publisher_name
FROM book b
LEFT JOIN book_author ba ON b.book_id = ba.book_id
LEFT JOIN author a ON ba.author_id = a.author_id
LEFT JOIN publisher p ON b.publisher_id = p.publisher_id;

-- Reporte 5: Usar INNER JOIN para seleccionar todos los libros que han sido escritos por más de un autor y mostrar el título del libro junto con los nombres de los autores.
SELECT b.title AS book_title, a.name AS author_name
FROM book b
INNER JOIN book_author ba ON b.book_id = ba.book_id
INNER JOIN author a ON ba.author_id = a.author_id
WHERE b.book_id IN (
    SELECT ba.book_id
    FROM book_author ba
    GROUP BY ba.book_id
    HAVING COUNT(ba.author_id) > 1
);

-- Reporte 6 (Opcional): Usar INNER JOIN, LEFT JOIN, y GROUP BY para seleccionar la editorial que tiene más libros publicados, junto con el número total de libros y los títulos de esos libros.
SELECT p.name AS publisher_name, COUNT(b.book_id) AS total_books, b.title AS book_title
FROM publisher p
INNER JOIN book b ON p.publisher_id = b.publisher_id
WHERE p.publisher_id = (
    SELECT p2.publisher_id
    FROM publisher p2
    INNER JOIN book b2 ON p2.publisher_id = b2.publisher_id
    GROUP BY p2.publisher_id
    ORDER BY COUNT(b2.book_id) DESC
    LIMIT 1
)
GROUP BY p.publisher_id, p.name, b.title
ORDER BY total_books DESC;