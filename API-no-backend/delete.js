const express = require('express');

const app = express();

app.listen('3000');

//middleware = ponte entre as requisições
app.use(express.json());

let autor = "Cleisson";

app.route('/:identificador').delete((req, res) => {
    autor = "";
    res.send(req.params.identificador);
});