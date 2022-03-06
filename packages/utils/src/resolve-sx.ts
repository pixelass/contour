import { CSSObject } from "@emotion/serialize";
import aliases from "./aliases";
import forIn from "./for-in";
import forKey from "./for-key";
import { isBreakpointValues } from "./type-guards";
import { Sx, SXObject, Theme } from "./types";
import withSpacing from "./with-spacing";

/**
 * Creates an emotion compatible object from an SXObject.
 * @param sx
 */
const resolveSX = (sx: Sx) => (theme: Theme) => {
	// If sx is a function, call it with the theme
	// Else return the original object
	const sxResult: SXObject = typeof sx === "function" ? sx(theme) : sx;
	// This is the object that gets populated
	const cleanResult: CSSObject = {};

	forIn(sxResult, (key, value) => {
		// The key is one of the aliases
		if (Object.prototype.hasOwnProperty.call(aliases, key)) {
			// The value uses breakpoints
			if (isBreakpointValues(value, theme.contour.breakpoints.keys)) {
				forKey(value, theme.contour.breakpoints.keys, (breakpoint, breakpointValue) => {
					cleanResult[theme.contour.mq[breakpoint]] =
						cleanResult[theme.contour.mq[breakpoint]] ?? {};
					// Loop through all mapped properties for this alias
					for (const property of aliases[key]) {
						cleanResult[theme.contour.mq[breakpoint]][property] = withSpacing(
							breakpointValue,
							theme.contour.spacing
						);
					}
				});
			}
			// The value is does not use breakpoints
			// Repeat if of type `object`
			else if (typeof value === "object") {
				cleanResult[key] = resolveSX(value)(theme);
			}
			// Loop through all mapped properties for this alias
			else {
				for (const property of aliases[key]) {
					cleanResult[property] = withSpacing(value, theme.contour.spacing);
				}
			}
		}
		// The value uses breakpoints
		else if (isBreakpointValues(value, theme.contour.breakpoints.keys)) {
			forKey(value, theme.contour.breakpoints.keys, (breakpoint, breakpointValue) => {
				cleanResult[theme.contour.mq[breakpoint]] =
					cleanResult[theme.contour.mq[breakpoint]] ?? {};
				cleanResult[theme.contour.mq[breakpoint]][key] = breakpointValue;
			});
		}
		// The value is does not use breakpoints
		else {
			// This could be a nested selector
			// Repeat if of type `object`
			cleanResult[key] = typeof value === "object" ? resolveSX(value)(theme) : value;
		}
	});

	return cleanResult;
};

export default resolveSX;
