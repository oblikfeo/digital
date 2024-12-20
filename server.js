const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3228

app.use(cors())
app.use(bodyParser.json())

app.post('/login', (req, res) => {
    if (req.body.name === "admin" && req.body.pass === "admin") {
        res.status(200).json({ msg: "auth", status: "200" })
    }
    res.status(401).json({ msg: "error", status: "401" })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})