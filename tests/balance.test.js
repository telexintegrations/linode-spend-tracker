const application = require('../app');
const request = require('supertest');
require('dotenv').config();

describe("Test the balance endpoint", () => {
    test("Endpoint should return a status 200 when parameters are there", async () => {
        const data = {
            "channel_id": process.env.CHANNEL_ID,
            "return_url": `https://ping.telex.im/v1/return/${process.env.CHANNEL_ID}`,
            "settings": [
                {
                    "label": "Token",
                    "default": `${process.env.LINODE_TOKEN}`,
                    "type": "text",
                    "required": true
                },
                {
                    "label": "interval",
                    "type": "text",
                    "required": true,
                    "default": "* * * * *"
                }
            ]
        }

        const res = await request(application).post('/tick').send(data);
        expect(res.body.status).toBe("success");
        expect(res.statusCode).toBe(200);
    });

    test("Enpoint should return a 400 when the user does not pass a token to the request body", async () => {
        const data = {
            "channel_id": process.env.CHANNEL_ID,
            "return_url": `https://ping.telex.im/v1/return/${process.env.CHANNEL_ID}`,
            "settings": [
                {
                    "label": "interval",
                    "type": "text",
                    "required": true,
                    "default": "* * * * *"
                }
            ]
        };

        const res = await request(application).post('/tick').send(data);
        expect(res.statusCode).toBe(400);
    });

    test("Should return a status 502 if the wrong API key is used", async () => {

        const res = await request(application).post('/tick').send({
            "channel_id": " 01950f57-1237-7b8b-a5cf-056bc18ece20",
            "return_url": "https://ping.telex.im/v1/return/01950f57-1237-7b8b-a5cf-056bc18ece20",
            "settings": [
                {
                    "label": "Token",
                    "default": "daniel",
                    "type": "text",
                    "required": true
                },
                {
                    "label": "interval",
                    "type": "text",
                    "required": true,
                    "default": "* * * * *"
                }
            ]
        });
        expect(res.statusCode).toBe(401);
    });
})