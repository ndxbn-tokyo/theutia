import * as winston from "winston";

export default class Logger {
	private readonly logger: winston.Logger;

	public constructor() {
		this.logger = winston.createLogger({
			levels: winston.config.syslog.levels,
			transports: [
				new winston.transports.Console({level: "info"})
			]
		});
	}

	public async write(message: string): Promise<Logger> {
		this.logger.info(message);
		return this;
	}
}
