require('dotenv').config();

const integration_specs = {
    "data": {
        "date": {
            "created_at": "2025-02-18", 
            "updated_at": "2025-02-18"
        }, 
        "descriptions": {
            "app_description": "This Application returns the balance and uninvoiced balance in the user's Linode Account inorder to track spending",
            "app_logo": `${process.env.MY_DOMAIN}/logo`, 
            "app_name": "Linode Spend Tracker", 
            "app_url": process.env.MY_DOMAIN,
            "background_color": "#fff"
        },
        "integration_category": "Communication & Collaboration",
        "integration_type": "interval", 
        "is_active": true,
        "settings": [
            {
                "label": "Token", 
                "type": "text", 
                "required": true, 
                "default": "d5ff7140690ccee75d504c4cd2af6389d2bdfb0c75245c9c6df19de3fbff557f"
            }, 
            {
                "label": "interval", 
                "type": "dropdown", 
                "required": true, 
                "default": "* * * * *",
                "options": ["* * * * *", "*/5 * * * *", "*/10 * * * *", "*/30 * * * *", "0 * * * *", "0 */5 * * *", "0 */12 * * *", "0 0 * * *"]
            },
            {
                "label": "Spending Threshold", 
                "type": "number", 
                "required": false, 
                "default": 0
            }
        ], 
        "key_features": [
            "Retrieves real-time balance details from a Linode account.",
            " Notifies users when their account balance exceeds a specified spending threshold.", 
            " Formats and sends Linode spending details as messages to a specified Telex channel", 
            " Accepts user-defined settings, including API tokens and threshold values."
        ],
        "tick_url": `${process.env.MY_DOMAIN}/tick`, 
        "target_url": ""
    }
}

module.exports = integration_specs;