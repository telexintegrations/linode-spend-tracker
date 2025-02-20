require('dotenv').config();

const integration_specs = {
    "data": {
        "date": {
            "created_at": "2025-02-18", 
            "updated_at": "2025-02-18"
        }, 
        "descriptions": {
            "app_description": "This Application returns the balance and uninvoiced balance in the user's Linode Account inorder to track spending",
            "app_logo": "https://media.tifi.tv/telexbucket/public/logos/formatter.png", 
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
                "default": ""
            }, 
            {
                "label": "interval", 
                "type": "text", 
                "required": true, 
                "default": "",
            },
            {
                "label": "Spending Threshold", 
                "type": "number", 
                "required": false, 
                "default": 0
            }
        ], 
        "tick_url": `${process.env.MY_DOMAIN}/account-info/get-balance-info`
    }
}

module.exports = integration_specs;