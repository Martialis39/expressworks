const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
//======================
let port = process.argv[2];


app.use(bodyParser.json());
// == Use the below to parse forms and the above to parse json
app.use(bodyParser.urlencoded({
  extended: true
}))
app.post('/form', (req, res) => {

  let r = req.body.str.split('').reverse().join('');
  res.send(r)
})

app.listen(port)
