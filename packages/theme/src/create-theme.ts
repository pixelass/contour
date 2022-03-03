import { PartialTheme, Theme } from "@contour/utils/types";
import defaultTheme from "./theme";

const createTheme = (partialTheme: PartialTheme): Theme => {
	const hasNewKeys = Boolean(partialTheme.contour.breakpoints?.keys);
	const breakpoints = {
		keys: partialTheme.contour.breakpoints?.keys ?? defaultTheme.contour.breakpoints.keys,
		values: hasNewKeys
			? partialTheme.contour.breakpoints?.values
			: {
					...defaultTheme.contour.breakpoints.values,
					...(partialTheme.contour.breakpoints?.values ?? {}),
			  },
	};
	const mq = hasNewKeys
		? partialTheme.contour.mq
		: { ...defaultTheme.contour.mq, ...(partialTheme.contour.mq ?? {}) };
	const margin = hasNewKeys
		? partialTheme.contour.margin
		: { ...defaultTheme.contour.margin, ...(partialTheme.contour.margin ?? {}) };
	const gap = hasNewKeys
		? partialTheme.contour.gap
		: { ...defaultTheme.contour.gap, ...(partialTheme.contour.gap ?? {}) };
	const colCount = hasNewKeys
		? partialTheme.contour.colCount
		: { ...defaultTheme.contour.colCount, ...(partialTheme.contour.colCount ?? {}) };
	const spacing = partialTheme.contour.spacing ?? defaultTheme.contour.spacing;
	const theme: Theme = {
		contour: {
			breakpoints,
			mq,
			spacing,
			colCount,
			gap,
			margin,
		},
	};
	return theme;
};

export default createTheme;
