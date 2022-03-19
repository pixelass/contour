/// <reference types="@emotion/react/types/css-prop" />
import { getCSSVars, GridRowProps, PUBLIC_CSS_VARS, resolveSX } from "@contour/utils";
import { jsx } from "@emotion/react";
import { CSSObject } from "@emotion/serialize";
import deepmerge from "deepmerge";
import { ElementType, forwardRef } from "react";
import { rowCommon, rowVars } from "../css";

const gridRow: CSSObject = {
	display: "grid",
	gridTemplateColumns: `repeat(var(${PUBLIC_CSS_VARS.colCount}), 1fr)`,
	padding: `calc(var(${PUBLIC_CSS_VARS.gapY}) / 2 * 1px) calc(var(${PUBLIC_CSS_VARS.gapX}) / 2 * 1px)`,
	columnGap: `calc(var(${PUBLIC_CSS_VARS.gapX}) * 1px)`,
	rowGap: `calc(var(${PUBLIC_CSS_VARS.gapY}) * 1px)`,
};

// eslint-disable-next-line react/function-component-definition
function GridRowBase<T extends ElementType = "div">(
	{
		as: Component,
		alignItems,
		justifyContent,
		style = {},
		colCount = {},
		sx = {},
		...props
	}: GridRowProps<T>,
	ref
) {
	const cssVars = getCSSVars("colCount", colCount);
	return jsx(Component ?? "div", {
		ref,
		...props,
		css: [rowVars, theme => rowCommon(deepmerge(gridRow, resolveSX(sx)(theme)))],
		style: {
			...style,
			...cssVars,
			[PUBLIC_CSS_VARS.alignItems]: alignItems,
			[PUBLIC_CSS_VARS.justifyContent]: justifyContent,
		},
	});
}
const GridRow = forwardRef(GridRowBase) as typeof GridRowBase;

export default GridRow;
