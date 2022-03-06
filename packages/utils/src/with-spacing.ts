import { pxToRem } from "./css";

/**
 * Multiplies the value by the spacing and converts the value to rem.
 * Strings remain untouched.
 * @param value
 * @param spacing
 */
const withSpacing = (value: number | string, spacing: number) =>
	typeof value === "number" ? pxToRem(value * spacing) : value;

export default withSpacing;
