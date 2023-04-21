CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id integer NOT NULL AUTO_INCREMENT,
  username varchar(20) UNIQUE,
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id integer PRIMARY KEY,
  roomname text
);

CREATE TABLE messages (
  /* Describe your table here.*/
  message_id integer NOT NULL AUTO_INCREMENT,
  messageText text,
  userid integer,
  roomname text,
  PRIMARY KEY (message_id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

