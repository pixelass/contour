import { BreakpointValues, XYBreakpointValues } from "@contour/utils/types";
import { Except } from "type-fest";

export const isXYBreakpointValues = (
	values: Partial<XYBreakpointValues<number>> | Partial<BreakpointValues<number>>
): values is XYBreakpointValues<number> => {
	return Boolean(
		Object.prototype.hasOwnProperty.call(values, "x") &&
			Object.prototype.hasOwnProperty.call(values, "y")
	);
};

export const isXBreakpointValues = (
	values: Partial<XYBreakpointValues<number>> | Partial<BreakpointValues<number>>
): values is Except<XYBreakpointValues<number>, "y"> => {
	return Boolean(Object.prototype.hasOwnProperty.call(values, "x"));
};

export const isYBreakpointValues = (
	values: Partial<XYBreakpointValues<number>> | Partial<BreakpointValues<number>>
): values is Except<XYBreakpointValues<number>, "x"> => {
	return Boolean(Object.prototype.hasOwnProperty.call(values, "y"));
};
