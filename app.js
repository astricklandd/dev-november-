const express = require('express')
const path = require('node:path')
const app = express()

app.set("niew engine", "ejs") //npm i ejs https://www.npmjs.com/package/ejs

app.get('/', function (req, res) { //this line is an endpoint
  // res.send('Hello. This is my new coding project')

  // there is also a app.post function, but it is different than app.get
  // ... below is how to postan html file called index.html 
  res.sendFile(
   path.join(__dirname, "index.html"));
    // we searched this https://www.npmjs.com/package/nodemon after typing above line 
    

  // res.send('Hello ' + userName + 'from Node/Express/Heroku.');
  // res.send(`Hello ${userName} from Node/Express/Heroku with backticks!`);
  // The two lines above cause an error

  // BELOW is where we ended, mine did not work. Code from https://www.topcoder.com/thrive/articles/using-ejs-template-engine-with-express-js
  // res.render('index', 
  // {thatData}'
  // userNameEJS: userNameExpress');

})

app.listen(process.env.PORT ||3000,
     console.log("Server is running"));  

