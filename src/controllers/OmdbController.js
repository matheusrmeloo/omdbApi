const Omdb = require(`../models/omdb`);
const axios = require('axios');

const search = `frozen`;

module.exports = {
    async index(req, res) {
        const omdbs = await Omdb.find({});

        return res.json(omdbs);
    },

    async store(req, res) {
        const omdb1 = await Omdb.create(req.body);

        return res.json(omdb1);
    },

    async favList(req, res) {
        const omdbFav = await Omdb.findById(req.params.id);
        return res.json(omdbFav);
    },
    async SearchByTitle(req, res) {
        axios.get(`http://www.omdbapi.com/?apikey=147b5624&t=${search}`)
            .then(function (response) {
                console.log(response);
            })
    }

};