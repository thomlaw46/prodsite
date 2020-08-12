const express = require ("express")
const path = require('path')

const app = express()
const Routes = path.join(__dirname,'/Routes/routes')
const appRoutes = require(Routes)

app.use(appRoutes)

app.listen(3000, function(){
    console.log("Server is listening on port 3000")
})  