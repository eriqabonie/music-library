/* eslint-disable no-undef */
const express = require('express');
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const artistRouter = require('./routes/artist');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

app.use('/artist', artistRouter);


/**app.get('/', (req,res)=> {
    res.status(200).json({result:'Hello world Eriq'});
});**/




module.exports = app;