CREATE DATABASE vod CHARACTER SET utf8mb4 COLLATE utf8mb4_polish_ci;

CREATE TABLE movie
(
    id                INT           NOT NULL AUTO_INCREMENT,
    title             VARCHAR(100)  NOT NULL,
    description       VARCHAR(2000) NULL    ,
    rating            INT           NOT NULL,
    year              INT           NOT NULL,
    movie_category_id INT           NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE movie_category
(
    id   INT         NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE subscription
(
    id         INT      NOT NULL AUTO_INCREMENT,
    start_date DATETIME NOT NULL,
    end_date   DATETIME NOT NULL,
    user_id    INT      NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE user
(
    id            INT         NOT NULL AUTO_INCREMENT,
    name          VARCHAR(45) NOT NULL,
    email         VARCHAR(45) NOT NULL,
    password      VARCHAR(45) NOT NULL,
    last_movie_id INT         NULL    ,
    PRIMARY KEY (id)
);

ALTER TABLE user
    ADD CONSTRAINT UQ_email UNIQUE (email);

CREATE TABLE watch_progress
(
    user_id        INT NOT NULL,
    movie_id       INT NOT NULL,
    watch_progress INT NOT NULL,
    PRIMARY KEY (user_id, movie_id)
);

ALTER TABLE subscription
    ADD CONSTRAINT FK_user_TO_subscription
        FOREIGN KEY (user_id)
            REFERENCES user (id);

ALTER TABLE movie
    ADD CONSTRAINT FK_movie_category_TO_movie
        FOREIGN KEY (movie_category_id)
            REFERENCES movie_category (id);

ALTER TABLE watch_progress
    ADD CONSTRAINT FK_user_TO_watch_progress
        FOREIGN KEY (user_id)
            REFERENCES user (id);

ALTER TABLE watch_progress
    ADD CONSTRAINT FK_movie_TO_watch_progress
        FOREIGN KEY (movie_id)
            REFERENCES movie (id);

ALTER TABLE user
    ADD CONSTRAINT FK_movie_TO_user
        FOREIGN KEY (last_movie_id)
            REFERENCES movie (id);
