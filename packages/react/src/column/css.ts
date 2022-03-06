import defaultTheme from "@contour/theme/theme";
import { CSS_VAR_RESET, PUBLIC_CSS_VARS } from "@contour/utils/constants";
import { cssVar, cssVarChain } from "@contour/utils/css";
import { css } from "@emotion/react";
import { CSSObject } from "@emotion/serialize";

export const columnVars = ({
	contour: {
		breakpoints: {
			keys: [xs, s, m, l, xl],
		},
		mq,
	} = defaultTheme.contour,
} = defaultTheme) => css`
	${cssVar("colSpan", xs)}: var(${CSS_VAR_RESET});
	${cssVar("colSpan", s)}: var(${CSS_VAR_RESET});
	${cssVar("colSpan", m)}: var(${CSS_VAR_RESET});
	${cssVar("colSpan", l)}: var(${CSS_VAR_RESET});
	${cssVar("colSpan", xl)}: var(${CSS_VAR_RESET});
	${cssVar("order", xs)}: var(${CSS_VAR_RESET});
	${cssVar("order", s)}: var(${CSS_VAR_RESET});
	${cssVar("order", m)}: var(${CSS_VAR_RESET});
	${cssVar("order", l)}: var(${CSS_VAR_RESET});
	${cssVar("order", xl)}: var(${CSS_VAR_RESET});
	${PUBLIC_CSS_VARS.colSpan}: ${cssVarChain([cssVar("colSpan", xs), PUBLIC_CSS_VARS.colCount])};
	${PUBLIC_CSS_VARS.order}: var(${cssVar("order", xs)});

	${mq[s]} {
		${PUBLIC_CSS_VARS.colSpan}: ${cssVarChain([
			cssVar("colSpan", s),
			cssVar("colSpan", xs),
			PUBLIC_CSS_VARS.colCount,
		])};
		${PUBLIC_CSS_VARS.order}: var(${cssVar("order", s)});
	}

	${mq[m]} {
		${PUBLIC_CSS_VARS.colSpan}: ${cssVarChain([
			cssVar("colSpan", m),
			cssVar("colSpan", s),
			cssVar("colSpan", xs),
			PUBLIC_CSS_VARS.colCount,
		])};
		${PUBLIC_CSS_VARS.order}: var(${cssVar("order", m)});
	}

	${mq[l]} {
		${PUBLIC_CSS_VARS.colSpan}: ${cssVarChain([
			cssVar("colSpan", l),
			cssVar("colSpan", m),
			cssVar("colSpan", s),
			cssVar("colSpan", xs),
			PUBLIC_CSS_VARS.colCount,
		])};
		${PUBLIC_CSS_VARS.order}: var(${cssVar("order", l)});
	}

	${mq[xl]} {
		${PUBLIC_CSS_VARS.colSpan}: ${cssVarChain([
			cssVar("colSpan", xl),
			cssVar("colSpan", l),
			cssVar("colSpan", m),
			cssVar("colSpan", s),
			cssVar("colSpan", xs),
			PUBLIC_CSS_VARS.colCount,
		])};
		${PUBLIC_CSS_VARS.order}: var(${cssVar("order", xl)});
	}
`;

export const columnCommon = (overrides: CSSObject = {}) =>
	css({
		display: ` var(${PUBLIC_CSS_VARS.display})`,
		boxSizing: "border-box",
		alignItems: `var(${PUBLIC_CSS_VARS.align})`,
		justifyContent: `var(${PUBLIC_CSS_VARS.justify})`,
		order: ` var(${PUBLIC_CSS_VARS.order})`,
		...overrides,
	});
