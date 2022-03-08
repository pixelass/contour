import { defaultTheme } from "@contour/theme";
import { CSS_VAR_RESET, cssVar, cssVarChain, PUBLIC_CSS_VARS } from "@contour/utils";
import { css } from "@emotion/react";
import { CSSObject } from "@emotion/serialize";

export const rowVars = ({
	contour: {
		breakpoints: {
			keys: [xs, s, m, l, xl],
		},
		mq,
	} = defaultTheme.contour,
} = defaultTheme) => css`
	${cssVar("colCount", xs)}: var(${CSS_VAR_RESET});
	${cssVar("colCount", s)}: var(${CSS_VAR_RESET});
	${cssVar("colCount", m)}: var(${CSS_VAR_RESET});
	${cssVar("colCount", l)}: var(${CSS_VAR_RESET});
	${cssVar("colCount", xl)}: var(${CSS_VAR_RESET});
	${PUBLIC_CSS_VARS.colCount}: ${cssVarChain([cssVar("colCount", xs), PUBLIC_CSS_VARS.colSpan])};

	${mq[s]} {
		${PUBLIC_CSS_VARS.colCount}: ${cssVarChain([
			cssVar("colCount", s),
			PUBLIC_CSS_VARS.colSpan,
		])};
	}

	${mq[m]} {
		${PUBLIC_CSS_VARS.colCount}: ${cssVarChain([
			cssVar("colCount", m),
			PUBLIC_CSS_VARS.colSpan,
		])};
	}

	${mq[l]} {
		${PUBLIC_CSS_VARS.colCount}: ${cssVarChain([
			cssVar("colCount", l),
			PUBLIC_CSS_VARS.colSpan,
		])};
	}

	${mq[xl]} {
		${PUBLIC_CSS_VARS.colCount}: ${cssVarChain([
			cssVar("colCount", xl),
			PUBLIC_CSS_VARS.colSpan,
		])};
	}
`;

export const rowCommon = (overrides: CSSObject = {}) =>
	css({
		boxSizing: "border-box",
		alignItems: `var(${PUBLIC_CSS_VARS.align})`,
		justifyContent: `var(${PUBLIC_CSS_VARS.justify})`,
		margin: `0 calc(var(${PUBLIC_CSS_VARS.gapX}) / -2 * 1px)`,
		...overrides,
	});
