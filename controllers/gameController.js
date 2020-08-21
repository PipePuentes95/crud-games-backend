const Game = require('../models/Game');

exports.createGame = async (req, res) => {
    try {
        const game = new Game(req.body);
        await game.save();
        res.json({ game });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.getGames = async (req, res) => {
    try {
        const games = await Game.find({});
        res.json({games});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.getGame = async (req, res) => {
    try {
        const game = await Game.findById(req.params.id);
        res.json({game});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.updateGame = async (req, res) => {
    try {
        const { name, category, rating, imgURL, pltaform } = req.body;
        const updateGame = { name, category, rating, imgURL, pltaform };
        const game = await Game.findByIdAndUpdate(
            { _id: req.params.id },
            updateGame,
            { new: true }
        );
        res.json({game});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.deleteGame = async (req, res) => {
    try {
        await Game.findOneAndDelete({ _id: req.params.id })
        res.json({ msg: "The game has be delete"});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}