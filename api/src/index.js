const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const app = express();
const {connectDb} = require('./helpers/db');
const {host, port, db, authApiUrl} = require('./configuration');
const postSchema = new mongoose.Schema({
  name: String
});
const Post = mongoose.model('Post', postSchema);

const startServer = () => {
  app.listen(port, () => {
    console.log(`Started api on port ${port}`);
    console.log(`Started api on host ${host}`);
    console.log(`Our database: ${db}`);
    // const silence = new Post({name: 'Silence'});
    // silence.save((err, savedSilence) => {
    //   if (err) {
    //     console.log(err);
    //   }
    //   console.log('savedSilence: ', savedSilence);
    // });
    // console.log(silence.name);
  });
};
app.get('/test', (req, res) => {
  res.send('API WORKS!');
});

app.get('/testwithcurrentuser', (req, res) => {
  axios.get(`${authApiUrl}/currentUser`)
    .then(response => {
      res.json({
        currentUser: response.data
      })
    })
});

connectDb()
  .on('error', console.log)
  .on('disconnected', connectDb)
  .once('open', startServer);
