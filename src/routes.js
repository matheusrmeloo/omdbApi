const express = require(`Express`);


const routes = express.Router();


const OmdbController = require (`./controllers/OmdbController`);
const FavController = require (`./controllers/FavController`);

routes.get(`/filme`, OmdbController.index);
routes.post(`/filme`, OmdbController.store);
routes.get(`/favs/:imdbID`), FavController.store;

module.exports = routes;
