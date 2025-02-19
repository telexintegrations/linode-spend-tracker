const express = require('express');
const integrationSpecs = require('../data/integration_specs');
const router = express.Router();

router.route('/')
    .get(async (req, res) => {
        return res.status(200).json(integrationSpecs)
    });


module.exports = router;