const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('src/ateliware'));
app.get('/*', function(req,res) {
res.sendFile(path.join('src/ateliware/index.html'));});
app.listen(process.env.PORT || 8080);