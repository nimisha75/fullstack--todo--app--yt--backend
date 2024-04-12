const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const routes = require('./routes/ToDoRoute')


require('dotenv').config()

const app = express()
const PORT = process.env.port || 3000

app.use(express.json())
app.use(cors())

const username = encodeURIComponent('nimishaks75');
const password = encodeURIComponent('<nimishaa>');

mongoose.connect(`mongodb+srv://nimishaks75:nimishaa@cluster0.hagcbbu.mongodb.net/`, )
    .then(() => console.log(`Connected to MongoDB..`))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

    app.use(routes)



app.listen(PORT, () => console.log(`Listening on: ${PORT}`))