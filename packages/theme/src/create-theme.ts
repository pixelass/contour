import {
	getBreakpointValues,
	PartialTheme,
	pxToRem,
	remapObject,
	shallowMerge,
	Theme,
} from "@contour/utils";
import createMediaQueries from "./create-media-queries";
import defaultTheme from "./theme";

const createTheme = (partialTheme: PartialTheme): Theme => {
	const keys = partialTheme.breakpoints?.keys ?? defaultTheme.contour.breakpoints.keys;
	const gap = getBreakpointValues(partialTheme, defaultTheme, "gap", keys);
	const margin = getBreakpointValues(partialTheme, defaultTheme, "margin", keys);
	const breakpoints = {
		keys,
		values: shallowMerge(
			remapObject(defaultTheme.contour.breakpoints.values, keys),
			partialTheme.breakpoints?.values
		),
	};
	const mq = createMediaQueries(breakpoints.values);
	const colCount = shallowMerge(
		remapObject(defaultTheme.contour.colCount, keys),
		partialTheme.colCount
	);
	const spacing = (multiplier: number) => pxToRem(multiplier * (partialTheme.spacing ?? 8));
	return {
		contour: {
			breakpoints,
			mq,
			spacing,
			colCount,
			gap,
			margin,
		},
	};
};

export default createTheme;
