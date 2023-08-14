const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const ApiKey = process.env.WEBFLOW;

router.get('/fetch-cars', (req, res) => {
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
    .then((json) => {
      res.json(json); // Send the JSON response to the client
    })
    .catch((err) => {
      console.error('error:', err);
      res.status(500).json({ error: 'An error occurred while fetching cars' });
    });
});

module.exports = router;
