require('dotenv').config();
const application = require('./app');

const PORT = process.env.PORT || 8000;

application.listen(PORT, () => {
    console.log(`Application is listening on the port ${PORT}`)
});