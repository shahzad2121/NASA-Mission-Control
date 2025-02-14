const request = require("supertest");
const app = require("../../app");

describe("test GET /launches", () => {
  test("staus code should be 200", async () => {
    const response = await request(app).get("/launches").expect(200);
  });
});

describe("test POTS /launches", () => {
  const launchDataWithDate = {
    mission: "exoplanet 1",
    target: "Kepler 21",
    launchDate: "June 20, 2030",
    rocket: "IS1",
  };
  const DataWithOutDate = {
    mission: "exoplanet 1",
    target: "Kepler 21",
    rocket: "IS1",
  };
  const dataWithInvalidDate = {
    mission: "exoplanet 1",
    target: "Kepler 21",
    launchDate: "root",
    rocket: "IS1",
  }

  test("should be 201", async () => {
    const response = await request(app)
      .post("/launches")
      .send(launchDataWithDate)
      .expect(201);

    const requestDate = new Date(launchDataWithDate.launchDate).getTime();
    const responseDate = new Date(response.body.launchDate).getTime();

    expect(requestDate).toBeCloseTo(responseDate, 3);
    expect(response.body).toMatchObject(DataWithOutDate);
  });

  test('test POST /launches', async() => {
    const response = await request(app).post('/launches')
      .send(dataWithInvalidDate)
      .expect(400)

      expect(response.body).toStrictEqual({
        error:"invalid launch Date"
      })
  })

  test('test POST /launches', async() => {
    const response = await request(app).post('/launches')
      .send(DataWithOutDate)
      .expect(400)

      expect(response.body).toMatchObject({
        error:"Launch properties are not filled"
      })
  })
});

describe("test DELETE /launches", () => {
  test("status code should be 200", async () => {
    const response = await request(app).delete("/launches/101").expect(200);
    expect(response.body).toMatchObject({
      upcoming: false,
      success: false,
    });
  });
});
