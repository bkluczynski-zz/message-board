//using bluebird as a faster alternative to es6 promises
const promise = require('bluebird');

//initializing with blue bird promise
const options = {
  promiseLib: promise
}
//options are required
const pgp = require('pg-promise')(options);
const connectionString = 'postgres://localhost:5432/messages_board';
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

createMessage = (req, res, next) => {
  //don't expect any results, therefore using none
  req.body.score = parseInt(req.body.score);
  db.none('insert into messages(content, score)' + 'values(${content}, ${score})', req.body)
    .then(() => {
      res.status(200)
        .json({
          status: 'success',
          message: 'created one message'
        });
    })
    .catch((err) => {
      return next(err);
    });
}

module.exports = {
  getMessages: getMessages,
  createMessage: createMessage,
}
