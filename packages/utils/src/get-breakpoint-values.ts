import shallowMerge from "./shallow-merge";
import {
	isXBreakpointValues,
	isXYBreakpointValues,
	isYBreakpointValues,
} from "@contour/utils/type-guards";
import { BreakpointValues, PartialTheme, Theme, XYBreakpointValues } from "./types";

/**
 * Ensure x & y separation of properties. In the cases "gap" and "margin" the API allows specifying
 * a one or two-dimensional object to set the breakpoint values.
 *
 * * In case of a two-dimensional object, merge x & y.
 * * In case of a one-dimensional object, merge the object to x & y
 * * In case of new breakpoint-keys, full config is required, no merge with defaultTheme possible
 * @param partialTheme
 * @param defaultTheme
 * @param hasNewKeys
 * @param key
 */
const getBreakpointValues = (
	partialTheme: PartialTheme,
	defaultTheme: Theme,
	hasNewKeys: boolean,
	key: "gap" | "margin"
) => {
	const values: Partial<XYBreakpointValues<number>> = {};
	if (isXYBreakpointValues(partialTheme.contour[key])) {
		values.x = hasNewKeys
			? (partialTheme.contour[key] as XYBreakpointValues<number>).x
			: shallowMerge(
					defaultTheme.contour[key].x,
					(partialTheme.contour[key] as XYBreakpointValues<number>).x
			  );
		values.y = hasNewKeys
			? (partialTheme.contour[key] as XYBreakpointValues<number>).y
			: shallowMerge(
					defaultTheme.contour[key].y,
					(partialTheme.contour[key] as XYBreakpointValues<number>).y
			  );
	} else if (isXBreakpointValues(partialTheme.contour[key])) {
		values.x = hasNewKeys
			? (partialTheme.contour[key] as XYBreakpointValues<number>).x
			: shallowMerge(
					defaultTheme.contour[key].x,
					(partialTheme.contour[key] as XYBreakpointValues<number>).x
			  );
		values.y = defaultTheme.contour[key].y;
	} else if (isYBreakpointValues(partialTheme.contour[key])) {
		values.x = defaultTheme.contour[key].x;
		values.y = hasNewKeys
			? (partialTheme.contour[key] as XYBreakpointValues<number>).y
			: shallowMerge(
					defaultTheme.contour[key].y,
					(partialTheme.contour[key] as XYBreakpointValues<number>).y
			  );
	} else {
		values.x = hasNewKeys
			? (partialTheme.contour[key] as Partial<BreakpointValues<number>>)
			: shallowMerge(
					defaultTheme.contour[key].x,
					partialTheme.contour[key] as Partial<BreakpointValues<number>>
			  );
		values.y = hasNewKeys
			? (partialTheme.contour[key] as Partial<BreakpointValues<number>>)
			: shallowMerge(
					defaultTheme.contour[key].y,
					partialTheme.contour[key] as Partial<BreakpointValues<number>>
			  );
	}

	return values as XYBreakpointValues<number>;
};

export default getBreakpointValues;
