--Punto 1: Generar Reportes con SELECT

--Reporte 1: Seleccionar todos los libros publicados por 'Penguin Books'.
SELECT  * FROM Book WHERE Publisher_ID =1
--Reporte 2: Seleccionar todos los libros publicados después del año 1950.
SELECT * FROM Book WHERE Publication_Year > 1950;
--Reporte 3: Seleccionar los nombres de los autores que han escrito libros de género 'Romance' utilizando una subconsulta.
SELECT Name FROM Author WHERE Author_ID IN (SELECT Author_ID FROM Book_Author 
    WHERE Book_ID IN (SELECT Book_ID FROM Book WHERE Genre = 'Romance')
);

--Reporte 4: Seleccionar los títulos de los libros escritos por autores cuyo nombre contiene 'J.K.' utilizando una subconsulta.
SELECT Title FROM Book WHERE Book_ID IN (     SELECT Book_ID     FROM Book_Author
    WHERE Author_ID IN (SELECT Author_ID FROM Author WHERE Name LIKE '%JK%')
);
---Opcional) Reporte 5: Utilizando una subconsulta, seleccionar los títulos de los libros escritos por autores británicos.
SELECT Title FROM Book WHERE Book_ID IN (SELECT Book_ID FROM Book_Author
    WHERE Author_ID IN (SELECT Author_ID FROM Author
        WHERE Nationality = 'British'
    )
);
--Punto 2: Modificar Información con UPDATE

--Actualizar el género del libro '1984' a 'Science Fiction'.
UPDATE Book SET genre = 'Science Fiction'
WHERE title = '1984';
--Cambiar la nacionalidad de 'Mark Twain' a 'Canadian'.
UPDATE author SET nationality = 'Canadian'
WHERE name = 'Mark Twain';
--Punto 3: Eliminar Información con DELETE

--Eliminar el libro 'Pride and Prejudice' de la base de datos.
DELETE FROM Book WHERE Title = 'Pride and Prejudice';
--Eliminar los autores que no han escrito ningún libro.
DELETE FROM Author WHERE Author_ID NOT IN (SELECT DISTINCT Author_ID
    FROM Book_Author);

-- sisntasis para verificacion de datos 
SELECT * FROM Publisher;
SELECT * FROM author;
SELECT * FROM Book_Author;
SELECT * FROM Book;