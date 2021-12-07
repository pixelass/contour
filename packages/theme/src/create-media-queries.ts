import { pxToRem } from "@contour/utils/css";
import { BreakpointValues, MediaQueries } from "@contour/utils/types";

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
