require('dotenv/config')
const express = require("express");
const app = express();
const port = process.env.PORT || 8081;
const mongoose = require ("mongoose")
const connect = require ('./config/db')

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(port, ()=>console.log(`server is conneted to http://localhost:${port}`))

/* app.get("/About", function (req, res) {
  res.send("About Page");
});

app.listen(port, () => console.log(`Welcome to http://localhost:${port}`));

app.get("/Products", function (req, res) {
  res.send("Products Page");
});

app.get("/Services", function (req, res) {
  res.send("Our Services");
 }); 
*/

connect ()
.then (() => {
  try {

    app.listen(port, () => console.log(`Welcome to http://localhost:${port}`));
 
  } catch (error) {
   
    console.log('cannot connect to the server');
  }
})

.catch ((error) => {
  console.log('Invalid database connection..!', error);
}

)
app.get("/", function (req, res) {
  res.send("app is running");})

 
// npm init -y (dis wud initialize npm and wud create node_modules folder,package.json file and also package-lock.json)
// npm i express ,dis wud create a server
// npm install --save-dev nodemon and do d below in ur script(found in package.json file)
// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "dev":"nodemon index",
//     "start":"node index"
//   },
// remember to require express,use sample from express by searching for express on npmjs.com
// ===============
// We have 4 requests.get,post,delete and update request,which can be summed as crud operations -