const express = require('express');
const app = express();
const fs = require('fs');

let port = process.argv[2];


app.get('/books', (req, res) => {
    console.log(req);
    let file = process.argv[3];
    fs.readFile(file, (e, data) => {
        if(e) {
            return res.sendStatus(500)
        }
        try {
            books = JSON.parse(data)
        } catch (e) {
            res.sendStatus(500)
        }
        res.json(books)
    })
})
app.listen(port)
