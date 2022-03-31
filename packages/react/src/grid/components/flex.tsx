/// <reference types="@emotion/react/types/css-prop" />
import { FlexGridProps, PUBLIC_CSS_VARS, resolveSX } from "@contour/utils";
import { jsx } from "@emotion/react";
import { CSSObject } from "@emotion/serialize";
import deepmerge from "deepmerge";
import { CSSProperties, ElementType, forwardRef, Ref } from "react";
import { gridCommon, gridVars } from "../css";
import { getCommonVars } from "../utils";

const flexGrid: CSSObject = {
	display: "flex",
	flexWrap: "wrap",
	padding: `0 calc((var(${PUBLIC_CSS_VARS.marginX}) - var(${PUBLIC_CSS_VARS.gapY}) / 2) * 1px)`,
};

// eslint-disable-next-line react/function-component-definition
function FlexGridBase<T extends ElementType = "div">(
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
	}: FlexGridProps<T>,
	ref: Ref<HTMLDivElement>
) {
	return jsx(Component ?? "div", {
		ref,
		...props,
		css: [gridVars, theme => gridCommon(theme, deepmerge(flexGrid, resolveSX(sx)(theme)))],
		style: {
			...style,
			...getCommonVars({ gap, margin, colCount }),
			[PUBLIC_CSS_VARS.alignItems]: alignItems,
			[PUBLIC_CSS_VARS.justifyContent]: justifyContent,
		} as CSSProperties,
	});
}
const FlexGrid = forwardRef(FlexGridBase) as typeof FlexGridBase;

export default FlexGrid;
