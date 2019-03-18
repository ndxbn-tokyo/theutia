import {constructor, LoggerAwareInterface, LoggerInterface} from "./types";
import NullLogger from "./NullLogger";


/**
 * Basic Implementation of LoggerAwareInterface.
 */
export default function LoggerAwareTrait(): (constructor: constructor<any>) => LoggerAwareInterface {
	return function (constructor: constructor<any>): LoggerAwareInterface {

		// @ts-ignore
		return class extends constructor implements LoggerAwareInterface {

			/**
			 * The logger instance.
			 */
				// @ts-ignore
			private logger: LoggerInterface = new NullLogger();

			/**
			 * Sets a logger.
			 *
			 * @param logger
			 */
			public setLogger(logger: LoggerInterface): void {
				this.logger = logger;
			}
		};
	}
}
