const Omdb = require(`../models/omdb`);
const axios = require('axios');

const search = `fast`;
const filme = {
    'titulo': String,
    'imdbID': String,
    'ano': String,
    'duracao': String,
    'genero': [String],
    'atores': [String],
    'resumo': String,
    'foto': String,
    'imdbRate': String,
    'producao': String
};

module.exports = {
    async index(req, res) {
        const omdbs = await Omdb.find({});

        return res.json(omdbs);
    },

    async store(req, res) {

        // axios.get(`http://www.omdbapi.com/?apikey=147b5624&t=${search}`)
        //     .then(function (response) {
        //     })

        const omdb1 = await Omdb.create(req.body);

        return res.json(omdb1);
    },

    async DeleteId(req,res){
        //Test Commit
    },

    async favList(req, res) {
        const omdbFav = await Omdb.findById(req.params.id);
        return res.json(omdbFav);
    },

    async SearchByTitle(req, res) {
        axios.get(`http://www.omdbapi.com/?apikey=147b5624&t=${search}`)
            .then(function (response) {
                filme.titulo = response.data.Title
                filme.imdbID = response.data.imdbID,
                    filme.ano = response.data.Year,
                    filme.duracao = response.data.Runtime,
                    filme.genero = response.data.Genre,
                    filme.atores = response.data.Actors,
                    filme.resumo = response.data.Plot,
                    filme.foto = response.data.Poster,
                    filme.imdbRate = response.data.imdbRating,
                    filme.producao = response.data.Production

                return res.json(filme);
            })
    }
};