const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', express.static('public'));

app.get('/personal-budget/src/app/dashboard', (req, res) => {
    //do something
});

app.post('/personal-budget/src/app/dashboard', (req, res) => {
    //do something
});

//post request for mongodb
app.post('/personal-budget/src/app/dashboard', (req, res) => {

    //opens a connection with mongodb
    MongoClient.connect(url).then(client => {
  
      //closes the connection to mongodb 
      client.close();
  
    }).catch(err => {

      console.log('error connecting to mongodb', err);
  
    });
  });

app.listen(3000, () => { console.log('App is listening on port 3000'); });