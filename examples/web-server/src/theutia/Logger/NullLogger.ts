import AbstractLogger from "./AbstractLogger";
import {Context, LogLevel} from "./types";

export default class NullLogger extends AbstractLogger {
	public async log(_level: LogLevel, _message: string, _context?: Context): Promise<void> {
		// noop
	}
}
