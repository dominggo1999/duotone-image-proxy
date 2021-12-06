const proxy = require('./server');
const express = require('express');
const port = 4000;

const app = express();
app.use('/', proxy());


app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});