const { getAccountInfo, setToken } = require('@linode/api-v4');
const helperFunctions = require('../helpers/');
const {SendMessageError} = require('../errors');

const getBalanceInfo = async (req, res) => {
    const { token, return_url } = req.body;
    setToken(token);
    if (!token) return res.status(400).json({ "status": "error", "message": "The Linode API token was not provided" });

    try {
        const accountInfo = await getAccountInfo();
        // create the message that you want to return 
        const message = helperFunctions.generateMessage(accountInfo);

        const responseMessage = {
            "status": "success",
            "message": message,
            "event_name": "Linode Spend Tracking",
            "username": "Linode Spend Tracker"
        }
        // send this responseMessage to the channel
        await helperFunctions.sendMessageToChannel(return_url, responseMessage);
        return res.status(200).json(responseMessage);
    }
    catch (err) {
        if (err instanceof SendMessageError) {
            console.log(err.originalError)
            return res.status(502).json({ 'status': "error", "message": "Was not able to send the data to the channel" });
        }
        else {
            console.log("Was not able to get the account info. Linode API key must be wrong");
            console.log(err);
            return res.status(502).json({ "status": "error", "message": "Was not able to get account info. Linode API keys is wrong" })
        }   
    }

}


module.exports = { getBalanceInfo }