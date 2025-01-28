-- Autores
CREATE TABLE Author (
    Author_ID SERIAL PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Nationality VARCHAR(50) NOT NULL
);

-- Editoriales
CREATE TABLE Publisher (
    Publisher_ID SERIAL PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Country VARCHAR(50) NOT NULL
);

-- Libros
CREATE TABLE Book (
    Book_ID SERIAL PRIMARY KEY,
    Title VARCHAR(100) NOT NULL,
    Genre VARCHAR(50) NOT NULL,
    Publication_Year INTEGER NOT NULL,
    Publisher_ID INTEGER NOT NULL,
    FOREIGN KEY (Publisher_ID) REFERENCES Publisher(Publisher_ID)
);

-- Pivote libros - autores
CREATE TABLE Book_Author (
    Book_ID INTEGER NOT NULL,
    Author_ID INTEGER NOT NULL,
    PRIMARY KEY (Book_ID, Author_ID),
    FOREIGN KEY (Book_ID) REFERENCES Book(Book_ID),
    FOREIGN KEY (Author_ID) REFERENCES Author(Author_ID)
);