const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');
// const { check } = require('express-validator');

router.post('/',
    gameController.createGame
);

module.exports = router;