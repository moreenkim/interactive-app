const mongodb = require('mongodb');

const connectionString =
  'mongodb+srv://todoAppUser:todoApp@cluster0.meydx.mongodb.net/InteractiveApp?retryWrites=true&w=majority';
mongodb.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, client) {
    module.exports = client.db();
    const app = require('./app');

    app.listen(3001);
  }
);
