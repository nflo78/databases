var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, data) => {
      if (err) {
        console.log(err)
      } else {
        res.json(data)
      }
    })
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    console.log(req.body);
    var params = [ req.body.message, req.body.username, req.body.roomname ]
    models.messages.create(params, (err, data) => {
      if (err) {
        console.log(err)
      }
      res.json(data);
    })
  } // a function which handles posting a message to the database
};
