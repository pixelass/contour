/// <reference types="@emotion/react/types/css-prop" />
import defaultTheme from "@contour/theme/theme";
import { PUBLIC_CSS_VARS } from "@contour/utils/constants";
import { getCSSVars } from "@contour/utils/css";
import { resolveSx } from "@contour/utils/resolve-sx";
import { GridRowProps } from "@contour/utils/types";
import { css } from "@emotion/react";
import React, { memo } from "react";
import { rowCommon, rowVars } from "../css";

const gridRow = (theme = defaultTheme) => css`
	${rowVars(theme)};
	${rowCommon};

	display: grid;
	grid-template-columns: repeat(var(${PUBLIC_CSS_VARS.colCount}), 1fr);
	padding: 0 calc(var(${PUBLIC_CSS_VARS.gapX}) / 2 * 1px);
	column-gap: calc(var(${PUBLIC_CSS_VARS.gapX}) * 1px);
	row-gap: calc(var(${PUBLIC_CSS_VARS.gapY}) * 1px);
`;

const GridRow = ({
	as: Component = "div",
	strategy,
	align,
	justify,
	style = {},
	colCount = {},
	sx = {},
	...props
}: GridRowProps) => {
	const cssVars = getCSSVars("colCount", colCount);
	return (
		<Component
			{...props}
			css={[gridRow, resolveSx(sx)]}
			style={{
				...style,
				...cssVars,
				[PUBLIC_CSS_VARS.align]: align,
				[PUBLIC_CSS_VARS.justify]: justify,
			}}
		/>
	);
};

export default memo(GridRow);
