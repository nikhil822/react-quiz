require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const port = 5000

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB')
})
mongoose.connection.on('error', (err) => {
    console.log('Error connecting to MongoDB', err)
})

require('./models/questionModel')
app.use(cors())
app.use(express.json())
app.use(require('./routes/questionRoutes'))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})