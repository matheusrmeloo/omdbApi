const express = require(`Express`);

const routes = express.Router();


// app.post(`/filme`, (req, res) => {
//     res.send('HelloWorld');
// });

routes.get(`/filme`, (req, res) => {
    res.send('HelloWorld');
});

// app.get(`/filme/:id`, (req, res) => {
//     const filme = courses.find(c => c.id === parseInt(req.params.id));
//     if(!filme) res.status(404).send('Id não encontrado');
//     else res.send(filme);
// });

// app.delete(`/api/courses/:id`, (req, res) => {
//     const course = courses.find(c => c.id === parseInt(req.params.id));
//     if (!course){ 
//         return res.status(404).send('Id não encontrado');
//     };

module.exports = routes;
