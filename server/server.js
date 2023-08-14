const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('../dist'));
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
