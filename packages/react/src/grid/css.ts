import { defaultTheme } from "@contour/theme";
import { CSS_VAR_RESET, PUBLIC_CSS_VARS } from "@contour/utils/constants";
import { cssVar, pxToRem } from "@contour/utils/utils";
import { css } from "@emotion/react";

export const gridVars = ({ contour = defaultTheme.contour } = defaultTheme) => css`
	${CSS_VAR_RESET}: initial;
	${cssVar("colCount", "xs")}: ${contour.colCount.xs};
	${cssVar("colCount", "s")}: ${contour.colCount.s};
	${cssVar("colCount", "m")}: ${contour.colCount.m};
	${cssVar("colCount", "l")}: ${contour.colCount.l};
	${cssVar("colCount", "xl")}: ${contour.colCount.xl};
	${cssVar("gap", "xs")}: ${contour.gap.xs};
	${cssVar("gap", "s")}: ${contour.gap.s};
	${cssVar("gap", "m")}: ${contour.gap.m};
	${cssVar("gap", "l")}: ${contour.gap.l};
	${cssVar("gap", "xl")}: ${contour.gap.xl};
	${cssVar("margin", "xs")}: ${contour.margin.xs};
	${cssVar("margin", "s")}: ${contour.margin.s};
	${cssVar("margin", "m")}: ${contour.margin.m};
	${cssVar("margin", "l")}: ${contour.margin.l};
	${cssVar("margin", "xl")}: ${contour.margin.xl};
	${PUBLIC_CSS_VARS.colCount}: var(${cssVar("colCount", "xs")});
	${PUBLIC_CSS_VARS.gap}: var(${cssVar("gap", "xs")});
	${PUBLIC_CSS_VARS.margin}: var(${cssVar("margin", "xs")});

	${contour.mq.s} {
		${PUBLIC_CSS_VARS.colCount}: var(${cssVar("colCount", "s")});
		${PUBLIC_CSS_VARS.gap}: var(${cssVar("gap", "xs")});
		${PUBLIC_CSS_VARS.margin}: var(${cssVar("margin", "xs")});
	}

	${contour.mq.m} {
		${PUBLIC_CSS_VARS.colCount}: var(${cssVar("colCount", "m")});
		${PUBLIC_CSS_VARS.gap}: var(${cssVar("gap", "m")});
		${PUBLIC_CSS_VARS.margin}: var(${cssVar("margin", "m")});
	}

	${contour.mq.l} {
		${PUBLIC_CSS_VARS.colCount}: var(${cssVar("colCount", "l")});
		${PUBLIC_CSS_VARS.gap}: var(${cssVar("gap", "l")});
		${PUBLIC_CSS_VARS.margin}: var(${cssVar("margin", "l")});
	}

	${contour.mq.xl} {
		${PUBLIC_CSS_VARS.colCount}: var(${cssVar("colCount", "xl")});
		${PUBLIC_CSS_VARS.gap}: var(${cssVar("gap", "xl")});
		${PUBLIC_CSS_VARS.margin}: var(${cssVar("margin", "xl")});
	}
`;

export const gridCommon = ({ contour = defaultTheme.contour } = defaultTheme) => css`
	box-sizing: border-box;
	align-items: var(${PUBLIC_CSS_VARS.align});
	justify-content: var(${PUBLIC_CSS_VARS.justify});
	max-width: ${pxToRem(contour.breakpoints.xl)};
	margin-right: auto;
	margin-left: auto;
`;
