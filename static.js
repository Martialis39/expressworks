// ======================== REQUIRE
const express = require('express');
const app = express();
let Port = process.argv[2];
let file = process.argv[3];
// ========================= THIS IS HOW YOU CALL STATIC MIDDLEWARE
// ========================= IF IN PUBLIC, PASS PUBLIC TO USE. HERE THE MW IS PROVIDED AS ARGV3.
app.use(express.static(file))

app.listen(Port);
