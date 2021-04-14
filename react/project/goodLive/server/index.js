const express = require('express')
const app = express();
const router = require('./router')

app.use('/api', router);

app.listen(3200, ()=>{
  console.log('server run at port 3200')
})