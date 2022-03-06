/// <reference types="@emotion/react/types/css-prop" />
import { gridColumnVars } from "@contour/react/column/components/grid";
import defaultTheme from "@contour/theme/theme";
import { CSS_VAR_RESET, PUBLIC_CSS_VARS } from "@contour/utils/constants";
import { cssVar, getCSSVars } from "@contour/utils/css";
import resolveSX from "@contour/utils/resolve-sx";
import { BreakoutColumnProps } from "@contour/utils/types";
import { css } from "@emotion/react";
import { CSSObject } from "@emotion/serialize";
import deepmerge from "deepmerge";
import React, { CSSProperties, memo } from "react";
import { columnCommon, columnVars } from "../css";

const breakoutColumnVars = ({
	contour: {
		breakpoints: {
			keys: [xs, s, m, l, xl],
		},
		mq,
	} = defaultTheme.contour,
} = defaultTheme) => css`
	${cssVar("breakoutLeft", xs)}: var(${CSS_VAR_RESET});
	${cssVar("breakoutLeft", s)}: var(${CSS_VAR_RESET});
	${cssVar("breakoutLeft", m)}: var(${CSS_VAR_RESET});
	${cssVar("breakoutLeft", l)}: var(${CSS_VAR_RESET});
	${cssVar("breakoutLeft", xl)}: var(${CSS_VAR_RESET});
	${cssVar("breakoutRight", xs)}: var(${CSS_VAR_RESET});
	${cssVar("breakoutRight", s)}: var(${CSS_VAR_RESET});
	${cssVar("breakoutRight", m)}: var(${CSS_VAR_RESET});
	${cssVar("breakoutRight", l)}: var(${CSS_VAR_RESET});
	${cssVar("breakoutRight", xl)}: var(${CSS_VAR_RESET});
	${PUBLIC_CSS_VARS.breakoutLeft}: var(${cssVar("breakoutLeft", xs)});
	${PUBLIC_CSS_VARS.breakoutRight}: var(${cssVar("breakoutRight", xs)});

	${mq[s]} {
		${PUBLIC_CSS_VARS.breakoutLeft}: var(${cssVar("breakoutLeft", s)});
		${PUBLIC_CSS_VARS.breakoutRight}: var(${cssVar("breakoutRight", s)});
	}

	${mq[m]} {
		${PUBLIC_CSS_VARS.breakoutLeft}: var(${cssVar("breakoutLeft", m)});
		${PUBLIC_CSS_VARS.breakoutRight}: var(${cssVar("breakoutRight", m)});
	}

	${mq[l]} {
		${PUBLIC_CSS_VARS.breakoutLeft}: var(${cssVar("breakoutLeft", l)});
		${PUBLIC_CSS_VARS.breakoutRight}: var(${cssVar("breakoutRight", l)});
	}

	${mq[xl]} {
		${PUBLIC_CSS_VARS.breakoutLeft}: var(${cssVar("breakoutLeft", xl)});
		${PUBLIC_CSS_VARS.breakoutRight}: var(${cssVar("breakoutRight", xl)});
	}
`;

const breakoutColumn = (theme = defaultTheme): CSSObject => {
	const {
		breakpoints: {
			keys: [, , , , xl],
			values,
		},
	} = theme.contour ?? defaultTheme.contour;
	return {
		width: `calc(100% / var(${PUBLIC_CSS_VARS.colCount}) * var(${PUBLIC_CSS_VARS.colSpan}) - var(${PUBLIC_CSS_VARS.gapX}) * 1px + var(${PUBLIC_CSS_VARS.marginX}) * var(${PUBLIC_CSS_VARS.breakoutLeft}, 0) * 1px + var(${PUBLIC_CSS_VARS.marginX}) * var(${PUBLIC_CSS_VARS.breakoutRight}, 0) * 1px)`,
		margin: `calc(var(${PUBLIC_CSS_VARS.gapY}) / 2 * 1px) calc( var(${PUBLIC_CSS_VARS.gapX}) / 2 * 1px - var(${PUBLIC_CSS_VARS.marginX}) * var(${PUBLIC_CSS_VARS.breakoutRight}, 0) * 1px) calc(var(${PUBLIC_CSS_VARS.gapY}) / 2 * 1px) calc( var(${PUBLIC_CSS_VARS.gapX}) / 2 * 1px - var(${PUBLIC_CSS_VARS.marginX}) * var(${PUBLIC_CSS_VARS.breakoutLeft}, 0) * 1px)`,
		[(theme.contour ?? defaultTheme.contour).mq[xl]]: {
			width: `calc(100% / var(${PUBLIC_CSS_VARS.colCount}) * var(${PUBLIC_CSS_VARS.colSpan}) - var(${PUBLIC_CSS_VARS.gapX}) * 1px + (var(${PUBLIC_CSS_VARS.vw}, 100vw) - ${values[xl]}px) / 2 * var(${PUBLIC_CSS_VARS.breakoutLeft}, 0) + (var(${PUBLIC_CSS_VARS.vw}, 100vw) - ${values[xl]}px) / 2 * var(${PUBLIC_CSS_VARS.breakoutRight}, 0) + var(${PUBLIC_CSS_VARS.marginX}) * var(${PUBLIC_CSS_VARS.breakoutLeft}, 0) * 1px + var(${PUBLIC_CSS_VARS.marginX}) * var(${PUBLIC_CSS_VARS.breakoutRight}, 0) * 1px)`,
			marginRight: `calc(var(${PUBLIC_CSS_VARS.gapX}) / 2 * 1px - (var(${PUBLIC_CSS_VARS.vw}, 100vw) - ${values[xl]}px) / 2 * var(${PUBLIC_CSS_VARS.breakoutRight}, 0) - var(${PUBLIC_CSS_VARS.marginX}) * var(${PUBLIC_CSS_VARS.breakoutRight}, 0) * 1px)`,
			marginLeft: ` calc(var(${PUBLIC_CSS_VARS.gapX}) / 2 * 1px - (var(${PUBLIC_CSS_VARS.vw}, 100vw) - ${values[xl]}px) / 2 * var(${PUBLIC_CSS_VARS.breakoutLeft}, 0) - var(${PUBLIC_CSS_VARS.marginX}) * var(${PUBLIC_CSS_VARS.breakoutLeft}, 0) * 1px)`,
		},
	};
};

const BreakoutColumn = ({
	as: Component = "div",
	style,
	align,
	justify,
	flex,
	colSpan = {},
	order = {},
	left = {},
	right = {},
	sx = {},
	...props
}: BreakoutColumnProps) => {
	const colSpanVars = getCSSVars("colSpan", colSpan);
	const orderVars = getCSSVars("order", order);
	const breakoutLeftVars = getCSSVars("breakoutLeft", left);
	const breakoutRightVars = getCSSVars("breakoutRight", right);

	return (
		<Component
			{...props}
			css={[
				breakoutColumnVars,
				columnVars,
				gridColumnVars,
				theme =>
					columnCommon(
						deepmerge<CSSObject, CSSObject>(breakoutColumn(theme), resolveSX(sx)(theme))
					),
			]}
			style={
				{
					...style,
					...colSpanVars,
					...orderVars,
					...breakoutLeftVars,
					...breakoutRightVars,
					[PUBLIC_CSS_VARS.align]: align,
					[PUBLIC_CSS_VARS.justify]: justify,
					[PUBLIC_CSS_VARS.display]: flex && "flex",
				} as CSSProperties
			}
		/>
	);
};

export default memo(BreakoutColumn);
