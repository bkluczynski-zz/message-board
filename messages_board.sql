DROP DATABASE IF EXISTS messages_board;
CREATE DATABASE messages_board;

\c messages_board;

CREATE TABLE messages (
  ID SERIAL PRIMARY KEY,
  content VARCHAR,
  score INTEGER
);

INSERT INTO messages (content, score)
  VALUES ('This is a test message', 0);
