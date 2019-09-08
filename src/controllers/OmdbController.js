const Omdb = require(`../models/omdb`);

module.exports = {
    async index(req,res){
        const omdbs = await Omdb.find({});

        return res.json(omdbs);
    },

    async store(req,res){
        const omdb1 = await Omdb.create(req.body);

        return res.json(omdb1);
    },

    async favList(req,res){
        const omdbFav = await Omdb.findById(req.params.id);
        return res.json(omdbFav);
    }

};