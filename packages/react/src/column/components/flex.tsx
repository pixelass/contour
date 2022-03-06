/// <reference types="@emotion/react/types/css-prop" />
import { gridColumnVars } from "@contour/react/column/components/grid";
import { PUBLIC_CSS_VARS } from "@contour/utils/constants";
import { getCSSVars } from "@contour/utils/css";
import resolveSX from "@contour/utils/resolve-sx";
import { FlexColumnProps } from "@contour/utils/types";
import deepmerge from "deepmerge";
import React, { CSSProperties, memo } from "react";
import { columnCommon, columnVars } from "../css";

const flexColumn: CSSProperties = {
	width: `calc(100% / var(${PUBLIC_CSS_VARS.colCount}) * var(${PUBLIC_CSS_VARS.colSpan}) - var(${PUBLIC_CSS_VARS.gapX}) * 1px)`,
	margin: `calc(var(${PUBLIC_CSS_VARS.gapY}) / 2 * 1px) calc(var(${PUBLIC_CSS_VARS.gapX}) / 2 * 1px)`,
};
const FlexColumn = ({
	as: Component = "div",
	strategy,
	style,
	align,
	justify,
	flex,
	colSpan = {},
	order = {},
	sx = {},
	...props
}: FlexColumnProps) => {
	const colSpanVars = getCSSVars("colSpan", colSpan);
	const orderVars = getCSSVars("order", order);
	return (
		<Component
			{...props}
			css={[
				columnVars,
				gridColumnVars,
				theme => columnCommon(deepmerge(flexColumn, resolveSX(sx)(theme))),
			]}
			style={
				{
					...style,
					...colSpanVars,
					...orderVars,
					[PUBLIC_CSS_VARS.align]: align,
					[PUBLIC_CSS_VARS.justify]: justify,
					[PUBLIC_CSS_VARS.display]: flex && "flex",
				} as CSSProperties
			}
		/>
	);
};

export default memo(FlexColumn);
