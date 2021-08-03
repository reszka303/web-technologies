Zatwierdzanie zmian automatycznie:
set autocommit=1

Wyłączenie zmian zatwierdzanych automatycznie
set autocommit=0;

Wiele do wielu

CREATE DATABASE course_platform COLLATE utf8mb4_polish_ci;

CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(30) UNIQUE NOT NULL,
    email VARCHAR(40) UNIQUE NOT NULL,
    password VARCHAR(40) NOT NULL
);

CREATE TABLE course (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) UNIQUE NOT NULL,
    description VARCHAR(2000)
);

INSERT INTO user
(username, email, password)
VALUES
    ('jankowal', 'jan@kowalski.com', 'jan1234'),
    ('martita', 'martita@mymail.com', 'marta2001210'),
    ('peter99', 'don.petro@supermail.com', 'puszek');

INSERT INTO course
(name, description)
VALUES
    ('Kurs Java', 'Kurs programowania przeznaczony dla początkujących i nieco bardziej zaawansowanych.'),
    ('Kurs Python', 'Naucz się języka Python i wykorzystaj go do programowania sztucznej inteligencji i zaawansowanych obliczeń.'),
    ('Kurs JavaScript', 'Poznaj język JavaScript i naucz się tworzyć piękne, dynamiczne strony internetowe, które podbiją świat.');


CREATE TABLE course_category (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    description VARCHAR(200)
);

ALTER TABLE course
    ADD category_id INT,
ADD FOREIGN KEY (category_id) REFERENCES course_category(id);

UPDATE course SET category_id = 1 WHERE id = 3;
UPDATE course SET category_id = 2 WHERE id IN (1,2);

CREATE TABLE user_details (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT UNIQUE NOT NULL,
    telephone VARCHAR(11),
    city VARCHAR(30),
    FOREIGN KEY (user_id) REFERENCES user(id)
);

INSERT INTO user_details
    (user_id, telephone, city)
VALUES
    (2, '777 888 999', 'Warszawa');
