/* eslint-disable no-undef */
const express = require('express');
const app = express();

//const swaggerUi = require('swagger-ui-express');
//const swaggerDocument = require('../swagger.json');

const artistRouter = require('./routes/artist');

const albumRouter = require('./routes/album');

//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

app.use('/artist', artistRouter);

app.use('/album', albumRouter);


/**app.get('/', (req,res)=> {
    res.status(200).json({result:'Hello world Eriq'});
});**/



module.exports = app;