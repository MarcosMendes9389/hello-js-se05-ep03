const axios = require("axios")
const express = require("express")
const app = express()
const baseURL = "http://thecatapi.com"
const api = axios.create({ baseURL })
const params = {format : "html"}

app.get("/pega-o-gato", (req,res) => {

    api.get(`/api/images/get`, {params})
        .then(ret =>res.send(ret.data))
    
})
    
app.listen(3000)
console.log("server online!")