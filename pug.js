const express = require('express');
const app = express();
const path = require('path');
//======================
let port = process.argv[2];
//============== pug file as supplied by expressworks
let v = process.argv[3]
// ==== current date
let currentDate = new Date().toDateString();
// set view engine
app.set('view engine', 'pug')
// set path
app.set('views', path.join(__dirname, 'templates'))
// create the route
app.get('/home', (req, res) => {
    res.render(v, {date: currentDate})
})

app.listen(port);
