require("dotenv").config();
const request = require("supertest");
const { connectMongo, disconnectMongo } = require("../dbconnection");
const app = require("../app");
const req = request(app);

let test_id;
let test_title;
let non_format_id = "aaa";
let non_existent_id = "62ef789cb62a803d2253123zz";

describe("TESTS FOR BLOG API ENDPOINTS", () => {
  /**
   * BEFORE EACH
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
   * AFTER EACH
   */
  afterAll(async () => {
    console.log("Test cases completed. Disconnecting from MongoDB");
    await disconnectMongo();
  }, 30000);
  /**
   * TEST CASE 1 -- GETTING ALL THE BLOGS
   */
  describe("GET /", () => {
    test("SHOULD RETURN ALL THE BLOGS", async () => {
      const res = await req.get("/api/v1/blogs");
      expect(res.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
      expect(res.status).toBe(200);
    });
  });

  /**
   * TEST CASE 2 -- POSTING A BLOG
   */
  describe("POST / ", () => {
    test("SHOULD RETURN THE NEWLY ADDED BLOG", async () => {
      const res = await req.post("/api/v1/blogs/").send({
        title: "TEST",
        author: "TEST",
        profilePicAddress: "./test.png",
        body: "Test",
      });
      test_id = res.body._id;
      test_title = res.body.title;
      expect(res.status).toBe(200);
      expect(res.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });

  /**
   * TEST CASE 3 -- GETTING A BLOG VIA ID
   */
  describe("GET /id", () => {
    test("SHOULD RETURN A BLOG VIA ID", async () => {
      const res = await req.get(`/api/v1/blogs/${test_id}`);
      expect(res.status).toBe(200);
      expect(res.body._id).toBe(test_id);
      expect(res.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });

  /**
   * TEST CASE 4 -- GETTING A BLOG VIA ID
   */
  describe("GET /id", () => {
    test("SHOULD RETURN A 404 FOR NON-EXISTENT ID", async () => {
      const res = await req.get(`/api/v1/blogs/${non_existent_id}`);
      expect(res.status).toBe(404);
    });
  });

  /**
   * TEST CASE 5 -- ADJUSTING A BLOG
   */
  describe("PUT /id", () => {
    test("SHOULD ADJUST A BLOG VIA ID", async () => {
      const res = await req.put(`/api/v1/blogs/${test_id}`).send({
        title: "EDITED TITLE",
        author: "EDITED AUTHOR",
        profilePicAddress: "./editedTest.png",
        body: "EDITED BODY",
      });
      expect(res.status).toBe(200);
      console.log("PUT / command ", res.body);
      expect(res.body._id).toBe(test_id);
      expect(res.body.title).toBe(test_title);
      expect(res.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });

  /**
   * TEST CASE 6 -- TRYING TO ADJUST A NON EXISTING BLOG
   */
  describe("PUT /id", () => {
    test("SHOULD TRY TO ADJUST A  NON EXISTIN BLOG VIA ID", async () => {
      const res = await req.put(`/api/v1/blogs/${non_existent_id}`).send({
        title: "EDITED TITLE",
        author: "EDITED AUTHOR",
        profilePicAddress: "PROFILE PIC ADDRESS",
        body: "EDITED BODY",
      });
      expect(res.status).toBe(404);
    });
  });

  /**
   * TEST CASE 7 -- TRYING TO ADJUST A BLOG VIA NON FORMAT ID
   */
  describe("PUT /id", () => {
    test("SHOULD TRY TO ADJUST A  NON EXISTIN BLOG VIA ID", async () => {
      const res = await req.put(`/api/v1/blogs/${non_format_id}`).send({
        title: "EDITED TITLE",
        author: "EDITED AUTHOR",
        profilePicAddress: "EDITED PROFILE PIC ADDRESS",
        body: "EDITED BODY",
      });
      expect(res.status).toBe(404);
    });
  });
  /**
   * TEST CASE 8 -- DELETE A BLOG VIA ID
   */
  describe("DELETE /id", () => {
    test("SHOULD DELETE A BLOG VIA ID", async () => {
      const res = await req.delete(`/api/v1/blogs/${test_id}`);
      expect(res.status).toBe(200);
      expect(res.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });
  /**
   * TEST CASE 9 -- DELETE A NON EXISTING BLOG
   */
  describe("DELETE /id", () => {
    test("SHOULD TRY TO DELETE A NON EXISTING BLOG VIA ID", async () => {
      const res = await req.delete(`/api/v1/blogs/${non_existent_id}`);
      expect(res.status).toBe(404);
    });
  });
});
