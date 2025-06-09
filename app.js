const express = require('express');
const cors = require('cors');
const app = express();
const rotasFilme = require('./routes/filmeRoutes');

app.use(cors());
app.use(express.json());
app.use(rotasFilme);

module.exports = app;
