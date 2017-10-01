const express = require('express');

let app = express();

app.get('/home', (req, res) => {
  res.end("Hello World!")
})
let PORT = process.argv[2];
app.listen(PORT)
