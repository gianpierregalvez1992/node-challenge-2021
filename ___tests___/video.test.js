const VideoController = require("../src/Controllers/Video");
const FavoriteVideoController = require("../src/Controllers/FavoriteVideo");

describe("Video / Favorite Methods", () => {
	it("create video: should return error with fields validations", async () => {
		const statusCode = 422;
		const request = {
			body: {},
		};

		const response = {};
		response.status = jest.fn((status) => ({
			json: jest.fn((responseData) => ({
				response: { ...responseData, statusCode: status },
			})),
		}));
		const apiResponse = await VideoController.create(request, response, null);
		expect(apiResponse.response.statusCode).toBe(statusCode);
		expect(apiResponse.response.error).toBe(true);
		expect(apiResponse.response).toHaveProperty("details");
	});
	it("create favorite: should return error with fields validations", async () => {
		const statusCode = 422;
		const request = {
			body: {},
		};

		const response = {};
		response.status = jest.fn((status) => ({
			json: jest.fn((responseData) => ({
				response: { ...responseData, statusCode: status },
			})),
		}));
		const apiResponse = await FavoriteVideoController.create(
			request,
			response,
			null
		);
		expect(apiResponse.response.statusCode).toBe(statusCode);
		expect(apiResponse.response.error).toBe(true);
		expect(apiResponse.response).toHaveProperty("details");
	});
});
