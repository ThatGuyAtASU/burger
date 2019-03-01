DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOLEAN NOT NULL,
    todaydate TIMESTAMP,
    PRIMARY KEY (id)
);
INSERT INTO burgers (burger_name, devoured)
 VALUES ('Cowboy Burger', false);
INSERT INTO burgers (burger_name, devoured)
VALUES ('Cheeseburger', false);
INSERT INTO burgers (burger_name, devoured)
VALUES ('Hamburgler Combo', false);
