/* eslint-disable no-undef */
const express = require('express');
const app = express();

const artistRouter = require('./routes/artist');

app.use(express.json());

app.use('/artist', artistRouter);


/**app.get('/', (req,res)=> {
    res.status(200).json({result:'Hello world Eriq'});
});**/




module.exports = app;