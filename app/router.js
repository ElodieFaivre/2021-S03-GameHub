const express = require("express");

const router = express.Router();

let isDiceRoller = false;



router.get("/",(req,res)=>{
    res.render('index', {
        isDiceRoller
    });
});

router.get("/game/:nomDuJeu",(req,res)=>{
    const games = req.games;
    const game = games.find(game => game.name == req.params.nomDuJeu);

    //if (game.name)

    if (game.name == 'diceRoller') {
        isDiceRoller = true;
    }
    else {
        isDiceRoller = false;
    }
    res.render(game.name, {
        isDiceRoller
    });
});


/*
router.get("/game/fourchette",(req,res)=>{
    res.render('fourchette', {
        isDiceRoller
    });
});

router.get("/game/diceRoller",(req,res)=>{
    res.render('diceRoller', {
        isDiceRoller:true
    });
})
*/


module.exports = router;