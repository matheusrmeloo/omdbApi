const express = require(`Express`);


const routes = express.Router();


const OmdbController = require (`./controllers/OmdbController`);

routes.get(`/filme`, OmdbController.index);
routes.post(`/filme`, OmdbController.store);

module.exports = routes;
