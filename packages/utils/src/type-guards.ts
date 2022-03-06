import { CSSProperties } from "react";
import { Except } from "type-fest";
import { AtMediaQuery, BreakpointKey, BreakpointValues, XYBreakpointValues } from "./types";

export const isXYBreakpointValues = (
	values: Partial<XYBreakpointValues<number>> | Partial<BreakpointValues<number>>
): values is XYBreakpointValues<number> => {
	return Boolean(
		Object.prototype.hasOwnProperty.call(values ?? {}, "x") &&
			Object.prototype.hasOwnProperty.call(values ?? {}, "y")
	);
};

export const isXBreakpointValues = (
	values: Partial<XYBreakpointValues<number>> | Partial<BreakpointValues<number>>
): values is Except<XYBreakpointValues<number>, "y"> => {
	return Boolean(Object.prototype.hasOwnProperty.call(values ?? {}, "x"));
};

export const isYBreakpointValues = (
	values: Partial<XYBreakpointValues<number>> | Partial<BreakpointValues<number>>
): values is Except<XYBreakpointValues<number>, "x"> => {
	return Boolean(Object.prototype.hasOwnProperty.call(values ?? {}, "y"));
};

export const isBreakpointValues = <T>(
	values:
		| string
		| number
		| BreakpointValues<T>
		| Record<AtMediaQuery, CSSProperties>
		| CSSProperties,
	breakpoints: BreakpointKey[]
): values is BreakpointValues<T> => {
	if (typeof values === "number" || typeof values === "string") {
		return false;
	}

	if (typeof values === "object") {
		for (const breakpoint of breakpoints) {
			if (Object.prototype.hasOwnProperty.call(values, breakpoint)) {
				return true;
			}
		}
	}

	return false;
};
