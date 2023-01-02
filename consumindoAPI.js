const express = require('express');
const axios = require('axios');

const app = express();

app.listen('3000');

app.route('/').get((req, res) => {
    axios.get('https://api.github.com/users/CleissonV')
    .then(result => res.send(`<img src="${result.data.avatar_url} width="200px" height="200px" style="border-radius:50%;"/>`))
    .catch(error => console.error(error));
});