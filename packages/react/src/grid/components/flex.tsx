/// <reference types="@emotion/react/types/css-prop" />
import { getCommonVars } from "@contour/react/grid/utils";
import { PUBLIC_CSS_VARS } from "@contour/utils/constants";
import resolveSX from "@contour/utils/resolve-sx";
import { FlexGridProps } from "@contour/utils/types";
import deepmerge from "deepmerge";
import React, { CSSProperties, memo } from "react";
import { gridCommon, gridVars } from "../css";

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
