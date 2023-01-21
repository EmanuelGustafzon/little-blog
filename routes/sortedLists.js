const express = require('express')
const { json } = require('express/lib/response')
const res = require('express/lib/response')
const run = require('nodemon/lib/monitor/run')
const sortedList = require('../models/sortedList')
const sortedLists = require('../models/sortedList')
const router = express.Router()
const List = require('../models/sortedList')

// routes

router.post('/weknowit', async (req, res) => {
    try {
      let clientList = await req.body.list
      num = req.body.list
      const soList = sortNumbers(num)
      
      const saveList = new sortedList({
        list: soList
      }) 
      try {
          await saveList.save()
          res.status(200).json(saveList)
      } catch (err){
        res.json(err)
      }
    } catch (err) {
      res.json(err)
    }
  })


function sortNumbers (num) {
    const sortedArray = []
    for (let i = 0; i < num.length; i++) {
      if(num[i] > 0) {
        sortedArray.push(num[i])
      }
    }
    let uniqueArray = [...new Set(sortedArray)]

    return uniqueArray
  }



  module.exports = router
