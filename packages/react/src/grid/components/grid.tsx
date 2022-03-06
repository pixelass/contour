/// <reference types="@emotion/react/types/css-prop" />
import { GridGridProps, PUBLIC_CSS_VARS, resolveSX } from "@contour/utils";
import deepmerge from "deepmerge";
import React, { CSSProperties, memo } from "react";
import { gridCommon, gridVars } from "../css";
import { getCommonVars } from "../utils";

const gridGrid: CSSProperties = {
	display: "grid",
	gridTemplateColumns: `repeat(var(${PUBLIC_CSS_VARS.colCount}), 1fr)`,
	padding: `calc(var(${PUBLIC_CSS_VARS.marginY}) * 1px) calc(var(${PUBLIC_CSS_VARS.marginX}) * 1px)`,
	columnGap: `calc(var(${PUBLIC_CSS_VARS.gapX}) * 1px)`,
	rowGap: `calc(var(${PUBLIC_CSS_VARS.gapY}) * 1px)`,
};

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
	return (
		<Component
			{...props}
			css={[gridVars, theme => gridCommon(theme, deepmerge(gridGrid, resolveSX(sx)(theme)))]}
			style={
				{
					...style,
					...getCommonVars({ gap, margin, colCount }),
					[PUBLIC_CSS_VARS.align]: align,
					[PUBLIC_CSS_VARS.justify]: justify,
				} as CSSProperties
			}
		/>
	);
};

export default memo(GridGrid);
