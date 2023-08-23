
let express = require('express')
let bodyParser = require('body-parser')    

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/addnum/:addnumber', function (req, res) {
    res.send('ผลลัพธ์ = ' + req.params.addnumber / 2 ) 
})

)

let port = 8081
app.listen(port, function () {
 console.log('server running on ' + port)
})