const express = require('express')
const app = express()

app.set("view engine", "ejs")

app.get("/", function (req, res){
    res.render('pages/index')
})

app.listen(8880)
console.log("Server rodando") 