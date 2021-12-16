/* eslint-disable no-undef */
const express = require('express');
const app = express();

app.use(express.json());


app.get('/', (req,res)=> {
    res.status(200).json({result:'Hello world Eriq'});
});


module.exports = app;