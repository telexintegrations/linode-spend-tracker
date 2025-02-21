const axios = require('axios');
const {SendMessageError} = require('../errors');

const sendMessageToChannel = async (return_url, data) => {
    try{
        const response = await axios.post(return_url, data);            
    }
    catch(err){
        const error = SendMessageError("There was an issue when sending data to the channel", err);
        console.log('send message erorr', err);
        throw error;
    }
}

module.exports = sendMessageToChannel;