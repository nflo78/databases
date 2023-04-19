CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id integer PRIMARY KEY,
  username text
);

CREATE TABLE rooms (
  id integer PRIMARY KEY,
  roomname text
);

CREATE TABLE messages (
  /* Describe your table here.*/
  message_id integer PRIMARY KEY,
  messageText text,
  user_id integer,
  room_id integer,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (room_id) REFERENCES rooms(id)
);

/* Create other tables and define schemas for them here! */

CREATE TABLE friends (
  count integer PRIMARY KEY,
  user_id integer,
  friend_id integer,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (friend_id) REFERENCES users(id)
);




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

