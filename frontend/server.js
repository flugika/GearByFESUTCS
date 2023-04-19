var express = require('express')
var cors = require('cors')
const mysql = require('mysql2');
const PORT = process.env.PORT || 5000

// database
const connection = mysql.createConnection({
    host: 'dfkpczjgmpvkugnb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: '3306',
    user: 'fa9qymfn1mxhxx8g',
    password: 'mufrcdmv8qq71tbn',
    database: 'isdngkxhl8ufgfay'
});

var app = express()
app.use(cors())
app.use(express.json())

app.get('/student/:id', function (req, res, next) {
    const id = req.params.id;
    connection.query(
        'SELECT * FROM `gear-fesutcs-2565` WHERE `STUDENTCODE` = ?',
        [id],
        function(err, results) {
        res.json(results);
        }
    );
})

app.listen(PORT, function () {
    console.log('CORS-enabled web server listening on port ' + PORT)
})