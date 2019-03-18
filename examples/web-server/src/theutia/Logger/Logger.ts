import * as winston from "winston";
import { Context, LoggerInterface, LogLevel } from "./types";

export default class Logger implements LoggerInterface {
	private readonly logger: winston.Logger;

	public constructor() {
		this.logger = winston.createLogger({
			levels: winston.config.syslog.levels,
			transports: [new winston.transports.Console({ level: "info" })]
		});
	}

	public async write(message: string): Promise<Logger> {
		await this.debug(message);
		return this;
	}

	public async emergency(message: string, context?: Context): Promise<void> {
		this.logger.emerg(message, context);
	}

	public async alert(message: string, context?: Context): Promise<void> {
		this.logger.alert(message, context);
	}

	public async critical(message: string, context?: Context): Promise<void> {
		this.logger.crit(message, context);
	}

	public async error(message: string, context?: Context): Promise<void> {
		this.logger.error(message, context);
	}

	public async warning(message: string, context?: Context): Promise<void> {
		this.logger.warning(message, context);
	}

	public async notice(message: string, context?: Context): Promise<void> {
		this.logger.notice(message, context);
	}

	public async info(message: string, context?: Context): Promise<void> {
		this.logger.info(message, context);
	}

	public async debug(message: string, context?: Context): Promise<void> {
		this.logger.debug(message, context);
	}

	public async log(
		level: LogLevel,
		message: string,
		context?: Context
	): Promise<void> {
		this.logger.log(level, message, context);
	}
}
