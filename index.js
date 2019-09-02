const express = require('express');
const app = express();

app.use(express.json());



app.post(`/filme`, (req, res) => {
    res.send('HelloWorld');
});

app.get(`/filme`, (req, res) => {
    res.send('HelloWorld');
});

app.get(`/filme/:id`, (req, res) => {
    res.send('HelloWorld');
});




const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`Listening on port ${port} ...`));