const express = require('express');
const cors = require('cors');
const application = express();

// use middleware
application.use(express.json());
application.use(cors({
    origin: "https://telex.im/"
}));

// setup routes
application.use('/integration-specs', require('./routes/integrationSpecs'));
application.use('/account-info', require('./routes/account'));
application.use('/logo', require('./routes/logo'));

module.exports = application;