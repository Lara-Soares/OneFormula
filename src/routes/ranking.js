const express = require('express');
const router = express.Router();
const rankingController = require('../controllers/rankingController');

// Rota para o ranking
router.get('/ranking', rankingController.ranking);

module.exports = router;