/// <reference types="@emotion/react/types/css-prop" />
import { PUBLIC_CSS_VARS } from "@contour/utils/constants";
import { getCSSVars } from "@contour/utils/css";
import resolveSX from "@contour/utils/resolve-sx";
import { FlexRowProps } from "@contour/utils/types";
import deepmerge from "deepmerge";
import React, { CSSProperties, memo } from "react";
import { rowCommon, rowVars } from "../css";

const flexRow: CSSProperties = {
	display: "flex",
	flexWrap: "wrap",
};

const FlexRow = ({
	as: Component = "div",
	strategy,
	align,
	justify,
	style,
	colCount = {},
	sx = {},
	...props
}: FlexRowProps) => {
	const cssVars = getCSSVars("colCount", colCount);
	return (
		<Component
			{...props}
			css={[rowVars, theme => rowCommon(deepmerge(flexRow, resolveSX(sx)(theme)))]}
			style={
				{
					...style,
					...cssVars,
					[PUBLIC_CSS_VARS.align]: align,
					[PUBLIC_CSS_VARS.justify]: justify,
				} as CSSProperties
			}
		/>
	);
};

export default memo(FlexRow);
