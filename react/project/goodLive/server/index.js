const express = require("express")
const app = express();
const router = require("./router")
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({
  extended:true
}))
app.use("/api", router);

app.listen(3200, ()=>{
  console.log('server run at port 3200')
})