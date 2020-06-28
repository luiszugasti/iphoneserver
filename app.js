const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const os = require('os');

//D:\\Videos\\
const dir = process.env.VIDEO;

// SERVE RIGHT TO YOUR DOOR
app.use(express.static(dir));

app.get('/', (res, req) => res.send("Server is up and running."));

app.listen(port, () => console.log(`Example application listening at http://localhost:${port}`));