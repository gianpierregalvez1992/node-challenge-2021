// const request = require("supertest");
// const { app, listener } = require("../../../../index");

// // beforeAll((done) => {
// // 	done();
// // });

// // afterAll((done) => {
// // 	// Closing the DB connection allows Jest to exit successfully.
// // 	// mongoose.connection.close()
// // 	listener.close(done);
// // 	// done();
// // });

// // afterEach(() => listener.close());

// describe("Videos CRUD api", () => {
// 	// let server = null;

// 	// beforeEach(() => {
// 	// 	server = app.listen(3000, () => console.log("Listening on port 3000"));
// 	// });

// 	// afterEach(async (done) => {
// 	// 	await server.close(done);
// 	// });

// 	afterAll((done) => {
// 		// await new Promise((resolve) => setTimeout(() => resolve(), 500)); // avoid jest open handle error
// 		listener.close(done);
// 	});

// 	// let videoId;
// 	it("should create a video", () => {
// 		// const response = await request(server).post("/api/videos").send({
// 		// 	user: "yyyx",
// 		// 	title: "Título XX",
// 		// 	description: "Descripción",
// 		// 	youtube_url: "youtube url",
// 		// 	image: "imageee",
// 		// });
// 		// // console.log(response);

// 		// expect(response.statusCode).toEqual(200);
// 		// expect(response.body).toHaveProperty("message");
// 		// expect(response.body).toHaveProperty("videoId");
// 		// videoId = response.body.videoId;
// 		expect(true).toBe(true);
// 	});

// 	// it("should response with error messages", async (done) => {
// 	// 	const response = await request(app).post("/api/videos").send({});
// 	// 	expect(response.statusCode).toEqual(422);
// 	// 	expect(response.body).toHaveProperty("details");
// 	// 	done();
// 	// });

// 	// it("should update a video", async () => {
// 	// 	const response = await request(app).pust(`/${videoId}`).send({
// 	// 		title: "Título WTF",
// 	// 	});
// 	// 	console.log(response);

// 	// 	expect(response.statusCode).toEqual(200);
// 	// 	expect(response.body).toHaveProperty("message");
// 	// 	expect(response.body).toHaveProperty("videoId");
// 	//     videoId = response.body.videoId;
// 	// });
// });

// const request = require("supertest");
const app = require("../../../../src/app");
const supertest = require("supertest");
const request = supertest(app);

describe("Test the root path", () => {
	it("testing", async (done) => {
		// done();
		request
			.post("/api/videos")
			.send({})
			.then((response) => {
				expect(response.statusCode).toBe(422);
				done();
			});
	});
});
