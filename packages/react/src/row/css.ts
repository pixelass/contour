import { defaultTheme } from "@contour/theme";
import { CSS_VAR_RESET, PUBLIC_CSS_VARS } from "@contour/utils/constants";
import { cssVar, cssVarChain } from "@contour/utils/utils";
import { css } from "@emotion/react";

export const rowVars = ({ contour = defaultTheme.contour } = defaultTheme) => css`
	${cssVar("colCount", "xs")}: var(${CSS_VAR_RESET});
	${cssVar("colCount", "s")}: var(${CSS_VAR_RESET});
	${cssVar("colCount", "m")}: var(${CSS_VAR_RESET});
	${cssVar("colCount", "l")}: var(${CSS_VAR_RESET});
	${cssVar("colCount", "xl")}: var(${CSS_VAR_RESET});
	${PUBLIC_CSS_VARS.colCount}: ${cssVarChain([
		cssVar("colCount", "xs"),
		PUBLIC_CSS_VARS.colSpan,
	])};

	${contour.mq.s} {
		${PUBLIC_CSS_VARS.colCount}: ${cssVarChain([
			cssVar("colCount", "s"),
			PUBLIC_CSS_VARS.colSpan,
		])};
	}

	${contour.mq.m} {
		${PUBLIC_CSS_VARS.colCount}: ${cssVarChain([
			cssVar("colCount", "m"),
			PUBLIC_CSS_VARS.colSpan,
		])};
	}

	${contour.mq.l} {
		${PUBLIC_CSS_VARS.colCount}: ${cssVarChain([
			cssVar("colCount", "l"),
			PUBLIC_CSS_VARS.colSpan,
		])};
	}

	${contour.mq.xl} {
		${PUBLIC_CSS_VARS.colCount}: ${cssVarChain([
			cssVar("colCount", "xl"),
			PUBLIC_CSS_VARS.colSpan,
		])};
	}
`;

export const rowCommon = css`
	box-sizing: border-box;
	align-items: var(${PUBLIC_CSS_VARS.align});
	justify-content: var(${PUBLIC_CSS_VARS.justify});
	margin-right: calc(var(${PUBLIC_CSS_VARS.gap}) / -2 * 1px);
	margin-left: calc(var(${PUBLIC_CSS_VARS.gap}) / -2 * 1px);
`;
