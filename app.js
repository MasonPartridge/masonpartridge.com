const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

  app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`)
  });