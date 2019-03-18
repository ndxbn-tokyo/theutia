export interface Context {
	[key: string]: unknown;
}

export type LogLevel =
	| "emergency"
	| "alert"
	| "critical"
	| "error"
	| "warning"
	| "notice"
	| "info"
	| "debug";

/**
 * Describes a logger instance.
 *
 * This interface respects PSR-3 Logger Interface.
 *
 * The message MUST be a string or object implementing toString().
 *
 * The message MAY contain placeholders in the form: {foo} where foo will be replaced by the context data in key "foo".
 *
 * The context array can contain arbitrary data.
 * The only assumption that can be made by implementors is that if an Exception instance is given to produce a stack trace,
 * it MUST be in a key named "exception".
 *
 * See https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-3-logger-interface.md
 * for the full interface specification.
 */
export interface LoggerInterface {
	/**
	 * System is unusable.
	 *
	 * @param message
	 * @param context
	 */
	emergency(message: string, context?: Context): Promise<void>;

	/**
	 * Action must be taken immediately.
	 *
	 * Example: Entire website down, database unavailable, etc. This should
	 * trigger the SMS alerts and wake you up.
	 *
	 * @param message
	 * @param context
	 *
	 * @return void
	 */
	alert(message: string, context?: Context): Promise<void>;

	/**
	 * Critical conditions.
	 *
	 * Example: Application component unavailable, unexpected exception.
	 *
	 * @param message
	 * @param context
	 *
	 * @return void
	 */
	critical(message: string, context?: Context): Promise<void>;

	/**
	 * Runtime errors that do not require immediate action but should typically
	 * be logged and monitored.
	 *
	 * @param message
	 * @param context
	 *
	 * @return void
	 */
	error(message: string, context?: Context): Promise<void>;

	/**
	 * Exceptional occurrences that are not errors.
	 *
	 * Example: Use of deprecated APIs, poor use of an API, undesirable things
	 * that are not necessarily wrong.
	 *
	 * @param message
	 * @param context
	 *
	 * @return void
	 */
	warning(message: string, context?: Context): Promise<void>;

	/**
	 * Normal but significant events.
	 *
	 * @param message
	 * @param context
	 *
	 * @return void
	 */
	notice(message: string, context?: Context): Promise<void>;

	/**
	 * Interesting events.
	 *
	 * Example: User logs in, SQL logs.
	 *
	 * @param message
	 * @param context
	 *
	 * @return void
	 */
	info(message: string, context?: Context): Promise<void>;

	/**
	 * Detailed debug information.
	 *
	 * @param message
	 * @param context
	 *
	 * @return void
	 */
	debug(message: string, context?: Context): Promise<void>;

	/**
	 * Logs with an arbitrary level.
	 *
	 * @param level
	 * @param message
	 * @param context
	 *
	 * @return void
	 */
	log(level: LogLevel, message: string, context?: Context): Promise<void>;
}

/**
 * Describes a logger-aware instance.
 */
export interface LoggerAwareInterface {
	/**
	 * Sets a logger instance on the object.
	 *
	 * @param logger
	 * @return void
	 */
	setLogger(logger: LoggerInterface): void;
}

/**
 * constructor type
 *
 * This will move `theutia/types` or `theutia/core`
 */
export type constructor<T> = { new(...args: any[]): T };
