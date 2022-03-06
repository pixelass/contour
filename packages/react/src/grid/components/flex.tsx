/// <reference types="@emotion/react/types/css-prop" />
import { FlexGridProps, PUBLIC_CSS_VARS, resolveSX } from "@contour/utils";
import deepmerge from "deepmerge";
import React, { CSSProperties, memo } from "react";
import { gridCommon, gridVars } from "../css";
import { getCommonVars } from "../utils";

const flexGrid: CSSProperties = {
	display: "flex",
	flexWrap: "wrap",
	padding: `0 calc((var(${PUBLIC_CSS_VARS.marginX}) - var(${PUBLIC_CSS_VARS.gapY}) / 2) * 1px)`,
};

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
	return (
		<Component
			{...props}
			css={[gridVars, theme => gridCommon(theme, deepmerge(flexGrid, resolveSX(sx)(theme)))]}
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

export default memo(FlexGrid);
