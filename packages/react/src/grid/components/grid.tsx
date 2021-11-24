/// <reference types="@emotion/react/types/css-prop" />
import { PUBLIC_CSS_VARS } from "@contour/utils/constants";
import { GridGridProps, Theme } from "@contour/utils/types";
import { getCSSVars } from "@contour/utils/utils";
import { css } from "@emotion/react";
import React, { memo } from "react";
import { gridCommon, gridVars } from "../css";

const gridGrid = (theme: Theme) => css`
	${gridVars(theme)};
	${gridCommon(theme)};
	display: grid;
	grid-column-gap: calc(var(${PUBLIC_CSS_VARS.gap}) * 1px);
	grid-row-gap: calc(var(${PUBLIC_CSS_VARS.gap}) * 1px);
	grid-template-columns: repeat(var(${PUBLIC_CSS_VARS.colCount}), 1fr);
	padding-top: calc(var(${PUBLIC_CSS_VARS.gap}) * 1px);
	padding-right: calc(var(${PUBLIC_CSS_VARS.margin}) * 1px);
	padding-bottom: calc(var(${PUBLIC_CSS_VARS.gap}) * 1px);
	padding-left: calc(var(${PUBLIC_CSS_VARS.margin}) * 1px);
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
	...props
}: GridGridProps) => {
	const colCountVars = getCSSVars("colCount", colCount);
	const gapVars = getCSSVars("gap", gap);
	const marginVars = getCSSVars("margin", margin);
	return (
		<Component
			{...props}
			css={gridGrid}
			style={{
				...style,
				...colCountVars,
				...gapVars,
				...marginVars,
				[PUBLIC_CSS_VARS.align]: align,
				[PUBLIC_CSS_VARS.justify]: justify,
			}}
		/>
	);
};

export default memo(GridGrid);
