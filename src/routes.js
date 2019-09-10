const express = require(`Express`);


const routes = express.Router();


const OmdbController = require (`./controllers/OmdbController`);

routes.get(`/filme`, OmdbController.index);
routes.post(`/filme`, OmdbController.store);
routes.get(`/filme/:id`, OmdbController.favList);
routes.get(`/filme/:titulo`, OmdbController.SearchByTitle);

module.exports = routes;
