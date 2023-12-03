var express = require('express');
var app = express();


//  node index.js to run file
// Routes
// app.get('/', function (req, res) {
// res.send("Welocme to GeeksforGeeks! GET METHOD");
// });

// POSt directly didnot hit post but get is used for this
app.post('/', function (req, res) {
res.send("Welocme to GeeksforGeeks! POST METHOD");
});


app.get('/about', function (req, res) {
res.send("About Page");
});
app.listen(5000);