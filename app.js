
const express = require('express')
const path = require('node:path')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs');






let userName = "Joelz"; 
let thatData = ""; 

app.get('/', function (req, res) {
    // res.sendFile(path.join(__dirname, "index.html" )); 
    // res.send('Hello ' + userName + ' from Node/Express/Heroku');
    // res.send(`Hello ${userName} from Node/Express/Heroku with Backticks!`)

    res.render('index', 
      { 
        userName: userName
      }
      );

})


app.post("/saveToNode", (req, res) => {
  console.log(req.body);
  console.group(req.body.userName);
  res.render('index', { userName: req.body.userName });

})

app.listen(process.env.PORT || 3000,
  () => console.log("Server is running..."));