'use strict';

const express = require('express');

// Constants
const PORT = 8081;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/reg',(req, res) => {

  res.send('Search');
});


app.put('/update',(req, res) => {

  res.send('UPDATE WORK');
});

app.delete('/reg',(req, res) => {

  res.send('Search');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});