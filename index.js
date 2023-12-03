var express = require('express');
var app = express();
const port = 5001; // Define the port

//  node index.js to run file
// Routes
app.get('/', function (req, res) {
res.send("Welocme to GeeksforGeeks!");
});

// POSt directly didnot hit post but get is used for this
app.post('/', function (req, res) {
res.send("Welocme to GeeksforGeeks! POST METHOD");
});


app.get('/about', function (req, res) {
res.send("About Page");
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })