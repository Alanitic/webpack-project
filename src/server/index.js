const express = require('express');

const app = express();

app.use(express.json());

app.listen(8081, function () {
  console.log('Server running on 8081');
});
