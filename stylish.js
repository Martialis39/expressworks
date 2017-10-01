const express = require('express');
const app = express();
const stylus = require('stylus');
let port = process.argv[2];

app.use(stylus.middleware(process.argv[3]) || public) 
app.use(express.static(process.argv[3]) || public)

app.listen(port)
