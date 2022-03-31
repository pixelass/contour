import id from "./id";
import { Axis, BreakpointValues, CSSVarKey } from "./types";

// Disabled for better debugging support
// export const IS_OBFUSCATED =  process.env.NODE_ENV === "production";
export const IS_OBFUSCATED = false;
export const CSS_VAR_PREFIX = IS_OBFUSCATED ? "" : "contour-";

export const CSS_VARS_MAP: Record<
	| keyof BreakpointValues
	| CSSVarKey
	| Axis
	| "alignContent"
	| "alignItems"
	| "justifyContent"
	| "display"
	| "vw",
	string
> = {
	alignContent: IS_OBFUSCATED ? id.generate() : "align-content",
	alignItems: IS_OBFUSCATED ? id.generate() : "align-items",
	justifyContent: IS_OBFUSCATED ? id.generate() : "justify-content",
	display: IS_OBFUSCATED ? id.generate() : "display",
	colCount: IS_OBFUSCATED ? id.generate() : "col-count",
	colSpan: IS_OBFUSCATED ? id.generate() : "col-span",
	colStart: IS_OBFUSCATED ? id.generate() : "col-start",
	gapX: IS_OBFUSCATED ? id.generate() : "gap-x",
	gapY: IS_OBFUSCATED ? id.generate() : "gap-y",
	marginX: IS_OBFUSCATED ? id.generate() : "margin-x",
	marginY: IS_OBFUSCATED ? id.generate() : "margin-y",
	breakoutLeft: IS_OBFUSCATED ? id.generate() : "breakout-left",
	breakoutRight: IS_OBFUSCATED ? id.generate() : "breakout-right",
	order: IS_OBFUSCATED ? id.generate() : "order",
	xs: IS_OBFUSCATED ? id.generate() : "xs",
	s: IS_OBFUSCATED ? id.generate() : "s",
	m: IS_OBFUSCATED ? id.generate() : "m",
	l: IS_OBFUSCATED ? id.generate() : "l",
	xl: IS_OBFUSCATED ? id.generate() : "xl",
	x: IS_OBFUSCATED ? id.generate() : "x",
	y: IS_OBFUSCATED ? id.generate() : "y",
	vw: IS_OBFUSCATED ? id.generate() : "vw",
};

export const CSS_VAR_RESET = `--${CSS_VAR_PREFIX}${IS_OBFUSCATED ? id.generate() : "reset"}`;

export const PUBLIC_CSS_VARS = {
	vw: `--${CSS_VAR_PREFIX}${CSS_VARS_MAP.vw}`,
	colCount: `--${CSS_VAR_PREFIX}${CSS_VARS_MAP.colCount}`,
	colSpan: `--${CSS_VAR_PREFIX}${CSS_VARS_MAP.colSpan}`,
	colStart: `--${CSS_VAR_PREFIX}${CSS_VARS_MAP.colStart}`,
	gapX: `--${CSS_VAR_PREFIX}${CSS_VARS_MAP.gapX}`,
	gapY: `--${CSS_VAR_PREFIX}${CSS_VARS_MAP.gapY}`,
	marginX: `--${CSS_VAR_PREFIX}${CSS_VARS_MAP.marginX}`,
	marginY: `--${CSS_VAR_PREFIX}${CSS_VARS_MAP.marginY}`,
	order: `--${CSS_VAR_PREFIX}${CSS_VARS_MAP.order}`,
	breakoutLeft: `--${CSS_VAR_PREFIX}${CSS_VARS_MAP.breakoutLeft}`,
	breakoutRight: `--${CSS_VAR_PREFIX}${CSS_VARS_MAP.breakoutRight}`,
	alignContent: `--${CSS_VAR_PREFIX}${CSS_VARS_MAP.alignContent}`,
	alignItems: `--${CSS_VAR_PREFIX}${CSS_VARS_MAP.alignItems}`,
	justifyContent: `--${CSS_VAR_PREFIX}${CSS_VARS_MAP.justifyContent}`,
	display: `--${CSS_VAR_PREFIX}${CSS_VARS_MAP.display}`,
};
