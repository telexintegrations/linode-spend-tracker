const { getAccountInfo, setToken } = require('@linode/api-v4');
const helperFunctions = require('../helpers/');
const {SendMessageError} = require('../errors');

const getBalanceInfo = async (req, res) => {
    const { settings, return_url } = req.body;
    
    // get the token if it exists
    const token = (settings?.find(setting => setting.label === "Token"))?.default;    // get the token from the settings
    // get the threshold value if it exists
    const threshold = (settings?.find(setting => setting.label === "Spending Threshold"))?.default;

    console.log(token);
    if (!token) return res.status(400).json({ "status": "error", "message": "The Linode API token was not provided" });
    if (!return_url) return res.status(400).json({"status": "error", "message": "The return_url was not provided"});
    
    // set the token
    setToken(token);


    try {
        const accountInfo = await getAccountInfo();
        console.log(`account info: ${accountInfo}`);
        // create the message that you want to return 
        const message = helperFunctions.generateMessage(accountInfo, threshold);

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
            return res.status(401).json({ "status": "error", "message": "Was not able to get account info. Linode API keys is wrong" })
        }   
    }

}


module.exports = { getBalanceInfo }