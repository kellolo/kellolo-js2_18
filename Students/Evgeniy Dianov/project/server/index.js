// console.log('Я вам не Димон')
const express = require('express');
const fs = require('fs');

const server = express();

server.get('/catalog', (req, res) => {
    fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
        if (!err) {
            res.send(data);
        }
    })    
});

server.get('/cart', (req, res) => {
    fs.readFile('./server/db/cart.json', 'utf-8', (err, data) => {
        if (!err) {
            res.send(data);
        }
    })    
});

server.listen(3000, () => { console.log('Listen 3000...') });



