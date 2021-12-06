/// <reference types="@emotion/react/types/css-prop" />
import defaultTheme from "@contour/theme/theme";
import { PUBLIC_CSS_VARS } from "@contour/utils/constants";
import { FlexColumnProps } from "@contour/utils/types";
import { getCSSVars } from "@contour/utils/utils";
import { css } from "@emotion/react";
import React, { memo } from "react";
import { columnCommon, columnVars } from "../css";

const flexColumn = (theme = defaultTheme) => css`
	${columnVars(theme)};
	${columnCommon};
	width: calc(
		100% / var(${PUBLIC_CSS_VARS.colCount}) * var(${PUBLIC_CSS_VARS.colSpan}) -
			var(${PUBLIC_CSS_VARS.gap}) * 1px
	);
	margin-top: calc(var(${PUBLIC_CSS_VARS.gap}) / 2 * 1px);
	margin-right: calc(var(${PUBLIC_CSS_VARS.gap}) / 2 * 1px);
	margin-bottom: calc(var(${PUBLIC_CSS_VARS.gap}) / 2 * 1px);
	margin-left: calc(var(${PUBLIC_CSS_VARS.gap}) / 2 * 1px);
`;

const FlexColumn = ({
	as: Component = "div",
	strategy,
	style,
	align,
	justify,
	flex,
	colSpan = {},
	order = {},
	...props
}: FlexColumnProps) => {
	const colSpanVars = getCSSVars("colSpan", colSpan);
	const orderVars = getCSSVars("order", order);
	return (
		<Component
			{...props}
			css={flexColumn}
			style={{
				...style,
				...colSpanVars,
				...orderVars,
				[PUBLIC_CSS_VARS.align]: align,
				[PUBLIC_CSS_VARS.justify]: justify,
				[PUBLIC_CSS_VARS.display]: flex && "flex",
			}}
		/>
	);
};

export default memo(FlexColumn);
