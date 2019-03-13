import Logger from "./Logger";
import * as express from "express";
import Container from "./Container";
import Config from "./Config";

export default class Application {
	private readonly applicationRootPath: string;

	/**
	 * This logger is framework internal logger.
	 */
	private readonly internalLogger: Logger;

	public readonly container: Container;

	public constructor(applicationRootPath: string) {
		this.applicationRootPath = applicationRootPath;
		this.internalLogger = new Logger();

		this.container = new Container();

		// core
		this.container.set("logger", new Logger());
		this.container.set("config", new Config());
	}

	public async start(): Promise<string> {
		await this.internalLogger.write("application start: " + this.applicationRootPath);

		const webServer = express();
		webServer.get("/", (request, response) => {
			response.json({
				protocol: request.protocol,
				host: request.hostname
			});
		});
		webServer.listen(8000);

		return "started";
	}
}
