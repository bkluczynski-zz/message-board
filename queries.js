/*jshint esversion: 6 */

//using bluebird as a faster alternative to es6 promises
const promise = require('bluebird');

//initializing with blue bird promise
const options = {
  promiseLib: promise
};
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
    });
};

createMessage = (req, res, next) => {
  //don't expect any results, therefore using none
  req.body.score = parseInt(req.body.score);
  db.none('insert into messages(content, score, timestamps)' + 'values(${content}, ${score}, ${timestamps})', req.body)
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
};

vote = (req, res, next) => {
  let messageId = parseInt(req.params.id);
  let option = req.body.options;
  //task takes a multiple query
  db.task(t => {
    return t.one ('select * from messages where id = $1', messageId)
          .then(data => {
            let score = data.score;
            parseInt(score);
            switch(option){
              case "upVote":
              score = score + 1;
              break;
              case "downVote":
              score = score - 1;
              break;
            }
            return t.none('update messages set score=$1 where id=$2',[ score, messageId]);
          });
        })
        .then(() => {
          res.status(200)
          .json({
            status: 'success',
            message: 'updated message'
          });
        })
        .catch((err) => {
          return next(err);
        });
      };

module.exports = {
  getMessages: getMessages,
  createMessage: createMessage,
  vote:vote,
};
