/// <reference types="@emotion/react/types/css-prop" />
import { Column } from "@contour/react";
import { ColumnProps, Theme } from "@contour/utils";
import { css, keyframes } from "@emotion/react";
import React, { CSSProperties, FC } from "react";

const marchingAnts = keyframes`
	from {
		background-position: 0 0, 100% 0, 100% 100%, 0 100%;
	}
	to {
		background-position: calc(var(--dash-width) * 2) 0, 100% calc(var(--dash-width) * 2), calc(100% - var(--dash-width) * 2) 100%, 0 calc(100% - var(--dash-width) * 2);
	}
`;

export const debugBox = css`
	position: relative;
	min-height: 2rem;

	&::before {
		content: "";
		position: absolute;
		inset: 0;
		animation: ${marchingAnts} 1s linear infinite;
		background-image: linear-gradient(to right, var(--color) 50%, transparent 50%),
			linear-gradient(to bottom, var(--color) 50%, transparent 50%),
			linear-gradient(to left, var(--color) 50%, transparent 50%),
			linear-gradient(to top, var(--color) 50%, transparent 50%);
		background-repeat: repeat-x, repeat-y, repeat-x, repeat-y;
		background-position: 0 0, 100% 0, 100% 100%, 0 100%;
		background-size: calc(var(--dash-width) * 2) var(--stroke-width),
			var(--stroke-width) calc(var(--dash-width) * 2),
			calc(var(--dash-width) * 2) var(--stroke-width),
			var(--stroke-width) calc(var(--dash-width) * 2);
		pointer-events: none;
	}
`;

export const DebugColumn: FC<
	ColumnProps<keyof JSX.IntrinsicElements> & {
		color?: string;
		strokeWidth?: string;
		dashWidth?: string;
	}
> = ({ color = "currentColor", dashWidth = "8px", strokeWidth = "1px", ...props }) => (
	<Column
		css={css`
			--color: ${color};
			--dash-width: ${dashWidth};
			--stroke-width: ${strokeWidth};

			${debugBox};
		`}
		{...props}
	/>
);

export const DebugBox: FC<{
	color?: string;
	strokeWidth?: string;
	dashWidth?: string;
	style?: CSSProperties;
}> = ({
	color = "hsla(0,0%,0%, 1)",
	dashWidth = "8px",
	strokeWidth = "1px",
	style = {},
	...props
}) => (
	<div
		css={css`
			--color: ${color};
			--dash-width: ${dashWidth};
			--stroke-width: ${strokeWidth};

			${debugBox};
		`}
		style={style}
		{...props}
	/>
);

export const ColorBox: FC<{ color?: string }> = ({ color = "hsla(0,0%,0%, 1)", ...props }) => (
	<div
		css={css`
			flex: 1;
			background: ${color};
		`}
		{...props}
	/>
);

export const getColumnWidth = (theme: Theme) => {
	const [, , , , xl] = theme.contour.breakpoints.keys;
	return (
		(theme.contour.breakpoints[xl] - theme.contour.margin.x[xl] * 2) /
		theme.contour.colCount[xl]
	);
};

export const getColumnsWidth = (theme: Theme, colSpan: number, gap = 0) => {
	const [, , , , xl] = theme.contour.breakpoints.keys;

	return colSpan * getColumnWidth(theme) - (theme.contour.gap[xl] / 2) * gap;
};

export const Rainbow = ({ length }: { length: number }) => (
	<>
		{Array.from({ length }, (_, index) => ({ id: index })).map(({ id }, index) => (
			<DebugColumn
				key={id}
				colSpan={{ xs: 1 }}
				strokeWidth="2px"
				color={`hsl(${(360 / length) * index}, 100%, 40%)`}
			/>
		))}
	</>
);
