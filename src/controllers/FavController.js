const Omdb = require(`../models/omdb`);

module.exports = {
    async store(req,res){
        const omdbFav = await Omdb.findById(req.params.imdbID);
        return res.json(omdbFav);
    },
};