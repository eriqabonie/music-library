const express = require('express');

const albumController = require('../controllers/album');

const router = express.Router();

router.post('/artist/:artistId/album', albumController.create);

//works with a basic create below but above does not work
//also I don't understand the route above. (from track)
//router.post('/', albumController.create);

router.get('/album', albumController.read);

router.get('/album/:albumId', albumController.readById);

router.patch('/album/:albumId', albumController.update);

router.delete('/album/:albumId', albumController.destroy);

module.exports = router;