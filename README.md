# Message Board Project - WiP

An anonymous message board built on Node on the backend, with a simple front-end.

App in the current state allows an anonymous user to view the board of messages, create a message and react to a message by either up-voting or down-voting the message.

The backend has been built on Node/Express, PSQL with pg-promise library to handle execution of DB query. The frontend is a standard react app built with create-react-app having webpack and babel-preset configured a priori. Frontend app makes api calls to localhost:3000 which is being proxied to the server/backend host running on localhost:3001 where api endpoints are exposed.

To start the app follow the instruction below: 

- clone this repository
- in the root directory install all dependencies for backend `npm install`
- setup your database and table with one message as an example `psql -f db/messages_board.sql`
- run the app `npm start`
- open a new tab on your terminal and `cd client`
- install frontend dependencies `npm install`
- run the frontend app with `npm start`
- visit the `http://localhost:3000` to see and play with the app


To execute tests go to the client directory, make sure both of your servers are running and type : 
- `npm run test` to run all unit tests
- `npm run e2e-tests` to run end to end integration tests

