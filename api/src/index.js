const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {connectDb} = require('./helpers/db');
const {port, db} = require('./configuration');
const workoutRouts = require('./routes/workout');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/workouts', workoutRouts);

const startServer = () => {
  app.listen(port, () => {
    console.log(`Started api on port ${port}`);
    console.log(`Our database: ${db}`);
  });
};
// app.get('/test', (req, res) => {
//   res.send('API WORKS!');
// });
//
// app.get('/testwithcurrentuser', (req, res) => {
//   axios.get(`${authApiUrl}/currentUser`)
//     .then(response => {
//       res.json({
//         currentUser: response.data
//       })
//     })
// });

// app.get('/api/testapidata', (req, res) => {
//   res.json({
//     testapidata: true
//   });
// });

connectDb()
  .on('error', console.log)
  .on('disconnected', connectDb)
  .once('open', startServer);
