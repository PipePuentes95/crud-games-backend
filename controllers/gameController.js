const Game = require('../models/Game');

exports.createGame = async (req, res) => {
    try {
        const game = new Game(req.body);
        await game.save();
        res.json({ game });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}