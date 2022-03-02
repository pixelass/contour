import { CSSProperties } from "react";
import { CSS_VAR_PREFIX, CSS_VAR_SUFFIX, CSS_VARS_MAP } from "./constants";
import { BreakpointValues, CSSVarKey } from "./types";

export const cssVar = (key: keyof typeof CSS_VARS_MAP, subKey?: string) =>
	`--${CSS_VAR_PREFIX}${CSS_VARS_MAP[key]}${
		subKey ? `-${CSS_VARS_MAP[subKey] ?? subKey}` : ""
	}${CSS_VAR_SUFFIX}`;

export const cssVarChain = (vars: Array<string | number>) => {
	const [current] = vars.splice(0, 1);
	return `var(${current}${
		vars.length > 0
			? `,${
					(typeof vars[0] === "string" && vars[0].startsWith("--")
						? cssVarChain(vars)
						: vars[0]) as string | number
			  }`
			: ""
	})`;
};

export const getCSSVars = <T = BreakpointValues>(prefix: CSSVarKey, object: Partial<T>) => {
	const cssVars: CSSProperties = {};
	for (const key in object) {
		if (Object.prototype.hasOwnProperty.call(object, key)) {
			cssVars[cssVar(prefix, key)] = object[key];
		}
	}

	return cssVars;
};

export const pxToRem = (value: number) => `${value / 16}rem`;
