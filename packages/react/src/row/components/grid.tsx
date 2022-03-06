/// <reference types="@emotion/react/types/css-prop" />
import { PUBLIC_CSS_VARS } from "@contour/utils/constants";
import { getCSSVars } from "@contour/utils/css";
import resolveSX from "@contour/utils/resolve-sx";
import { GridRowProps } from "@contour/utils/types";
import deepmerge from "deepmerge";
import React, { CSSProperties, memo } from "react";
import { rowCommon, rowVars } from "../css";

const gridRow: CSSProperties = {
	display: "grid",
	gridTemplateColumns: `repeat(var(${PUBLIC_CSS_VARS.colCount}), 1fr)`,
	padding: `0 calc(var(${PUBLIC_CSS_VARS.gapX}) / 2 * 1px)`,
	columnGap: `calc(var(${PUBLIC_CSS_VARS.gapX}) * 1px)`,
	rowGap: `calc(var(${PUBLIC_CSS_VARS.gapY}) * 1px)`,
};
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
			css={[rowVars, theme => rowCommon(deepmerge(gridRow, resolveSX(sx)(theme)))]}
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
