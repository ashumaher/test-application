const express = require("express");
const compression = require('compression');
const path = require("path");
const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, "/")));

app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000);

console.log('Started');