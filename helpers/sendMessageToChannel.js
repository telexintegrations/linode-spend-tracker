const axios = require('axios');
const {SendMessageError} = require('../errors');

const sendMessageToChannel = async (return_url, data) => {
    try{
        const response = await axios.post(return_url, data);
        // console.log(response);
    }
    catch(err){
        const error = SendMessageError("There was an issue when sending data to the channel", err);
        throw error;
    }
}

module.exports = sendMessageToChannel;