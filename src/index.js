const express = require('express');
const app = express();
const mongoose = require('mongoose');

// http://www.omdbapi.com/?i=tt3896198&apikey=147b5624
 
mongoose.connect('mongodb://127.0.0.1:27017/OMDB', {useNewUrlParser: true});

app.use(require(`./routes`));

// app.use(function(req, res, next){
//     console.log(`logging...`);
// });




const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`Listening on port ${port} ...`));