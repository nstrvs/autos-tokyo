const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();

app.use(cors());

app.get('/fetch-cars', (req, res) => {
  const ApiKey = process.env.WEBFLOW;
  const url = 'https://api.webflow.com/collections/64c5869d5fc3ada54bf96c88/items';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `Bearer ${ApiKey}`,
    },
  };

  fetch(url, options)
    .then((response) => response.json())
    .then((json) => res.send(json))
    .catch((err) => {
      console.error('error:' + err);
      res.status(500).send({ error: 'An error occurred while fetching data from Webflow' });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});