const dotenv = require('dotenv');
dotenv.config();

var path = require('path');
const express = require('express');
var cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static('dist'));

const serverReq = require('./server-request');

const sentimentUrl = 'https://api.meaningcloud.com/sentiment-2.1';

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

app.post('/sentiment', (req, res) => {
  const { text } = req.body;
  if (text) {
    const fullUrl = `${sentimentUrl}?key=${process.env.API_KEY}&lang=en&model=general&txt=${text}`;
    serverReq.postRequest(fullUrl).then((response) => {
      const { confidence, subjectivity, irony, sentence_list } = response.data;
      res.status(200).send({ confidence, subjectivity, irony, sentence_list });
    });
  } else {
    res.status(400).send('No text to analyze');
  }
});

app.listen(8081, function () {
  console.log('Server running on 8081');
});
