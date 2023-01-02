const express = require('express');

const app = express();

app.listen('3000');

//middleware = ponte entre as requisições
app.use(express.json());

app.route('/').post((req, res) => res.send(req.body));