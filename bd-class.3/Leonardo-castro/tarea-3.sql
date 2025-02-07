CREATE TABLE Author (
  Author_ID INT PRIMARY KEY,
  Name VARCHAR(100) NOT NULL,
  Nationality VARCHAR(50)
);

CREATE TABLE Publisher (
  Publisher_ID INT PRIMARY KEY,
  Name VARCHAR(100) NOT NULL,
  Country VARCHAR(50)
);

CREATE TABLE Book (
  Book_ID INT PRIMARY KEY,
  Title VARCHAR(100) NOT NULL,
  Genre VARCHAR(50),
  Publication_Year INT,
  Publisher_ID INT,
  FOREIGN KEY (Publisher_ID) REFERENCES Publisher(Publisher_ID)
);

CREATE TABLE Book_Author (
  Book_ID INT,
  Author_ID INT,
  PRIMARY KEY (Book_ID, Author_ID),
  FOREIGN KEY (Book_ID) REFERENCES Book(Book_ID),
  FOREIGN KEY (Author_ID) REFERENCES Author(Author_ID)
);







INSERT INTO Author (Author_ID, Name, Nationality) VALUES
(1, 'George Orwell', 'Británico'),
(2, 'Jane Austen', 'Británico'),
(3, 'Marcos Twain', 'Americano');

INSERT INTO Publisher (Publisher_ID, Name, Country) VALUES
(1, 'Libros de pingüinos', 'Reino Unido'),
(2, 'Prensa de la Universidad de Oxford', 'Reino Unido');

INSERT INTO Book (Book_ID, Title, Genre, Publication_Year, Publisher_ID) VALUES
(1, '1984', 'Distópica', 1949, 1),
(2, 'Orgullo y prejuicio', 'Romance', 1813, 2),
(3, 'Las aventuras de Huckleberry Finn', 'Aventura', 1884, 1);

INSERT INTO Book_Author (Book_ID, Author_ID) VALUES
(1, 1),
(2, 2),
(3, 3);
