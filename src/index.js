const express = require('express');
const app = express();
const mongoose = require('mongoose');
 
mongoose.connect('mongodb://127.0.0.1:27017/OMDB', {useNewUrlParser: true});

app.use(express.json());

// app.use(function(req, res, next){
//     console.log(`logging...`);
// });


app.post(`/filme`, (req, res) => {
    res.send('HelloWorld');
});

app.get(`/filme`, (req, res) => {
    res.send('HelloWorld');
});

app.get(`/filme/:id`, (req, res) => {
    const filme = courses.find(c => c.id === parseInt(req.params.id));
    if(!filme) res.status(404).send('Id não encontrado');
    else res.send(filme);
});

app.delete(`/api/courses/:id`, (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course){ 
        return res.status(404).send('Id não encontrado');
    };

    const index = courses.indexOf(course);
    courses.splice(index,1);

    res.send(course);
    console.log(course);
    console.log(courses);
});



const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`Listening on port ${port} ...`));