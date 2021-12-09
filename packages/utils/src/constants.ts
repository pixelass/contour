import process from "process";
import id from "./id";
import { Axis, BreakpointValues, CSSVarKey } from "./types";

export const LOGO = "⃪";

export const IS_PROD = process.env.NODE_ENV === "production";
export const CSS_VAR_PREFIX = IS_PROD ? LOGO : "contour-";
export const CSS_VAR_SUFFIX = IS_PROD ? "" : "";

export const CSS_VARS_MAP: Record<
	keyof BreakpointValues | CSSVarKey | Axis | "align" | "justify" | "display" | "vw",
	string
> = {
	align: IS_PROD ? id.generate() : "align",
	justify: IS_PROD ? id.generate() : "justify",
	display: IS_PROD ? id.generate() : "display",
	colCount: IS_PROD ? id.generate() : "col-count",
	colSpan: IS_PROD ? id.generate() : "col-span",
	colStart: IS_PROD ? id.generate() : "col-start",
	gap: IS_PROD ? id.generate() : "gap",
	margin: IS_PROD ? id.generate() : "margin",
	breakoutLeft: IS_PROD ? id.generate() : "breakout-left",
	breakoutRight: IS_PROD ? id.generate() : "breakout-right",
	order: IS_PROD ? id.generate() : "order",
	xs: IS_PROD ? id.generate() : "-xs",
	s: IS_PROD ? id.generate() : "-s",
	m: IS_PROD ? id.generate() : "-m",
	l: IS_PROD ? id.generate() : "-l",
	xl: IS_PROD ? id.generate() : "-xl",
	x: IS_PROD ? id.generate() : "-x",
	y: IS_PROD ? id.generate() : "-y",
	vw: IS_PROD ? id.generate() : "-vw",
};

export const CSS_VAR_RESET = `--${CSS_VAR_PREFIX}${
	IS_PROD ? id.generate() : "reset"
}${CSS_VAR_SUFFIX}`;

export const PUBLIC_CSS_VARS = {
	vw: `--${CSS_VAR_PREFIX}${CSS_VARS_MAP.vw}${CSS_VAR_SUFFIX}`,
	colCount: `--${CSS_VAR_PREFIX}${CSS_VARS_MAP.colCount}${CSS_VAR_SUFFIX}`,
	colSpan: `--${CSS_VAR_PREFIX}${CSS_VARS_MAP.colSpan}${CSS_VAR_SUFFIX}`,
	colStart: `--${CSS_VAR_PREFIX}${CSS_VARS_MAP.colStart}${CSS_VAR_SUFFIX}`,
	gap: `--${CSS_VAR_PREFIX}${CSS_VARS_MAP.gap}${CSS_VAR_SUFFIX}`,
	margin: `--${CSS_VAR_PREFIX}${CSS_VARS_MAP.margin}${CSS_VAR_SUFFIX}`,
	order: `--${CSS_VAR_PREFIX}${CSS_VARS_MAP.order}${CSS_VAR_SUFFIX}`,
	breakoutLeft: `--${CSS_VAR_PREFIX}${CSS_VARS_MAP.breakoutLeft}${CSS_VAR_SUFFIX}`,
	breakoutRight: `--${CSS_VAR_PREFIX}${CSS_VARS_MAP.breakoutRight}${CSS_VAR_SUFFIX}`,
	align: `--${CSS_VAR_PREFIX}${CSS_VARS_MAP.align}${CSS_VAR_SUFFIX}`,
	justify: `--${CSS_VAR_PREFIX}${CSS_VARS_MAP.justify}${CSS_VAR_SUFFIX}`,
	display: `--${CSS_VAR_PREFIX}${CSS_VARS_MAP.display}${CSS_VAR_SUFFIX}`,
};
