const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connections');
//make the stylesheet available to the client
const path = require('path');
//add app's template engine
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//express.static is a built in express middleware function that can take all of the contents of a folder andserve them as static assets
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(routes);

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turn on connection to db and server
//force: true basically works like DROP TABLE IF EXISTS it alows the table to be overwritten and re-created
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});