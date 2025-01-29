--Punto 1: Generar Reportes con JOINs
--Reporte 1: Usar INNER JOIN para seleccionar los títulos de los libros junto con el nombre de su editorial.
SELECT h.Title, i.Name AS Publisher
FROM Book h INNER JOIN Publisher i ON h.Publisher_ID = i.Publisher_ID;
--Reporte 2: Usar LEFT JOIN para seleccionar todos los autores y los títulos de los libros que han escrito, incluyendo autores que no han escrito ningún libro.
SELECT h.Name AS Author, i.Title AS Book FROM Author h LEFT JOIN Book_Author ih 
ON h.Author_ID = ih.Author_ID LEFT JOIN Book i ON ih.Book_ID = i.Book_ID;

--Reporte 3: Usar RIGHT JOIN para seleccionar todos los libros y los nombres de los autores que los han escrito, incluyendo libros que no tienen autores asociados.
SELECT h.Title AS Book, i.Name AS Author
FROM Author i RIGHT JOIN Book_Author hi ON i.Author_ID = hi.Author_ID
RIGHT JOIN Book h ON hi.Book_ID = h.Book_ID;

--Reporte 4: Usar una combinación de INNER JOIN y LEFT JOIN para seleccionar todos los libros, sus autores, y la editorial, incluyendo libros que no tienen autores y aquellos sin editorial.
SELECT h.Title AS Book, i.Name AS Author, j.Name AS Publisher 
FROM Book h LEFT JOIN Book_Author hi ON h.Book_ID = hi.Book_ID
LEFT JOIN Author i ON hi.Author_ID = i.Author_ID 
LEFT JOIN Publisher j ON h.Publisher_ID = j.Publisher_ID;

--Reporte 5: Usar INNER JOIN para seleccionar todos los libros que han sido escritos por más de un autor y mostrar el título del libro junto con los nombres de los autores.
SELECT h.Title AS Book, j.Name AS Author
FROM Book h INNER JOIN Book_Author hj ON h.Book_ID = hj.Book_ID
INNER JOIN Author j ON hj.Author_ID = j.Author_ID
WHERE h.Book_ID IN (     SELECT Book_ID
    FROM Book_Author GROUP BY Book_ID  HAVING COUNT(Author_ID) 
);
