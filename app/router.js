const express = require("express");

const router = express.Router();

//const games = require('./games.json');
//server.locals.games = games;

//router.use((req, res, next) => {
//    req.isDiceRoller = false;
//    next();
//});

router.get("/",(req,res)=>{
    res.render('index');
});

router.get("/game/:nomDuJeu",(req,res, next)=>{
    const games = req.games;
    const game = games.find(game => game.name == req.params.nomDuJeu);

    res.locals.isDiceRoller = false;

    if (!game) {
        console.log('########################### erreur #####################');
        next();
        return;
    }

    if (game.name == 'diceRoller') {
        res.locals.isDiceRoller = true;
    }
    //else {
    //    isDiceRoller = false;
    //}
    res.render(game.name);
});





router.use((req, res, next) => {
    res.status(404).render('404');
});

module.exports = router;