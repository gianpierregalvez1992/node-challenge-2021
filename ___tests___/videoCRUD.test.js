process.env = Object.assign(process.env, {
	DATABASE:
		"mongodb+srv://super_admin:IAU64glk2gsd0geQ@cluster0.0j1sp.mongodb.net/node_crash_course_testingv2?retryWrites=true&w=majority",
});

const app = require("..//src/app");
const supertest = require("supertest");
const request = supertest(app);

describe("Video/Favorite CRUD test", () => {
	let currentVideo;
	let currentFavoriteVideo;
	it("create video", async (done) => {
		const data = {
			user: "yyyx1234",
			title: "Título XX222",
			description: "Descripción",
			youtube_url: "youtube url",
			image: "imageee",
		};
		request
			.post("/api/videos")
			.send(data)
			.then((response) => {
				currentVideo = response.body.data.video;
				expect(response.statusCode).toBe(200);
				expect(response.body.data.video).toEqual(expect.objectContaining(data));
				done();
			});
	});
	it("update video", async (done) => {
		const data = {
			title: "Título NUEVO test",
		};
		request
			.put(`/api/videos/${currentVideo._id}`)
			.send(data)
			.then((response) => {
				expect(response.statusCode).toBe(200);
				expect(response.body.error).toBe(false);
				done();
			});
	});
	it("get videos by user", async (done) => {
		request.get(`/api/users/${currentVideo.user}/videos`).then((response) => {
			expect(response.statusCode).toBe(200);
			expect(response.body.error).toBe(false);
			done();
		});
	});
	it("create favorite video", async (done) => {
		const data = {
			video: currentVideo._id,
		};
		request
			.post(`/api/users/${currentVideo.user}/videos/favorite`)
			.send(data)
			.then((response) => {
				currentFavoriteVideo = response.body.data.favoriteVideo;
				expect(response.statusCode).toBe(200);
				expect(response.body.data.favoriteVideo).toEqual(
					expect.objectContaining(data)
				);
				done();
			});
	});
	it("get favorite videos by user", async (done) => {
		request
			.get(`/api/users/${currentVideo.user}/videos/favorite`)
			.then((response) => {
				expect(response.statusCode).toBe(200);
				expect(response.body.error).toBe(false);
				done();
			});
	});
	it("delete favorite video", async (done) => {
		request
			.delete(
				`/api/users/${currentVideo.user}/videos/favorite/${currentFavoriteVideo._id}`
			)
			.then((response) => {
				expect(response.statusCode).toBe(200);
				expect(response.body.error).toBe(false);
				done();
			});
	});
	it("delete video", async (done) => {
		request.delete(`/api/videos/${currentVideo._id}`).then((response) => {
			expect(response.statusCode).toBe(200);
			expect(response.body.error).toBe(false);
			done();
		});
	});
});
