DROP DATABASE IF EXISTS messages_board;
CREATE DATABASE messages_board;

\c messages_board;

CREATE TABLE messages (
  ID SERIAL PRIMARY KEY,
  content VARCHAR,
  score INTEGER,
  timestamps TIMESTAMP
);

INSERT INTO messages (content, score, timestamps)
  VALUES ('This is a test message', 0, '2017-11-17 17:43:20');
