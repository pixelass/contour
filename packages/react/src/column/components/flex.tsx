/// <reference types="@emotion/react/types/css-prop" />
import {
	getCSSVars,
	OverrideableFlexColumnProps,
	PUBLIC_CSS_VARS,
	resolveSX,
} from "@contour/utils";
import { jsx } from "@emotion/core";
import { CSSObject } from "@emotion/serialize";
import deepmerge from "deepmerge";
import { ElementType, forwardRef, Ref } from "react";
import { columnCommon, columnVars } from "../css";

const flexColumn: CSSObject = {
	width: `calc(100% / var(${PUBLIC_CSS_VARS.colCount}) * var(${PUBLIC_CSS_VARS.colSpan}) - var(${PUBLIC_CSS_VARS.gapX}) * 1px)`,
	margin: `calc(var(${PUBLIC_CSS_VARS.gapY}) / 2 * 1px) calc(var(${PUBLIC_CSS_VARS.gapX}) / 2 * 1px)`,
};

export const fillColumn: CSSObject = {
	flexGrow: 1,
	flexShrink: 1,
	flexBasis: 1,
	width: "auto",
	margin: `calc(var(${PUBLIC_CSS_VARS.gapY}) / 2 * 1px) calc(var(${PUBLIC_CSS_VARS.gapX}) / 2 * 1px)`,
};

// eslint-disable-next-line react/function-component-definition
function FlexColumnBase<T extends ElementType = "div">(
	{
		as: Component,
		style,
		alignItems,
		justifyContent,
		flex,
		fill,
		colSpan = {},
		order = {},
		sx = {},
		...props
	}: OverrideableFlexColumnProps<T>,
	ref: Ref<HTMLDivElement>
) {
	const colSpanVars = getCSSVars("colSpan", colSpan);
	const orderVars = getCSSVars("order", order);
	return jsx(Component ?? "div", {
		ref,
		...props,
		css: [
			columnVars,
			theme =>
				columnCommon(
					deepmerge<CSSObject>(fill ? fillColumn : flexColumn, resolveSX(sx)(theme))
				),
		],
		style: {
			...style,
			...colSpanVars,
			...orderVars,
			[PUBLIC_CSS_VARS.align]: alignItems,
			[PUBLIC_CSS_VARS.justify]: justifyContent,
			[PUBLIC_CSS_VARS.display]: flex && "flex",
		},
	});
}
const FlexColumn = forwardRef(FlexColumnBase) as typeof FlexColumnBase;

export default FlexColumn;
