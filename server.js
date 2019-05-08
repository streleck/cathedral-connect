const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');
const User = require('./models/user');

const app = express();

const routes = require('./routes');

app.set('view engine', 'ejs');
app.set('views', 'views');

var PORT = process.env.PORT || 3000;
app.listen(PORT);
