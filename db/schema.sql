CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (

	id INT(4) AUTO_INCREMENT NOT NULL PRIMARY KEY,
	burger_name VARCHAR(200) NOT NULL,
	devoured BOOLEAN NOT NULL,
	eaten TIMESTAMP

);

