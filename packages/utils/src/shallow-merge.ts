/**
 * Performs a shallow merge with fallback
 * @param a
 * @param b
 */
const shallowMerge = <A, B>(a: A, b: B) => ({
	...a,
	...(b ?? {}),
});
export default shallowMerge;
