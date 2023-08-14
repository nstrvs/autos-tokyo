const fetch = require('node-fetch');

const ApiKey = process.env.WEBFLOW;

module.exports = (req, res) => {
  
  res.setHeader('Access-Control-Allow-Origin', 'https://autostokyo.webflow.io');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

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
      res.json(json);
    })
    .catch((err) => {
      console.error('error:', err);
      res.status(500).json({ error: 'An error occurred while fetching cars' });
    });
};
