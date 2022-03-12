import { Theme } from "./types";

/**
 * Multiplies the value by the spacing and converts the value to rem.
 * Strings remain untouched.
 * @param value
 * @param spacing
 */
const withSpacing = (value: number | string, spacing: Theme["contour"]["spacing"]) =>
	typeof value === "number" ? spacing(value) : value;

export default withSpacing;
