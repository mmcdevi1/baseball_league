const express = require('express');
// const keys = require('./config/keys');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');

// Require Models
const { db } = require('./models');

// Declare app
const app = express();

// Setup Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Require Routes
app.use('/api', require('./routes'));


if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it does not recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

db
  .sync({ force: false })
  .then(() => {
    console.log('[SUCCESS]: Connection to database succeeded.')

    app.listen(process.env.PORT || 5000, function(){
      console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
    });
  })






























