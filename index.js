require("dotenv").config()
const express = require('express') 
const mongoose  = require('mongoose')
const app = express()
const port = process.env.PORT 

app.use(express.json())

app.use(express.urlencoded({extended: true}))

mongoose.connect(
    process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    app.listen(port, ()=> {
        console.log(`server listening on port ${port}`)
    })
}).catch(err => {
    console.error('cannot connect to database', err)
})

app.get('/', async (req, res) => {
    res.send('hello world')
})

app.get('/home', async (req, res) => {
    res.send('house of cats')
})

// CLIENT

const clientRoutes = require('./routes/client')
app.use('/client', clientRoutes)