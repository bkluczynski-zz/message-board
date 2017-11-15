//using bluebird as a faster alternative to es6 promises
const promise = require('bluebird');

//initializing with blue bird promise
const options = {
  promiseLab: promise
}
//options are required
const pgp = require('pg-promise')(options);
const connectionString = 'postgres://localhost:5432/messages';
