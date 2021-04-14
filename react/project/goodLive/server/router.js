const express = require('express');
const router = express.Router();
const homehotData = require('./data/home/homehot')

router.get('/homehot1',(req,res)=>{
  res.send(homehotData.hot1)
})

router.get('/homehot2', (req, res) => {
  res.send(homehotData.hot2)
})

module.exports = router;