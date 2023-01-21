// import express
const express = require('express')
const app = express()

// import mongoose and get key from dotenv
const mongoose = require('mongoose');
const run = require('nodemon/lib/monitor/run');
const sortedList = require('./models/sortedList');
require('dotenv').config()
const URL = process.env.mongoDBURL

// connect to database
mongoose.set('strictQuery', true);
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(URL);
}


// make application being able to handle json data
app.use(express.json())

// Models
const List = require('./models/sortedList')

// Routes
const sortedListsRouter = require('./routes/sortedLists')
app.use('/sortedlists', sortedListsRouter)


// Add port in terminal with export PORT=port
const port = process.env.PORT || 3000; 
app.listen(port, () => console.log('server started'))

go()
async function go() {
  try{
    let list = await List.find()
    console.log(list)
  } catch (err) {
    console.log(err)
  }
}





