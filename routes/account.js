const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController.js');

router.route('/')
        .post(accountController.getBalanceInfo);

module.exports = router;