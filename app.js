const express = require('express');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const mysql = require('mysql2');

require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


//static files
app.use(express.static('public'));

//template engine
const handlebars = exphbs.create({extname: '.hbs'});
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');







const routes = require('./server/routes/student');
app.use('/', routes);


//Listen port
app.listen(port,()=>{
    console.log('Server is running on port ' + port);
})