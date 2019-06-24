import Logger from "./Logger";
import * as express from "express";
import * as http from "http";
import Container from "./Container";
import Config from "./Config";

export default class Application {
	/**
	 * Current Working Directory
	 */
	private readonly applicationRootPath: string;

	/**
	 * Application Class Internal Logger
	 */
	private readonly internalLogger: Logger;

	/**
	 * Dependencies Container
	 */
	public readonly container: Container;

	public constructor(applicationRootPath: string) {
		this.applicationRootPath = applicationRootPath;
		this.internalLogger = new Logger();

		this.container = new Container();

		// core
		this.container.set("logger", new Logger());
		this.container.set("config", new Config());
	}

	public async start(): Promise<http.Server> {
		await this.internalLogger.write(
			"application start: " + this.applicationRootPath
		);

		const webServer = express();
		webServer.get("/", (request, response) => {
			response.json({
				protocol: request.protocol,
				host: request.hostname
			});
		});
		return webServer.listen(8000);
	}
}
