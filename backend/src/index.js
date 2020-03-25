const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

// Converter json par um objeto javascript 
app.use(express.json());
app.use(routes);
app.listen(3333);