const express = require("express");
const router = require("./app/router");
const server = express();



server.set('view engine', 'ejs');
server.set('views', './app/views');

server.use(express.static('public'));

const games = require('./games.json');


 server.use((req, res, next) => {
    res.locals.games = games;
    next();
 })

server.use(router);


const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`);
});