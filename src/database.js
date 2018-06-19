const mongoose = require('mongoose')

const URI = 'mongodb://localhost/mern-tasks'

mongoose.connect(URI)
    .then(db => console.log('La base de datos esta conectada'))
    .catch(err=> console.error(`Error: ${err}`))

module.exports = mongoose