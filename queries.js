//using bluebird as a faster alternative to es6 promises
const promise = require('bluebird');

//initializing with blue bird promise
const options = {
  promiseLab: promise
}
//options are required
const pgp = require('pg-promise')(options);
const connectionString = 'postgres://localhost:5432/messages';
const db = pgp(connectionString);

getMessages = (req, res, next) => {
  /*Query Result Mask any returns a promise object, we don't expect
  any number of results */
  db.any('select * from messages')
    .then((data) => {
      res.status(200)
        .json({
          status:'success',
          data: data,
          message: 'Retrieved all messages'
        });
    })
    .catch((err) => {
      return next(err);
    })
}

module.exports = {
  getMessages: getMessages,
}
