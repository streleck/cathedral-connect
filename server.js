const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');
const User = require('./models/user');

const app = express();

const routes = require('./routes');

app.set('view engine', 'ejs');
app.set('views', 'public/views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

var PORT = process.env.PORT || 3000;
app.listen(PORT);
