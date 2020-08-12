const path = require('path')
const express = require('express')

const Routes = new express.Router()
const htmlPath = path.join(__dirname,'../html')
Routes.get("/", (req, res) => {
    res.sendFile(htmlPath + '/')
})

module.exports = Routes