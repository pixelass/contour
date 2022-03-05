import getBreakpointValues from "@contour/utils/get-breakpoint-values";
import shallowMerge from "@contour/utils/shallow-merge";
import { PartialTheme, Theme } from "@contour/utils/types";
import defaultTheme from "@contour/theme/theme";

const createTheme = (partialTheme: PartialTheme): Theme => {
	const hasNewKeys = Boolean(partialTheme.contour.breakpoints?.keys);
	const gap = getBreakpointValues(partialTheme, defaultTheme, hasNewKeys, "gap");
	const margin = getBreakpointValues(partialTheme, defaultTheme, hasNewKeys, "margin");
	const breakpoints = {
		keys: partialTheme.contour.breakpoints?.keys ?? defaultTheme.contour.breakpoints.keys,
		values: hasNewKeys
			? partialTheme.contour.breakpoints?.values
			: shallowMerge(
					defaultTheme.contour.breakpoints.values,
					partialTheme.contour.breakpoints?.values
			  ),
	};
	const mq = hasNewKeys
		? partialTheme.contour.mq
		: shallowMerge(defaultTheme.contour.mq, partialTheme.contour.mq);
	const colCount = hasNewKeys
		? partialTheme.contour.colCount
		: shallowMerge(defaultTheme.contour.colCount, partialTheme.contour.colCount);
	const spacing = partialTheme.contour.spacing ?? defaultTheme.contour.spacing;

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
