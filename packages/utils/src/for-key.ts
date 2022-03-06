/**
 * Run a safe for of loop.
 * A callback can be used to get access to the loop context.
 * The callback is executed when an entry of `items` is a property of `value`
 * @param value
 * @param items
 * @param callback
 */
const forKey = <T>(
	value: Record<string, T>,
	items: string[],
	callback: (key: string, value: T) => void
) => {
	for (const key of items) {
		if (Object.prototype.hasOwnProperty.call(value, key)) {
			callback(key, value[key]);
		}
	}
};

export default forKey;
