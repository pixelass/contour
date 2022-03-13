/// <reference types="@emotion/react/types/css-prop" />
import { GridGridProps, PUBLIC_CSS_VARS, resolveSX } from "@contour/utils";
import { jsx } from "@emotion/core";
import { CSSObject } from "@emotion/serialize";
import deepmerge from "deepmerge";
import { CSSProperties, ElementType, forwardRef, Ref } from "react";
import { gridCommon, gridVars } from "../css";
import { getCommonVars } from "../utils";

const gridGrid: CSSObject = {
	display: "grid",
	gridTemplateColumns: `repeat(var(${PUBLIC_CSS_VARS.colCount}), 1fr)`,
	padding: `calc(var(${PUBLIC_CSS_VARS.marginY}) * 1px) calc(var(${PUBLIC_CSS_VARS.marginX}) * 1px)`,
	columnGap: `calc(var(${PUBLIC_CSS_VARS.gapX}) * 1px)`,
	rowGap: `calc(var(${PUBLIC_CSS_VARS.gapY}) * 1px)`,
};

// eslint-disable-next-line react/function-component-definition
function GridGridBase<T extends ElementType = "div">(
	{
		as: Component,
		alignItems,
		justifyContent,
		colCount = {},
		gap = {},
		margin = {},
		style = {},
		sx = {},
		...props
	}: GridGridProps<T>,
	ref: Ref<HTMLDivElement>
) {
	return jsx(Component ?? "div", {
		ref,
		...props,
		css: [gridVars, theme => gridCommon(theme, deepmerge(gridGrid, resolveSX(sx)(theme)))],
		style: {
			...style,
			...getCommonVars({ gap, margin, colCount }),
			[PUBLIC_CSS_VARS.align]: alignItems,
			[PUBLIC_CSS_VARS.justify]: justifyContent,
		} as CSSProperties,
	});
}
const GridGrid = forwardRef(GridGridBase) as typeof GridGridBase;

export default GridGrid;
