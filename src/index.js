const express = require('express')
const morgan = require('morgan')
const path = require('path')

const {mongoose} = require('./database')

const app = express()

//Settings
app.set('port', process.env.PORT || 4000)

//Middlewares
app.use(express.json())
app.use(morgan('dev'))

//Routes
app.use('/api/tasks', require('./routes/tasks.routes'))
//Statics
app.use(express.static(path.join(__dirname, 'public')))

//Server
app.listen(app.get('port'), ()=>{
    console.log(`Server listening on port ${app.get('port')}`)
})