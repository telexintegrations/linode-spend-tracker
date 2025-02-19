const application = require('../app');
const request = require('supertest');

describe("Return JSON settings", () => {
    // the endpoint should return a JSON file with status 200
    test("Should return JSON file with 200 status", async() => {
        const res = await request(application)
                        .get('/integration-specs');
        expect(res.statusCode).toBe(200);
        expect(res.headers['content-type']).toContain('application/json')

    });
    // the endpoint should return the right data structure
    test("Should return the correct data structure", async() => {
        const res = await request(application)
                            .get('/integration-specs');
        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data.settings)).toBe(true);
    })

    // the integration_type and integration_category should be interval and Communication & Collaboration respectively
    test("integration_type and integration_category should be correct", async() => {
        const res = await request(application).get('/integration-specs');
        expect(res.body.data.integration_category).toBe("Communication & Collaboration");
        expect(res.body.data.integration_type).toBe("interval");
    })
})