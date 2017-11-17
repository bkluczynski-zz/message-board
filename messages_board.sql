DROP DATABASE IF EXISTS messages_board;
CREATE DATABASE messages_board;

\c messages_board;

CREATE TABLE messages (
  ID SERIAL PRIMARY KEY,
  content VARCHAR,
  score INTEGER,
  timestamps TIMESTAMP
);
