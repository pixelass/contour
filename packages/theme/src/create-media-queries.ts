import { BreakpointValues, MediaQueries, pxToRem } from "@contour/utils";

const createMediaQueries = (breakpoints: BreakpointValues<number>): MediaQueries => {
	const mediaQueries = {};
	for (const key in breakpoints) {
		if (Object.prototype.hasOwnProperty.call(breakpoints, key)) {
			mediaQueries[key] = `@media (min-width: ${pxToRem(breakpoints[key])})`;
		}
	}

	return mediaQueries as MediaQueries;
};

export default createMediaQueries;
