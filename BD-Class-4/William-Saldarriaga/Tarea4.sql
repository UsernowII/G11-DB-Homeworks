-- Punto 1: Generar Reportes con SELECT
-- Reporte 1: Seleccionar todos los libros publicados por 'Penguin Books'.
SELECT title
FROM book
WHERE publisher_id = (
    SELECT publisher_id
    FROM publisher
    WHERE name = 'Penguin Books'
);

-- Reporte 2: Seleccionar todos los libros publicados después del año 1950.
SELECT title, publication_year
FROM book
WHERE publication_year > 1950;

-- Reporte 3: Seleccionar los nombres de los autores que han escrito libros de género 'Fantasy' utilizando una subconsulta.
SELECT DISTINCT name
FROM author
WHERE author_id IN (
    SELECT author_id
    FROM book_author
    WHERE book_id IN (
        SELECT book_id
        FROM book
        WHERE genre = 'Fantasy'
    )
);

-- Reporte 4: Seleccionar los títulos de los libros escritos por autores cuyo nombre contiene 'J.K.' utilizando una subconsulta.
SELECT title
FROM book
WHERE book_id IN (
    SELECT book_id
    FROM book_author
    WHERE author_id IN (
        SELECT author_id
        FROM author
        WHERE name LIKE '%J.K.%'
    )
);

-- (Opcional) Reporte 5: Utilizando una subconsulta, seleccionar los títulos de los libros escritos por autores británicos.
SELECT title
FROM book
WHERE book_id IN (
    SELECT book_id
    FROM book_author
    WHERE author_id IN (
        SELECT author_id
        FROM author
        WHERE nationality = 'British'
    )
);

-- Punto 2: Modificar Información con UPDATE
-- Actualizar el género del libro '1984' a 'Science Fiction'.
UPDATE book
SET genre = 'Science Fiction'
WHERE title = '1984';

-- Cambiar la nacionalidad de 'Mark Twain' a 'Canadian'.
UPDATE author
SET nationality = 'Canadian'
WHERE Name = 'Mark Twain';

-- Punto 3: Eliminar Información con DELETE
-- Eliminar el libro 'Pride and Prejudice' de la base de datos.
    -- Elimina la relación entre el libro y los autores
    DELETE FROM book_author
    WHERE book_id = (SELECT book_id FROM book WHERE title = 'Pride and Prejudice');

    -- Elimina el libro 
    DELETE FROM book
    WHERE title = 'Pride and Prejudice';

-- Eliminar los autores que no han escrito ningún libro.
    -- Insertar un nuevo autor para prueba
    INSERT INTO author (author_id,name, nationality) 
    VALUES (6,
            'Gabriel Garcia Marquez', 
            'colombiano'); 
    
    -- Eliminar los autores que no han escrito ningún libro
    DELETE 
    FROM author
    WHERE author_id NOT IN (
        SELECT DISTINCT author_id
        FROM book_author
    );