/// <reference types="@emotion/react/types/css-prop" />
import { FlexRowProps, getCSSVars, PUBLIC_CSS_VARS, resolveSX } from "@contour/utils";
import { jsx } from "@emotion/core";
import { CSSObject } from "@emotion/serialize";
import deepmerge from "deepmerge";
import { ElementType, forwardRef } from "react";
import { rowCommon, rowVars } from "../css";

const flexRow: CSSObject = {
	display: "flex",
	flexWrap: "wrap",
};

// eslint-disable-next-line react/function-component-definition
function FlexRowBase<T extends ElementType = "div">(
	{
		as: Component,
		alignItems,
		justifyContent,
		style = {},
		colCount = {},
		sx = {},
		...props
	}: FlexRowProps<T>,
	ref
) {
	const cssVars = getCSSVars("colCount", colCount);
	return jsx(Component ?? "div", {
		ref,
		...props,
		css: [rowVars, theme => rowCommon(deepmerge(flexRow, resolveSX(sx)(theme)))],
		style: {
			...style,
			...cssVars,
			[PUBLIC_CSS_VARS.align]: alignItems,
			[PUBLIC_CSS_VARS.justify]: justifyContent,
		},
	});
}
const FlexRow = forwardRef(FlexRowBase) as typeof FlexRowBase;

export default FlexRow;
