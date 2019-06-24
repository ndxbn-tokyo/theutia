import app from "../boostrap";

test("this test case always make success", () => {
	expect(true).toBe(true);
});

test("application start/stop", async () => {
	const server = await app.start();

	expect(server.listening).toBe(true);

	server.close();
	expect(server.listening).toBe(false);
});
