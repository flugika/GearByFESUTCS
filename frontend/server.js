var express = require('express')
var cors = require('cors')
const mysql = require('mysql2');
const PORT = process.env.PORT || 5000

// database
const connection = mysql.createConnection({
    host: 'dfkpczjgmpvkugnb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: '3306',
    user: 'ybxabovljyz4tah7',
    password: 'rj3294kd8jjvxkxa',
    database: 'p261cw6onwi1uu76'
});

var app = express()
app.use(cors())
app.use(express.json())

app.get('/student/:id', function (req, res, next) {
    const id = req.params.id;
    connection.query(
        'SELECT * FROM `gear-fesutcs-2565` WHERE `student_id` = ?',
        [id],
        function(err, results) {
        res.json(results);
        }
    );
})

app.listen(PORT, function () {
    console.log('CORS-enabled web server listening on port '+PORT)
})