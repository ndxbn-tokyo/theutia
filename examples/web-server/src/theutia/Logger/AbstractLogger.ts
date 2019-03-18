import { Context, LoggerInterface, LogLevel } from "./types";

/**
 * This is a simple Logger implementation that other Loggers can inherit from.
 *
 * It simply delegates all log-level-specific methods to the `log` method to
 * reduce boilerplate code that a simple Logger that does the same thing with
 * messages regardless of the error level has to implement.
 */
export default abstract class AbstractLogger implements LoggerInterface {
	/**
	 * @inheritDoc
	 */
	public async emergency(message: string, context?: Context): Promise<void> {
		await this.log("emergency", message, context);
	}

	/**
	 * @inheritDoc
	 */
	public async alert(message: string, context?: Context): Promise<void> {
		await this.log("alert", message, context);
	}

	/**
	 * @inheritDoc
	 */
	public async critical(message: string, context?: Context): Promise<void> {
		await this.log("critical", message, context);
	}

	/**
	 * @inheritDoc
	 */
	public async error(message: string, context?: Context): Promise<void> {
		await this.log("error", message, context);
	}

	/**
	 * @inheritDoc
	 */
	public async warning(message: string, context?: Context): Promise<void> {
		await this.log("warning", message, context);
	}

	/**
	 * @inheritDoc
	 */
	public async notice(message: string, context?: Context): Promise<void> {
		await this.log("notice", message, context);
	}

	/**
	 * @inheritDoc
	 */
	public async info(message: string, context?: Context): Promise<void> {
		await this.log("info", message, context);
	}

	/**
	 * @inheritDoc
	 */
	public async debug(message: string, context?: Context): Promise<void> {
		await this.log("debug", message, context);
	}

	/**
	 * @inheritDoc
	 */
	abstract async log(
		level: LogLevel,
		message: string,
		context?: Context
	): Promise<void>;
}
