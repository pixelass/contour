/// <reference types="@emotion/react/types/css-prop" />
import defaultTheme from "@contour/theme/theme";
import { CSS_VAR_RESET, PUBLIC_CSS_VARS } from "@contour/utils/constants";
import { cssVar, getCSSVars } from "@contour/utils/css";
import resolveSX from "@contour/utils/resolve-sx";
import { GridColumnProps } from "@contour/utils/types";
import { css } from "@emotion/react";
import deepmerge from "deepmerge";
import React, { CSSProperties, memo } from "react";
import { columnCommon, columnVars } from "../css";

export const gridColumnVars = ({
	contour: {
		breakpoints: {
			keys: [xs, s, m, l, xl],
		},
		mq,
	} = defaultTheme.contour,
} = defaultTheme) => css`
	${cssVar("colStart", "xs")}: var(${CSS_VAR_RESET});
	${cssVar("colStart", "s")}: var(${CSS_VAR_RESET});
	${cssVar("colStart", "m")}: var(${CSS_VAR_RESET});
	${cssVar("colStart", "l")}: var(${CSS_VAR_RESET});
	${cssVar("colStart", "xl")}: var(${CSS_VAR_RESET});
	${PUBLIC_CSS_VARS.colStart}: var(${cssVar("colStart", xs)});

	${mq[s]} {
		${PUBLIC_CSS_VARS.colStart}: var(${cssVar("colStart", s)});
	}

	${mq[m]} {
		${PUBLIC_CSS_VARS.colStart}: var(${cssVar("colStart", "m")});
	}

	${mq[l]} {
		${PUBLIC_CSS_VARS.colStart}: var(${cssVar("colStart", l)});
	}

	${mq[xl]} {
		${PUBLIC_CSS_VARS.colStart}: var(${cssVar("colStart", xl)});
	}
`;

const gridColumn: CSSProperties = {
	gridColumnEnd: `span var(${PUBLIC_CSS_VARS.colSpan}, var(${PUBLIC_CSS_VARS.colCount}))`,
	/* Stylelint-disable declaration-block-no-redundant-longhand-properties */
	gridColumnStart: `var(${PUBLIC_CSS_VARS.colStart})`,
	/* Stylelint-enable declaration-block-no-redundant-longhand-properties */
};

const GridColumn = ({
	as: Component = "div",
	strategy,
	style,
	align,
	justify,
	flex,
	colSpan = {},
	colStart = {},
	order = {},
	sx = {},
	...props
}: GridColumnProps) => {
	const colSpanVars = getCSSVars("colSpan", colSpan);
	const colStartVars = getCSSVars("colStart", colStart);
	const orderVars = getCSSVars("order", order);
	return (
		<Component
			{...props}
			css={[
				columnVars,
				gridColumnVars,
				theme => columnCommon(deepmerge(gridColumn, resolveSX(sx)(theme))),
			]}
			style={
				{
					...style,
					...colSpanVars,
					...colStartVars,
					...orderVars,
					[PUBLIC_CSS_VARS.align]: align,
					[PUBLIC_CSS_VARS.justify]: justify,
					[PUBLIC_CSS_VARS.display]: flex && "flex",
				} as CSSProperties
			}
		/>
	);
};

export default memo(GridColumn);
