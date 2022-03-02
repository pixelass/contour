import defaultTheme from "@contour/theme/theme";
import { CSS_VAR_RESET, PUBLIC_CSS_VARS } from "@contour/utils/constants";
import { cssVar, pxToRem } from "@contour/utils/css";
import { css } from "@emotion/react";

export const gridVars = ({ contour = defaultTheme.contour } = defaultTheme) => {
	const {
		breakpoints: {
			keys: [xs, s, m, l, xl],
		},
		colCount,
		gap,
		margin,
		mq,
	} = contour;
	console.log("contour", contour);
	return css`
		${CSS_VAR_RESET}: initial;
		${cssVar("colCount", xs)}: ${colCount[xs]};
		${cssVar("colCount", s)}: ${colCount[s]};
		${cssVar("colCount", m)}: ${colCount[m]};
		${cssVar("colCount", l)}: ${colCount[l]};
		${cssVar("colCount", xl)}: ${colCount[xl]};
		${cssVar("gap", xs)}: ${gap[xs]};
		${cssVar("gap", s)}: ${gap[s]};
		${cssVar("gap", m)}: ${gap[m]};
		${cssVar("gap", l)}: ${gap[l]};
		${cssVar("gap", xl)}: ${gap[xl]};
		${cssVar("margin", xs)}: ${margin[xs]};
		${cssVar("margin", s)}: ${margin[s]};
		${cssVar("margin", m)}: ${margin[m]};
		${cssVar("margin", l)}: ${margin[l]};
		${cssVar("margin", xl)}: ${margin[xl]};
		${PUBLIC_CSS_VARS.colCount}: var(${cssVar("colCount", xs)});
		${PUBLIC_CSS_VARS.gap}: var(${cssVar("gap", xs)});
		${PUBLIC_CSS_VARS.margin}: var(${cssVar("margin", xs)});

		${mq[s]} {
			${PUBLIC_CSS_VARS.colCount}: var(${cssVar("colCount", s)});
			${PUBLIC_CSS_VARS.gap}: var(${cssVar("gap", xs)});
			${PUBLIC_CSS_VARS.margin}: var(${cssVar("margin", xs)});
		}

		${mq[m]} {
			${PUBLIC_CSS_VARS.colCount}: var(${cssVar("colCount", m)});
			${PUBLIC_CSS_VARS.gap}: var(${cssVar("gap", m)});
			${PUBLIC_CSS_VARS.margin}: var(${cssVar("margin", m)});
		}

		${mq[l]} {
			${PUBLIC_CSS_VARS.colCount}: var(${cssVar("colCount", l)});
			${PUBLIC_CSS_VARS.gap}: var(${cssVar("gap", l)});
			${PUBLIC_CSS_VARS.margin}: var(${cssVar("margin", l)});
		}

		${mq[xl]} {
			${PUBLIC_CSS_VARS.colCount}: var(${cssVar("colCount", xl)});
			${PUBLIC_CSS_VARS.gap}: var(${cssVar("gap", xl)});
			${PUBLIC_CSS_VARS.margin}: var(${cssVar("margin", xl)});
		}
	`;
};

export const gridCommon = ({
	contour: {
		breakpoints: {
			values,
			keys: [, , , , xl],
		},
	} = defaultTheme.contour,
} = defaultTheme) => css`
	box-sizing: border-box;
	align-items: var(${PUBLIC_CSS_VARS.align});
	justify-content: var(${PUBLIC_CSS_VARS.justify});
	max-width: ${pxToRem(values[xl])};
	margin: 0 auto;
`;
