// index.js
const axios = require("axios")
const express = require("express")
const app = express()

const baseURL = "https://api.github.com"

const api = axios.create({ baseURL })

//const params = "MarcosMendes9389"

app.get("/seguidores/:user", (req,res) => {

api.get(`/users/${ req.params }/followers`)
    .then(ret =>res.send(ret.data))
    .catch(err => res.status(500).send(err.response.data))

})

app.listen(3000)
console.log("server online!")