const express = require('express');
const app = express();

let port = process.argv[2];

app.get('/search', (req, res) => {
    let obj = req.query;
    console.log(obj);
    res.send(obj)
})
app.listen(port)
