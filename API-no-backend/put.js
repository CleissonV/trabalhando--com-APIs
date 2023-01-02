const express = require('express');

const app = express();

app.listen('3000');

//middleware = ponte entre as requisições
app.use(express.json());

let autor = "Cleisson";

app.route('/').get((req,res) => res.send(autor));

app.route('/').put((req, res) => {
    autor = req.body.autor;
    res.send(autor);
});