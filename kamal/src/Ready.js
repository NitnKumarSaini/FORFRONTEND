const express = require('express');

const app = express();
app.use(express.json());

app.use("/ok",(req , res , next)=>{
    console.log(req.method , new Date().toDateString())

    // next()

    if(req.body && req.body.name ==="prince"){
        next()
    }else{
        res.send("not allowed")
    }
})  

app.post("/ok",(req , res)=>{

res.sendFile(``)
})
app.listen(8000 , ()=>{
console.log('it"s work')

})