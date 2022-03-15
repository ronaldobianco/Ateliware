const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/ateliware'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/ateliware/index.html'));});
app.listen(process.env.PORT || 8080);