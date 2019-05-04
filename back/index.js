const express = require('express')
const app = express()
const path = require('path')

app.set('port',process.env.PORT || 4200)

//require('database')

app.listen(app.get('port'))


app.use(express.static(path.resolve(__dirname, 'public')));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });