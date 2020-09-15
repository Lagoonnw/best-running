const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {connectDb} = require('./helpers/db');
const {port} = require('./configuration');
const workoutRouts = require('./routes/workout');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/workouts', workoutRouts);

const startServer = () => {
  app.listen(port, () => {
    console.log(`Started api on port ${port}`);
  });
};

connectDb()
  .on('error', console.log)
  .on('disconnected', connectDb)
  .once('open', startServer);
