const express = require('express');
const axios = require('axios');
const app = express();
const {connectDb} = require('./helpers/db');
const {host, port, db, apiUrl} = require('./configuration');

const startServer = () => {
  app.listen(port, () => {
    console.log(`Started auth on port ${port}`);
    console.log(`Started auth on host ${host}`);
    console.log(`Our auth database: ${db}`);
  });
};
app.get('/test', (req, res) => {
  res.send('AUTH WORKS!')
});

app.get('/testwithapidata', (req, res) => {
  axios.get(`${apiUrl}/testapidata`).then(response => {
    res.json({
      testapidata: response.data.testapidata
    });
  });
});

app.get('/api/currentUser', (req, res) => {
  res.json({
    id: '1234',
    email: 'foo@gmail.com'
  })
});

connectDb()
  .on('error', console.log)
  .on('disconnected', connectDb)
  .once('open', startServer);
