const express = require('express')
const app = express()
const path = require('path')
const Routes = require('./routes/index')
var bodyParser = require('body-parser');

app.set('port',process.env.PORT || 4200)

//require('database')

app.listen(app.get('port'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.resolve(__dirname, 'public')));

app.use('/api', Routes);

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });

