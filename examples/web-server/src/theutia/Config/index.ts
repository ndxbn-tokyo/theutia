import * as config from "config";

export default class Config {
	public get<T>(key: string): T {
		return config.get<T>(key);
	}

	public has(key: string): boolean {
		return config.has(key);
	}
}
