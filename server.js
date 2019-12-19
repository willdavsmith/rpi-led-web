require('dotenv').config();
var express = require('express');
var cors = require('cors');
var app = express();
const { exec } = require('child_process');

app.use(cors());
app.use(express.static('public'));

app.get('/', function (req, res) {
   res.send('rpi-led-web');
});

app.get('/api/:r/:g/:b', function (req, res) {
  var r = req.params['r'];
  var g = req.params['g'];
  var b = req.params['b'];
  exec(`pigs p 17 ${r}; pigs p 22 ${g}; pigs p 24 ${b};`, (err, stdout, stderr) => {
    if (err) {
      console.error(err)
    } else {
     console.log(`stdout: ${stdout}`);
     console.log(`stderr: ${stderr}`);
    }
  });
  res.send('Updated');
});

var server = app.listen(process.env.PORT, function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("Example app listening at http://%s:%s", host, port);
});

