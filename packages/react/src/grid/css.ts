import { CSS_VAR_RESET, PUBLIC_CSS_VARS } from "@contour/utils/constants";
import { Theme } from "@contour/utils/types";
import { cssVar, pxToRem } from "@contour/utils/utils";
import { css } from "@emotion/react";

export const gridVars = (theme: Theme) => css`
	${CSS_VAR_RESET}: initial;
	${cssVar("colCount", "xs")}: ${theme.contour.colCount.xs};
	${cssVar("colCount", "s")}: ${theme.contour.colCount.s};
	${cssVar("colCount", "m")}: ${theme.contour.colCount.m};
	${cssVar("colCount", "l")}: ${theme.contour.colCount.l};
	${cssVar("colCount", "xl")}: ${theme.contour.colCount.xl};
	${cssVar("gap", "xs")}: ${theme.contour.gap.xs};
	${cssVar("gap", "s")}: ${theme.contour.gap.s};
	${cssVar("gap", "m")}: ${theme.contour.gap.m};
	${cssVar("gap", "l")}: ${theme.contour.gap.l};
	${cssVar("gap", "xl")}: ${theme.contour.gap.xl};
	${cssVar("margin", "xs")}: ${theme.contour.margin.xs};
	${cssVar("margin", "s")}: ${theme.contour.margin.s};
	${cssVar("margin", "m")}: ${theme.contour.margin.m};
	${cssVar("margin", "l")}: ${theme.contour.margin.l};
	${cssVar("margin", "xl")}: ${theme.contour.margin.xl};
	${PUBLIC_CSS_VARS.colCount}: var(${cssVar("colCount", "xs")});
	${PUBLIC_CSS_VARS.gap}: var(${cssVar("gap", "xs")});
	${PUBLIC_CSS_VARS.margin}: var(${cssVar("margin", "xs")});

	${theme.contour.mq.s} {
		${PUBLIC_CSS_VARS.colCount}: var(${cssVar("colCount", "s")});
		${PUBLIC_CSS_VARS.gap}: var(${cssVar("gap", "xs")});
		${PUBLIC_CSS_VARS.margin}: var(${cssVar("margin", "xs")});
	}

	${theme.contour.mq.m} {
		${PUBLIC_CSS_VARS.colCount}: var(${cssVar("colCount", "m")});
		${PUBLIC_CSS_VARS.gap}: var(${cssVar("gap", "m")});
		${PUBLIC_CSS_VARS.margin}: var(${cssVar("margin", "m")});
	}

	${theme.contour.mq.l} {
		${PUBLIC_CSS_VARS.colCount}: var(${cssVar("colCount", "l")});
		${PUBLIC_CSS_VARS.gap}: var(${cssVar("gap", "l")});
		${PUBLIC_CSS_VARS.margin}: var(${cssVar("margin", "l")});
	}

	${theme.contour.mq.xl} {
		${PUBLIC_CSS_VARS.colCount}: var(${cssVar("colCount", "xl")});
		${PUBLIC_CSS_VARS.gap}: var(${cssVar("gap", "xl")});
		${PUBLIC_CSS_VARS.margin}: var(${cssVar("margin", "xl")});
	}
`;

export const gridCommon = (theme: Theme) => css`
	box-sizing: border-box;
	align-items: var(${PUBLIC_CSS_VARS.align});
	justify-content: var(${PUBLIC_CSS_VARS.justify});
	max-width: ${pxToRem(theme.contour.breakpoints.xl)};
	margin-right: auto;
	margin-left: auto;
`;
