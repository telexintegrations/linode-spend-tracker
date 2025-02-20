const application = require('../app');
const request = require('supertest');

describe("Return an image with a 200", ()=> {
    test("Returns a content of image/png and a status 200", async() => {
        const res = await request(application).get('/logo')
                            .expect(200)
                            .expect('Content-Type', 'image\/png');
    });
})