import { BreakpointValues, Mediaqueries } from "@contour/utils/types";
import { pxToRem } from "@contour/utils/utils";

const createMediaqueries = (breakpoints: BreakpointValues<number>): Mediaqueries => {
	const mediaqueries = {};
	for (const key in breakpoints) {
		if (Object.prototype.hasOwnProperty.call(breakpoints, key)) {
			mediaqueries[key] = `@media (min-width: ${pxToRem(breakpoints[key])})`;
		}
	}

	return mediaqueries as Mediaqueries;
};

export default createMediaqueries;
