const dns = require('node:dns');
dns.setDefaultResultOrder('ipv4first');

const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const port = 3004
const mongose = require('mongoose')
const dbURI = "mongodb://taha:taha2005@ac-rzfmx2o-shard-00-00.us4e7rc.mongodb.net:27017,ac-rzfmx2o-shard-00-01.us4e7rc.mongodb.net:27017,ac-rzfmx2o-shard-00-02.us4e7rc.mongodb.net:27017/?ssl=true&replicaSet=atlas-a1xj3p-shard-0&authSource=admin&appName=Cluster0";
app.get('/', (req, res) => {
  res.sendFile("./views/home.html",{root:__dirname})
})

mongose.connect(dbURI).then(()=>{
    app.listen(port, () => {
      console.log(`http://localhost:${port}/`);
    });
})
.catch((err)=>{console.log(err)

});