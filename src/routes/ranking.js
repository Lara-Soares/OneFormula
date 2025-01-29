const express = require('express');
const router = express.Router();
const rankingController = require('../controllers/rankingController.js');

// Rota para o ranking

router.get("/ranking", function (req, res) {
    rankingController.ranking(req, res);
});

module.exports = router;

