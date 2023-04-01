const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()

app.use(cors())

require('dotenv').config()
const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.DATABASE_URL)


app.get('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Hello World!')
})

app.get('/students', (req, res) => { 
connection.query(
    'SELECT * FROM students',
    function(err, results, fields) {
        res.send(results)
    }
)
})

app.listen(process.env.PORT || 3000)
// connection.end()