var path = require('path');
const express = require('express');
var cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.listen(8081, function () {
  console.log('Server running on 8081');
});
