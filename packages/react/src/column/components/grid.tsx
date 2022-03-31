/// <reference types="@emotion/react/types/css-prop" />
import { defaultTheme } from "@contour/theme";
import {
	CSS_VAR_RESET,
	cssVar,
	getCSSVars,
	OverrideableGridColumnProps,
	PUBLIC_CSS_VARS,
	resolveSX,
} from "@contour/utils";
import { css, jsx } from "@emotion/react";
import { CSSObject } from "@emotion/serialize";
import deepmerge from "deepmerge";
import { ElementType, forwardRef, Ref } from "react";
import { columnCommon, columnVars } from "../css";

export const gridColumnVars = ({
	contour: {
		breakpoints: {
			keys: [xs, s, m, l, xl],
		},
		mq,
	} = defaultTheme.contour,
} = defaultTheme) => css`
	${cssVar("colStart", xs)}: var(${CSS_VAR_RESET});
	${cssVar("colStart", s)}: var(${CSS_VAR_RESET});
	${cssVar("colStart", m)}: var(${CSS_VAR_RESET});
	${cssVar("colStart", l)}: var(${CSS_VAR_RESET});
	${cssVar("colStart", xl)}: var(${CSS_VAR_RESET});
	${PUBLIC_CSS_VARS.colStart}: var(${cssVar("colStart", xs)});

	${mq[s]} {
		${PUBLIC_CSS_VARS.colStart}: var(${cssVar("colStart", s)});
	}

	${mq[m]} {
		${PUBLIC_CSS_VARS.colStart}: var(${cssVar("colStart", m)});
	}

	${mq[l]} {
		${PUBLIC_CSS_VARS.colStart}: var(${cssVar("colStart", l)});
	}

	${mq[xl]} {
		${PUBLIC_CSS_VARS.colStart}: var(${cssVar("colStart", xl)});
	}
`;

const gridColumn: CSSObject = {
	gridColumnEnd: `span var(${PUBLIC_CSS_VARS.colSpan}, var(${PUBLIC_CSS_VARS.colCount}))`,
	/* Stylelint-disable declaration-block-no-redundant-longhand-properties */
	gridColumnStart: `var(${PUBLIC_CSS_VARS.colStart})`,
	/* Stylelint-enable declaration-block-no-redundant-longhand-properties */
};

// eslint-disable-next-line react/function-component-definition
function GridColumnBase<T extends ElementType = "div">(
	{
		as: Component,
		style,
		alignItems,
		justifyContent,
		flex,
		colSpan = {},
		colStart = {},
		order = {},
		sx = {},
		...props
	}: OverrideableGridColumnProps<T>,
	ref: Ref<HTMLDivElement>
) {
	const colSpanVars = getCSSVars("colSpan", colSpan);
	const colStartVars = getCSSVars("colStart", colStart);
	const orderVars = getCSSVars("order", order);
	return jsx(Component ?? "div", {
		ref,
		...props,
		css: [
			columnVars,
			gridColumnVars,
			theme => columnCommon(deepmerge<CSSObject>(gridColumn, resolveSX(sx)(theme))),
		],
		style: {
			...style,
			...colSpanVars,
			...colStartVars,
			...orderVars,
			[PUBLIC_CSS_VARS.align]: alignItems,
			[PUBLIC_CSS_VARS.justify]: justifyContent,
			[PUBLIC_CSS_VARS.display]: flex && "flex",
		},
	});
}

const GridColumn = forwardRef(GridColumnBase) as typeof GridColumnBase;

export default GridColumn;
