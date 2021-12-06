import { defaultTheme } from "@contour/theme";
import { CSS_VAR_RESET, PUBLIC_CSS_VARS } from "@contour/utils/constants";
import { cssVar, cssVarChain } from "@contour/utils/utils";
import { css } from "@emotion/react";

export const columnVars = ({ contour = defaultTheme.contour } = defaultTheme) => css`
	${cssVar("colSpan", "xs")}: var(${CSS_VAR_RESET});
	${cssVar("colSpan", "s")}: var(${CSS_VAR_RESET});
	${cssVar("colSpan", "m")}: var(${CSS_VAR_RESET});
	${cssVar("colSpan", "l")}: var(${CSS_VAR_RESET});
	${cssVar("colSpan", "xl")}: var(${CSS_VAR_RESET});
	${cssVar("order", "xs")}: var(${CSS_VAR_RESET});
	${cssVar("order", "s")}: var(${CSS_VAR_RESET});
	${cssVar("order", "m")}: var(${CSS_VAR_RESET});
	${cssVar("order", "l")}: var(${CSS_VAR_RESET});
	${cssVar("order", "xl")}: var(${CSS_VAR_RESET});
	${PUBLIC_CSS_VARS.colSpan}: ${cssVarChain([cssVar("colSpan", "xs"), PUBLIC_CSS_VARS.colCount])};
	${PUBLIC_CSS_VARS.order}: var(${cssVar("order", "xs")});

	${contour.mq.s} {
		${PUBLIC_CSS_VARS.colSpan}: ${cssVarChain([
			cssVar("colSpan", "s"),
			cssVar("colSpan", "xs"),
			PUBLIC_CSS_VARS.colCount,
		])};
		${PUBLIC_CSS_VARS.order}: var(${cssVar("order", "s")});
	}

	${contour.mq.m} {
		${PUBLIC_CSS_VARS.colSpan}: ${cssVarChain([
			cssVar("colSpan", "m"),
			cssVar("colSpan", "s"),
			cssVar("colSpan", "xs"),
			PUBLIC_CSS_VARS.colCount,
		])};
		${PUBLIC_CSS_VARS.order}: var(${cssVar("order", "m")});
	}

	${contour.mq.l} {
		${PUBLIC_CSS_VARS.colSpan}: ${cssVarChain([
			cssVar("colSpan", "l"),
			cssVar("colSpan", "m"),
			cssVar("colSpan", "s"),
			cssVar("colSpan", "xs"),
			PUBLIC_CSS_VARS.colCount,
		])};
		${PUBLIC_CSS_VARS.order}: var(${cssVar("order", "l")});
	}

	${contour.mq.xl} {
		${PUBLIC_CSS_VARS.colSpan}: ${cssVarChain([
			cssVar("colSpan", "xl"),
			cssVar("colSpan", "l"),
			cssVar("colSpan", "m"),
			cssVar("colSpan", "s"),
			cssVar("colSpan", "xs"),
			PUBLIC_CSS_VARS.colCount,
		])};
		${PUBLIC_CSS_VARS.order}: var(${cssVar("order", "xl")});
	}
`;

export const columnCommon = css`
	display: var(${PUBLIC_CSS_VARS.display});
	box-sizing: border-box;
	align-items: var(${PUBLIC_CSS_VARS.align});
	justify-content: var(${PUBLIC_CSS_VARS.justify});
	order: var(${PUBLIC_CSS_VARS.order});
`;
