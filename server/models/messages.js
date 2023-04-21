var db = require('../db');

module.exports = {
  // connect

  getAll: function (callback) {
    var queryStr = "SELECT messages.message_id, messages.messageText, messages.roomname FROM messages \
                    left outer join users on (messages.userid = users.id) \
                    order by messages.message_id desc;";
    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      };
    })
  }, // a function which produces all the messages
  create: function (params, callback) {
    var queryStr = "INSERT INTO messages(messageText, userid, roomname) \
                    values (?, (SELECT id FROM users WHERE username = ? limit 1), ?)";
    var queryStr2 = "INSERT INTO users(username) VALUES (?)"
    db.query(queryStr, params, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
    db.query(queryStr2, [params[1]], (err, results) => {});
  } // a function which can be used to insert a message into the database
  // end connection
};


// db.query()