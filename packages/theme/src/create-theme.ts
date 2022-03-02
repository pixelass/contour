import { PartialTheme, Theme } from "@contour/utils/types";
import defaultTheme from "./theme";

const createTheme = (partialTheme: PartialTheme): Theme => {
	const breakpoints = {
		keys: partialTheme.contour.breakpoints?.keys ?? defaultTheme.contour.breakpoints.keys,
		values: partialTheme.contour.breakpoints?.values ?? defaultTheme.contour.breakpoints.values,
	};
	const mq = partialTheme.contour.mq ?? defaultTheme.contour.mq;
	const margin = partialTheme.contour.margin ?? defaultTheme.contour.margin;
	const gap = partialTheme.contour.gap ?? defaultTheme.contour.gap;
	const colCount = partialTheme.contour.colCount ?? defaultTheme.contour.colCount;
	const theme: Theme = {
		contour: {
			breakpoints,
			mq,
			colCount,
			gap,
			margin,
		},
	};
	return theme;
};

export default createTheme;
