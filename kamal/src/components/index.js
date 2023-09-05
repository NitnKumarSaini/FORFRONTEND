const express = require('express')


const app = express()

app.use(express.json());

app.use("/read" , ( res , req , next)=>{

    console.log("hii its confirm")

    if(req.body && req.body.name === "nitin"){

        res(body)
        console.log(res.method)
        next()
    }else(
        res.send("it is not match")
    )

})


app.get("/read", (res , req )=>{

req.send({

    name : "nitin",
    age : 21,
    email : "nitinsaini3542@gmail.com",
    phoneNo : 564332134
})


})

app.listen(5100 , ()=>{

    console.log("ok it's work")

})