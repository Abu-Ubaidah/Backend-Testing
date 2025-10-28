const express = require("express");
const app = express();
const port = 3000;
app.get("/google",(req,res)=>{
    res.send("hello tgere")
});

app.listen(port , ()=>{
    console.log("server running on port : ", port);
});