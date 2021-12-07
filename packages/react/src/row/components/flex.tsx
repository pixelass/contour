/// <reference types="@emotion/react/types/css-prop" />
import defaultTheme from "@contour/theme/theme";
import { PUBLIC_CSS_VARS } from "@contour/utils/constants";
import { getCSSVars } from "@contour/utils/css";
import { FlexRowProps } from "@contour/utils/types";
import { css } from "@emotion/react";
import React, { memo } from "react";
import { rowCommon, rowVars } from "../css";

const flexRow = (theme = defaultTheme) => css`
	${rowVars(theme)};
	${rowCommon};
	display: flex;
	flex-wrap: wrap;
`;

const FlexRow = ({
	as: Component = "div",
	strategy,
	align,
	justify,
	style,
	colCount = {},
	...props
}: FlexRowProps) => {
	const cssVars = getCSSVars("colCount", colCount);
	return (
		<Component
			{...props}
			css={flexRow}
			style={{
				...style,
				...cssVars,
				[PUBLIC_CSS_VARS.align]: align,
				[PUBLIC_CSS_VARS.justify]: justify,
			}}
		/>
	);
};

export default memo(FlexRow);
