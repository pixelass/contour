import process from "process";
import id from "./id";
import { Axis, BreakpointValues, CSSVarKey } from "./types";

export const LOGO = "⃪";

export const CSS_VAR_PREFIX = process.env.NODE_ENV === "production" ? LOGO : "contour-";
export const CSS_VAR_SUFFIX = process.env.NODE_ENV === "production" ? "" : "";

export const CSS_VARS_MAP: Record<
	keyof BreakpointValues | CSSVarKey | Axis | "align" | "justify" | "display" | "vw",
	string
> = {
	align: process.env.NODE_ENV === "production" ? id.generate() : "align",
	justify: process.env.NODE_ENV === "production" ? id.generate() : "justify",
	display: process.env.NODE_ENV === "production" ? id.generate() : "display",
	colCount: process.env.NODE_ENV === "production" ? id.generate() : "col-count",
	colSpan: process.env.NODE_ENV === "production" ? id.generate() : "col-span",
	colStart: process.env.NODE_ENV === "production" ? id.generate() : "col-start",
	gap: process.env.NODE_ENV === "production" ? id.generate() : "gap",
	margin: process.env.NODE_ENV === "production" ? id.generate() : "margin",
	breakoutLeft: process.env.NODE_ENV === "production" ? id.generate() : "breakout-left",
	breakoutRight: process.env.NODE_ENV === "production" ? id.generate() : "breakout-right",
	order: process.env.NODE_ENV === "production" ? id.generate() : "order",
	xs: process.env.NODE_ENV === "production" ? id.generate() : "-xs",
	s: process.env.NODE_ENV === "production" ? id.generate() : "-s",
	m: process.env.NODE_ENV === "production" ? id.generate() : "-m",
	l: process.env.NODE_ENV === "production" ? id.generate() : "-l",
	xl: process.env.NODE_ENV === "production" ? id.generate() : "-xl",
	x: process.env.NODE_ENV === "production" ? id.generate() : "-x",
	y: process.env.NODE_ENV === "production" ? id.generate() : "-y",
	vw: process.env.NODE_ENV === "production" ? id.generate() : "-vw",
};

export const CSS_VAR_RESET = `--${CSS_VAR_PREFIX}${
	process.env.NODE_ENV === "production" ? id.generate() : "reset"
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
