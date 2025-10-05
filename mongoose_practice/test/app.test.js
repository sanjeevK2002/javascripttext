import request from "supertest";
import app from "../app.js";

describe("API Routes", () => {
  it("GET / should return Hello World", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello World");
  });
});
