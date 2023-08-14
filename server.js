const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const ApiKey = process.env.WEBFLOW;
const app = express();
const port = process.env.PORT || 3000;

app.get('/fetch-cars', (req, res) => {
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
    .catch((err) => console.error('error:' + err));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
