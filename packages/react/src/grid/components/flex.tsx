/// <reference types="@emotion/react/types/css-prop" />
import defaultTheme from "@contour/theme/theme";
import { PUBLIC_CSS_VARS } from "@contour/utils/constants";
import { getCSSVars } from "@contour/utils/css";
import { resolveSx } from "@contour/utils/resolve-sx";
import { FlexGridProps } from "@contour/utils/types";
import { css } from "@emotion/react";
import React, { CSSProperties, memo } from "react";
import { gridCommon, gridVars } from "../css";

const flexGrid = (theme = defaultTheme) => css`
	${gridVars(theme)};
	${gridCommon(theme)};

	display: flex;
	flex-wrap: wrap;
	padding: 0 calc((var(${PUBLIC_CSS_VARS.margin}) - var(${PUBLIC_CSS_VARS.gap}) / 2) * 1px);
`;

const FlexGrid = ({
	as: Component = "div",
	strategy,
	align,
	justify,
	colCount = {},
	style = {},
	gap = {},
	margin = {},
	sx = {},
	...props
}: FlexGridProps) => {
	const colCountVars = getCSSVars("colCount", colCount);
	const gapVars = getCSSVars("gap", gap);
	const marginVars = getCSSVars("margin", margin);
	return (
		<Component
			{...props}
			css={[flexGrid, resolveSx(sx)]}
			style={
				{
					...style,
					...colCountVars,
					...gapVars,
					...marginVars,
					[PUBLIC_CSS_VARS.align]: align,
					[PUBLIC_CSS_VARS.justify]: justify,
				} as CSSProperties
			}
		/>
	);
};

export default memo(FlexGrid);
