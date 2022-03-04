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
		${cssVar("gapX", xs)}: ${gap.x[xs]};
		${cssVar("gapX", s)}: ${gap.x[s]};
		${cssVar("gapX", m)}: ${gap.x[m]};
		${cssVar("gapX", l)}: ${gap.x[l]};
		${cssVar("gapX", xl)}: ${gap.x[xl]};
		${cssVar("gapY", xs)}: ${gap.y[xs]};
		${cssVar("gapY", s)}: ${gap.y[s]};
		${cssVar("gapY", m)}: ${gap.y[m]};
		${cssVar("gapY", l)}: ${gap.y[l]};
		${cssVar("gapY", xl)}: ${gap.y[xl]};
		${cssVar("marginX", xs)}: ${margin.x[xs]};
		${cssVar("marginX", s)}: ${margin.x[s]};
		${cssVar("marginX", m)}: ${margin.x[m]};
		${cssVar("marginX", l)}: ${margin.x[l]};
		${cssVar("marginX", xl)}: ${margin.x[xl]};
		${cssVar("marginY", xs)}: ${margin.y[xs]};
		${cssVar("marginY", s)}: ${margin.y[s]};
		${cssVar("marginY", m)}: ${margin.y[m]};
		${cssVar("marginY", l)}: ${margin.y[l]};
		${cssVar("marginY", xl)}: ${margin.y[xl]};
		${PUBLIC_CSS_VARS.colCount}: var(${cssVar("colCount", xs)});
		${PUBLIC_CSS_VARS.gapX}: var(${cssVar("gapX", xs)});
		${PUBLIC_CSS_VARS.gapY}: var(${cssVar("gapY", xs)});
		${PUBLIC_CSS_VARS.marginX}: var(${cssVar("marginX", xs)});
		${PUBLIC_CSS_VARS.marginY}: var(${cssVar("marginY", xs)});

		${mq[s]} {
			${PUBLIC_CSS_VARS.colCount}: var(${cssVar("colCount", s)});
			${PUBLIC_CSS_VARS.gapX}: var(${cssVar("gapX", xs)});
			${PUBLIC_CSS_VARS.gapY}: var(${cssVar("gapY", xs)});
			${PUBLIC_CSS_VARS.marginX}: var(${cssVar("marginX", xs)});
			${PUBLIC_CSS_VARS.marginY}: var(${cssVar("marginY", xs)});
		}

		${mq[m]} {
			${PUBLIC_CSS_VARS.colCount}: var(${cssVar("colCount", m)});
			${PUBLIC_CSS_VARS.gapX}: var(${cssVar("gapX", m)});
			${PUBLIC_CSS_VARS.gapY}: var(${cssVar("gapY", m)});
			${PUBLIC_CSS_VARS.marginX}: var(${cssVar("marginX", m)});
			${PUBLIC_CSS_VARS.marginY}: var(${cssVar("marginY", m)});
		}

		${mq[l]} {
			${PUBLIC_CSS_VARS.colCount}: var(${cssVar("colCount", l)});
			${PUBLIC_CSS_VARS.gapX}: var(${cssVar("gapX", l)});
			${PUBLIC_CSS_VARS.gapY}: var(${cssVar("gapY", l)});
			${PUBLIC_CSS_VARS.marginX}: var(${cssVar("marginX", l)});
			${PUBLIC_CSS_VARS.marginY}: var(${cssVar("marginY", l)});
		}

		${mq[xl]} {
			${PUBLIC_CSS_VARS.colCount}: var(${cssVar("colCount", xl)});
			${PUBLIC_CSS_VARS.gapX}: var(${cssVar("gapX", xl)});
			${PUBLIC_CSS_VARS.gapY}: var(${cssVar("gapY", xl)});
			${PUBLIC_CSS_VARS.marginX}: var(${cssVar("marginX", xl)});
			${PUBLIC_CSS_VARS.marginY}: var(${cssVar("marginY", xl)});
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
