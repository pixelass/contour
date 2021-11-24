/// <reference types="@emotion/react/types/css-prop" />
import { PUBLIC_CSS_VARS } from "@contour/utils/constants";
import { GridRowProps, Theme } from "@contour/utils/types";
import { getCSSVars } from "@contour/utils/utils";
import { css } from "@emotion/react";
import React, { memo } from "react";
import { rowCommon, rowVars } from "../css";

const gridRow = (theme: Theme) => css`
	${rowVars(theme)};
	${rowCommon};
	display: grid;
	grid-column-gap: calc(var(${PUBLIC_CSS_VARS.gap}) * 1px);
	grid-row-gap: calc(var(${PUBLIC_CSS_VARS.gap}) * 1px);
	grid-template-columns: repeat(var(${PUBLIC_CSS_VARS.colCount}), 1fr);
	padding-top: calc(var(${PUBLIC_CSS_VARS.gap}) / 2 * 1px);
	padding-right: calc(var(${PUBLIC_CSS_VARS.gap}) / 2 * 1px);
	padding-bottom: calc(var(${PUBLIC_CSS_VARS.gap}) / 2 * 1px);
	padding-left: calc(var(${PUBLIC_CSS_VARS.gap}) / 2 * 1px);
`;

const GridRow = ({
	as: Component = "div",
	strategy,
	align,
	justify,
	style = {},
	colCount = {},
	...props
}: GridRowProps) => {
	const cssVars = getCSSVars("colCount", colCount);
	return (
		<Component
			{...props}
			css={gridRow}
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
