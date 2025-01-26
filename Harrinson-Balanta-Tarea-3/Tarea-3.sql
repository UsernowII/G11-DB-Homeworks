--TAREA 3 Harrinson Balanra BD6

-- CREACION DE TABLAS
CREATE TABLE Author (
Author_ID INTEGER PRIMARY KEY,
Name VARCHAR(100),
Nationality VARCHAR(50)
);
---
CREATE TABLE Book (
Book_ID INTEGER PRIMARY KEY,
Title VARCHAR(100),
Genre VARCHAR(50),
Publication_Year INTEGER
);
-- sentencia paa relaconar la tabla Publisher
CREATE TABLE Book (
    Book_ID INTEGER PRIMARY KEY,
    Title VARCHAR(100),
    Genre VARCHAR(50),
    Publication_Year INTEGER,
    Publisher_ID INTEGER, 
    FOREIGN KEY (Publisher_ID) REFERENCES Publisher(Publisher_ID) 
);

CREATE TABLE Publisher (
Publisher_ID INTEGER PRIMARY KEY,
Name VARCHAR(100),
Country VARCHAR(50)
);

CREATE TABLE Book_Author (
    Book_ID INTEGER,
    Author_ID INTEGER,
    PRIMARY KEY (Book_ID, Author_ID), 
    FOREIGN KEY (Book_ID) REFERENCES Book(Book_ID),
    FOREIGN KEY (Author_ID) REFERENCES Author(Author_ID)
);

--Insertar datos de ejemplo en las tablas creadas utilizando sentencias INSERT INTO
INSERT INTO Author (Author_ID, Name, Nationality)
VALUES 
(1, 'George Orwell', 'British'),
(2, 'Jane Austen', 'British'),
(3, 'Mark Twain', 'American');
-- 
INSERT INTO Book (Book_ID, Title, Genre, Publication_Year ,  Publisher_ID)
VALUES 
(1, '1984', 'Dystopian', 1949, 1 ),
(2, 'Pride and Prejudice', 'Romance', 1983, 2),
(3, 'Adventures of Huckleberry Finn','Adventure', 1884, 1);

--
INSERT INTO Publisher (Publisher_ID, Name, Country)
VALUES 
(1, 'Penguin Books', 'United Kingdom' ),
(2, 'Oxford University Press', 'United Kingdom');
---
INSERT INTO Book_Author (Book_ID , Author_ID)
VALUES 
(1, 1),
(2, 2),
(3, 3);
-- sisntasis para verificacion de insercion de datos 
SELECT * FROM Publisher;
SELECT * FROM author;
SELECT * FROM Book_Author;
SELECT * FROM Book;