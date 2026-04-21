const dns = require('node:dns');
dns.setDefaultResultOrder('ipv4first');

const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const port = 3004
const mongose = require('mongoose')
const dbURI = "mongodb://taha:taha2005@ac-rzfmx2o-shard-00-00.us4e7rc.mongodb.net:27017,ac-rzfmx2o-shard-00-01.us4e7rc.mongodb.net:27017,ac-rzfmx2o-shard-00-02.us4e7rc.mongodb.net:27017/all-data?ssl=true&replicaSet=atlas-a1xj3p-shard-0&authSource=admin&appName=Cluster0";
app.use(express.urlencoded({extended:true}));
const Mydata = require("./models/mydataSchema");
const { rmSync } = require('node:fs');
app.set('view engine','ejs')

app.get('/', (req, res) => {
 /* Mydata.find()
  .then((result) => {
    res.render("home",{mytitle:"Home page" , arr: result});
  })
  .catch((err) => {
    console.log(err);
  });*/
  res.render("home", { mytitle: "Home page", mydata: null });

});

mongose.connect(dbURI).then(()=>{
    console.log("✅ Connected to MongoDB Atlas!"),
    app.listen(port, () => {
      console.log(`http://localhost:${port}/`);
    });
})
.catch((err)=>{console.log(err)

});

app.post("/",(req,res) => {
  console.log(req.body)
  const mydata = new Mydata(req.body);
  mydata.save().then((result) =>res.render("home", { mytitle: "Home page", mydata: result }));
});
