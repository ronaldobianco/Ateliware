require('dotenv').config()
const express = require('express');

const app = express();

app.use(express.static('./dist/ateliware'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/ateliware/'}),
);

app.listen(process.env.PORT || 8080);