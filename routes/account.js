const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController.js');

router.route('/get-balance-info')
        .post(accountController.getBalanceInfo);

module.exports = router;