-- Insertar datos en la tabla de Autores
INSERT INTO Author (Name, Nationality) 
VALUES ('George Orwell', 'British'),
       ('Jane Austen', 'British'),
       ('Mark Twain', 'American');

-- Insertar datos en la tabla de Editoriales
INSERT INTO Publisher (Name, Country) 
VALUES ('Penguin Books', 'United Kingdom'),
       ('Oxford University Press', 'United Kingdom');

-- Insertar datos en la tabla de Libros
INSERT INTO Book (Title, Genre, Publication_Year, Publisher_ID) 
VALUES ('1984', 'Dystopian', 1949, 1),
       ('Pride and Prejudice', 'Romance', 1813, 2),
       ('Adventures of Huckleberry Finn', 'Adventure', 1884, 1);

-- Insertar datos en la tabla Pivote libros - autores
INSERT INTO Book_Author (Book_ID, Author_ID) 
VALUES (1, 1),
       (2, 2),
       (3, 3);