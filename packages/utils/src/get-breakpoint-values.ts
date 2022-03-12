import remapObject from "./remap-object";
import shallowMerge from "./shallow-merge";
import { isXBreakpointValues, isXYBreakpointValues, isYBreakpointValues } from "./type-guards";
import { BreakpointKey, BreakpointValues, PartialTheme, Theme, XYBreakpointValues } from "./types";

/**
 * Ensure x & y separation of properties. In the cases "gap" and "margin" the API allows specifying
 * a one or two-dimensional object to set the breakpoint values.
 *
 * * In case of a two-dimensional object, merge x & y.
 * * In case of a one-dimensional object, merge the object to x & y
 * * In case of new breakpoint-keys, full config is required, no merge with defaultTheme possible
 * @param partialTheme
 * @param defaultTheme
 * @param key
 * @param keys
 */
const getBreakpointValues = (
	partialTheme: PartialTheme,
	defaultTheme: Theme,
	key: "gap" | "margin",
	keys: BreakpointKey[]
) => {
	const values: Partial<XYBreakpointValues<number>> = {};
	if (isXYBreakpointValues(partialTheme[key])) {
		values.x = shallowMerge(
			remapObject(defaultTheme.contour[key].x, keys),
			(partialTheme[key] as XYBreakpointValues<number>).x
		);
		values.y = shallowMerge(
			remapObject(defaultTheme.contour[key].y, keys),
			(partialTheme[key] as XYBreakpointValues<number>).y
		);
	} else if (isXBreakpointValues(partialTheme[key])) {
		values.x = shallowMerge(
			remapObject(defaultTheme.contour[key].x, keys),
			(partialTheme[key] as XYBreakpointValues<number>).x
		);
		values.y = defaultTheme.contour[key].y;
	} else if (isYBreakpointValues(partialTheme[key])) {
		values.x = defaultTheme.contour[key].x;
		values.y = shallowMerge(
			remapObject(defaultTheme.contour[key].y, keys),
			(partialTheme[key] as XYBreakpointValues<number>).y
		);
	} else {
		values.x = shallowMerge(
			remapObject(defaultTheme.contour[key].x, keys),
			partialTheme[key] as Partial<BreakpointValues<number>>
		);
		values.y = shallowMerge(
			remapObject(defaultTheme.contour[key].y, keys),
			partialTheme[key] as Partial<BreakpointValues<number>>
		);
	}

	return values as XYBreakpointValues<number>;
};

export default getBreakpointValues;
