import {
	BreakpointValues,
	getCSSVars,
	GridGridProps,
	isXBreakpointValues,
	isYBreakpointValues,
} from "@contour/utils";

export const getCommonVars = ({
	gap,
	margin,
	colCount,
}: Pick<GridGridProps, "gap" | "margin" | "colCount">) => {
	const gapX = isXBreakpointValues(gap)
		? gap.x
		: isYBreakpointValues(gap)
		? {}
		: (gap as Partial<BreakpointValues<number>>);
	const gapY = isYBreakpointValues(gap)
		? gap.y
		: isXBreakpointValues(gap)
		? {}
		: (gap as Partial<BreakpointValues<number>>);
	const marginX = isXBreakpointValues(margin)
		? margin.x
		: isYBreakpointValues(margin)
		? {}
		: (margin as Partial<BreakpointValues<number>>) ?? {};
	const marginY = isYBreakpointValues(margin)
		? margin.y
		: isXBreakpointValues(margin)
		? {}
		: (margin as Partial<BreakpointValues<number>>) ?? {};
	return {
		...getCSSVars("colCount", colCount),
		...getCSSVars("gapX", gapX),
		...getCSSVars("gapY", gapY),
		...getCSSVars("marginX", marginX),
		...getCSSVars("marginY", marginY),
	};
};
