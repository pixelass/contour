/// <reference types="@emotion/react/types/css-prop" />
import defaultTheme from "@contour/theme/theme";
import { CSS_VAR_RESET, PUBLIC_CSS_VARS } from "@contour/utils/constants";
import { cssVar, getCSSVars } from "@contour/utils/css";
import { BreakoutColumnProps } from "@contour/utils/types";
import { css } from "@emotion/react";
import React, { memo } from "react";
import { columnCommon, columnVars } from "../css";

const breakoutColumnVars = (theme = defaultTheme) => css`
	${cssVar("breakoutLeft", "xs")}: var(${CSS_VAR_RESET});
	${cssVar("breakoutLeft", "s")}: var(${CSS_VAR_RESET});
	${cssVar("breakoutLeft", "m")}: var(${CSS_VAR_RESET});
	${cssVar("breakoutLeft", "l")}: var(${CSS_VAR_RESET});
	${cssVar("breakoutLeft", "xl")}: var(${CSS_VAR_RESET});
	${cssVar("breakoutRight", "xs")}: var(${CSS_VAR_RESET});
	${cssVar("breakoutRight", "s")}: var(${CSS_VAR_RESET});
	${cssVar("breakoutRight", "m")}: var(${CSS_VAR_RESET});
	${cssVar("breakoutRight", "l")}: var(${CSS_VAR_RESET});
	${cssVar("breakoutRight", "xl")}: var(${CSS_VAR_RESET});
	${PUBLIC_CSS_VARS.breakoutLeft}: var(${cssVar("breakoutLeft", "xs")});
	${PUBLIC_CSS_VARS.breakoutRight}: var(${cssVar("breakoutRight", "xs")});

	${theme.contour.mq.s} {
		${PUBLIC_CSS_VARS.breakoutLeft}: var(${cssVar("breakoutLeft", "s")});
		${PUBLIC_CSS_VARS.breakoutRight}: var(${cssVar("breakoutRight", "s")});
	}

	${theme.contour.mq.m} {
		${PUBLIC_CSS_VARS.breakoutLeft}: var(${cssVar("breakoutLeft", "m")});
		${PUBLIC_CSS_VARS.breakoutRight}: var(${cssVar("breakoutRight", "m")});
	}

	${theme.contour.mq.l} {
		${PUBLIC_CSS_VARS.breakoutLeft}: var(${cssVar("breakoutLeft", "l")});
		${PUBLIC_CSS_VARS.breakoutRight}: var(${cssVar("breakoutRight", "l")});
	}

	${theme.contour.mq.xl} {
		${PUBLIC_CSS_VARS.breakoutLeft}: var(${cssVar("breakoutLeft", "xl")});
		${PUBLIC_CSS_VARS.breakoutRight}: var(${cssVar("breakoutRight", "xl")});
	}
`;

const breakoutColumn = (theme = defaultTheme) => css`
	${columnVars(theme)};
	${breakoutColumnVars(theme)};
	${columnCommon};
	width: calc(
		100% / var(${PUBLIC_CSS_VARS.colCount}) * var(${PUBLIC_CSS_VARS.colSpan}) -
			var(${PUBLIC_CSS_VARS.gap}) * 1px + var(${PUBLIC_CSS_VARS.margin}) *
			var(${PUBLIC_CSS_VARS.breakoutLeft}, 0) * 1px + var(${PUBLIC_CSS_VARS.margin}) *
			var(${PUBLIC_CSS_VARS.breakoutRight}, 0) * 1px
	);
	margin-top: calc(var(${PUBLIC_CSS_VARS.gap}) / 2 * 1px);
	margin-right: calc(
		var(${PUBLIC_CSS_VARS.gap}) / 2 * 1px - var(${PUBLIC_CSS_VARS.margin}) *
			var(${PUBLIC_CSS_VARS.breakoutRight}, 0) * 1px
	);
	margin-bottom: calc(var(${PUBLIC_CSS_VARS.gap}) / 2 * 1px);
	margin-left: calc(
		var(${PUBLIC_CSS_VARS.gap}) / 2 * 1px - var(${PUBLIC_CSS_VARS.margin}) *
			var(${PUBLIC_CSS_VARS.breakoutLeft}, 0) * 1px
	);

	${theme.contour.mq.xl} {
		width: calc(
			100% / var(${PUBLIC_CSS_VARS.colCount}) * var(${PUBLIC_CSS_VARS.colSpan}) -
				var(${PUBLIC_CSS_VARS.gap}) * 1px +
				(var(${PUBLIC_CSS_VARS.vw}, 100vw) - ${theme.contour.breakpoints.xl}px) / 2 *
				var(${PUBLIC_CSS_VARS.breakoutLeft}, 0) +
				(var(${PUBLIC_CSS_VARS.vw}, 100vw) - ${theme.contour.breakpoints.xl}px) / 2 *
				var(${PUBLIC_CSS_VARS.breakoutRight}, 0) + var(${PUBLIC_CSS_VARS.margin}) *
				var(${PUBLIC_CSS_VARS.breakoutLeft}, 0) * 1px + var(${PUBLIC_CSS_VARS.margin}) *
				var(${PUBLIC_CSS_VARS.breakoutRight}, 0) * 1px
		);
		margin-right: calc(
			var(${PUBLIC_CSS_VARS.gap}) / 2 * 1px -
				(var(${PUBLIC_CSS_VARS.vw}, 100vw) - ${theme.contour.breakpoints.xl}px) / 2 *
				var(${PUBLIC_CSS_VARS.breakoutRight}, 0) - var(${PUBLIC_CSS_VARS.margin}) *
				var(${PUBLIC_CSS_VARS.breakoutRight}, 0) * 1px
		);
		margin-left: calc(
			var(${PUBLIC_CSS_VARS.gap}) / 2 * 1px -
				(var(${PUBLIC_CSS_VARS.vw}, 100vw) - ${theme.contour.breakpoints.xl}px) / 2 *
				var(${PUBLIC_CSS_VARS.breakoutLeft}, 0) - var(${PUBLIC_CSS_VARS.margin}) *
				var(${PUBLIC_CSS_VARS.breakoutLeft}, 0) * 1px
		);
	}
`;

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
	...props
}: BreakoutColumnProps) => {
	const colSpanVars = getCSSVars("colSpan", colSpan);
	const orderVars = getCSSVars("order", order);
	const breakoutLeftVars = getCSSVars("breakoutLeft", left);
	const breakoutRightVars = getCSSVars("breakoutRight", right);
	return (
		<Component
			{...props}
			css={breakoutColumn}
			style={{
				...style,
				...colSpanVars,
				...orderVars,
				...breakoutLeftVars,
				...breakoutRightVars,
				[PUBLIC_CSS_VARS.align]: align,
				[PUBLIC_CSS_VARS.justify]: justify,
				[PUBLIC_CSS_VARS.display]: flex && "flex",
			}}
		/>
	);
};

export default memo(BreakoutColumn);
