const express = require('express');
const app = express();
const path = require('path');
const config = require('./config');
const oauthRouter = require('./oauth');
const dateFormat = require('date-format');
const morgan = require('morgan');

app.use(express.json());
morgan.token('time',()=>dateFormat.asString(dateFormat.ISO8601_FORMAT, new Date()));

app.use(morgan('[:time] :remote-addr :method :url :status :res[content-length] :response-time ms'));

app.use(express.static('static'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/static/index.html'))
});

app.use('/oauth', oauthRouter);

app.listen(config.PORT, () =>{
    console.log(`Listening on ${config.PORT}`);
});