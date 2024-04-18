const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const app = express();

const dbConfig = require('./config/dbConfig');


const portfolioRoute = require('./routes/portfolioRoute')

// Parse incoming request bodies with JSON payloads
app.use(bodyParser.json());

app.use('/api/v1/', portfolioRoute);


if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, "../client/build")))
    app.use("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../client/build/index.html"))
    })
}
app.use('/hello', (req, res) => {
    res.send('Hello')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server Started on Port', PORT)
})

