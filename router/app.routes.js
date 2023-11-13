const app = require('express').Router()


app.get('/home',require('../controller/home.controller').render)
app.post('/handleimg',require('../controller/home.controller').handle)

module.exports = app