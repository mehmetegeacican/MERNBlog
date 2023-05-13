require("dotenv").config();
const request = require("supertest");
const { connectMongo, disconnectMongo } = require("../dbconnection");
const app = require("../app");
const req = request(app);


describe(('TESTS FOR BLOG API AUTHENTICATION'), () => {
    /**
     * BEFORE ALL
     */
    beforeAll(async () => {
        try {
            await connectMongo(String(process.env.MONGO_URI_STRING));
            console.log("DB Connectin for test is successful");
        } catch (err) {
            console.log(err);
        }
    }, 25000);

    /**
     * AFTER ALL
     */
    afterAll(async () => {
        console.log("Test cases completed. Disconnecting from MongoDB");
        await disconnectMongo();
    }, 30000);

    /**
     * TEST CASE 1 -- SIGNING UP WITH NO DATA
     */
    describe("POST / ", () => {
        test("SHOULD NOT CREATE A NEW USER DUE TO HAVING NO DATA ENTERED", async () => {
            const res = await req.post("/api/v2/users/signup").send({
                email: "",
                password: ""
            });
            expect(res.status).toBe(400);
        });
    });
    /**
     * TEST CASE 2 -- SIGNING UP WITH NON VALIDATED EMAIL
     */
    describe("POST / ", () => {
        test("SHOULD NOT CREATE A NEW USER DUE TO HAVING UNVALIDATED EMAIL ENTERED", async () => {
            const res = await req.post("/api/v2/users/signup").send({
                email: "testemail",
                password: "abcABC123!"
            });
            expect(res.status).toBe(400);
        });
    });
    /**
     * TEST CASE 3 -- SIGNING UP WITH NOT STRONG PASSWORD
     */
    describe("POST / ", () => {
        test("SHOULD NOT CREATE A NEW USER DUE TO HAVING WEAK PASSWORD ENTERED", async () => {
            const res = await req.post("/api/v2/users/signup").send({
                email: "yoshi@dev.com",
                password: "abc"
            });
            expect(res.status).toBe(400);
        });
    });
    /**
     * TEST CASE 4 -- SIGNING UP SUCCESSFULLY
     */

    /**
     * TEST CASE 5 -- SIGNING UP WITH ALREADY IN-USE EMAIL
     */
})