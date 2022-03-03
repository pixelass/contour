/// <reference types="@emotion/react/types/css-prop" />
import defaultTheme from "@contour/theme/theme";
import { PUBLIC_CSS_VARS } from "@contour/utils/constants";
import { getCSSVars } from "@contour/utils/css";
import { resolveSx } from "@contour/utils/resolve-sx";
import { GridGridProps } from "@contour/utils/types";
import { css } from "@emotion/react";
import React, { CSSProperties, memo } from "react";
import { gridCommon, gridVars } from "../css";

const gridGrid = (theme = defaultTheme) => css`
	${gridVars(theme)};
	${gridCommon(theme)};

	display: grid;
	gap: calc(var(${PUBLIC_CSS_VARS.gap}) * 1px);
	grid-template-columns: repeat(var(${PUBLIC_CSS_VARS.colCount}), 1fr);
	padding: calc(var(${PUBLIC_CSS_VARS.gap}) * 1px) calc(var(${PUBLIC_CSS_VARS.margin}) * 1px);
`;

const GridGrid = ({
	as: Component = "div",
	strategy,
	align,
	justify,
	colCount = {},
	gap = {},
	margin = {},
	style = {},
	sx = {},
	...props
}: GridGridProps) => {
	const colCountVars = getCSSVars("colCount", colCount);
	const gapVars = getCSSVars("gap", gap);
	const marginVars = getCSSVars("margin", margin);
	return (
		<Component
			{...props}
			css={[gridGrid, resolveSx(sx)]}
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

export default memo(GridGrid);
