/**
 * Run a safe for in loop.
 * A callback can be used to get access to the loop context.
 * @param values
 * @param callback
 */
const forIn = <T>(values: T, callback: (key: keyof T, value: T[keyof T]) => void) => {
	for (const key in values) {
		if (Object.prototype.hasOwnProperty.call(values, key)) {
			callback(key, values[key]);
		}
	}
};

export default forIn;
