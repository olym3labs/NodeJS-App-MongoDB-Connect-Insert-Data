# NodeJS-App-MongoDB-Connect-Insert-Data
Tutorial on Connecting from Node JS App to MongoDB Online and Locally


1-> npm init


2-> create file: index.js


3-> console.log("Hello, World!");


4-> expressjs.com -> https://expressjs.com/en/starter/installing.html


5-> npm install express


6-> Update index.js with code below:

const express = require('express')

const app = express()

const port = 8000

app.get('/', (req, res) => {

  res.send('Hello World!')

})

app.listen(port, () => {

  console.log(`Example app listening on port ${port}`)

})

7-> mongodb.com

8-> Db Connect

mongodb+srv://username:passw@cluster0.au6v5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

9-> https://mongoosejs.com/

npm install mongoose --save

10-> const mongoose = require('mongoose');

