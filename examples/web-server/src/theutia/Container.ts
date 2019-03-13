export default class Container {
	private readonly container: Map<string, unknown>;

	public constructor() {
		this.container = new Map();
	}

	public get(key: string): unknown {
		return this.container.get(key);
	}

	public has(key: string): boolean {
		return this.container.has(key);
	}

	public set(key: string, value: unknown): this {
		this.container.set(key, value);
		return this;
	}
}
