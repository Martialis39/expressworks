const express = require('express');
const app = express();
const crypto = require('crypto');
let port = process.argv[2];

app.put('/message/:id', (req, res) => {
    // GET THE ID
    let id = req.params.id;
    // AS PER THE EXERCISE HINTS
    let c = crypto.createHash('sha1')
                    .update(new Date().toDateString() + id)
                    .digest('hex')
    res.send(c)
})
app.listen(port)
