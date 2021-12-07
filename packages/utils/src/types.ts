import { CSSProperties, ElementType, ReactNode } from "react";
import { Except } from "type-fest";

export type BreakpointKey = "xs" | "s" | "m" | "l" | "xl";

export type Axis = "y" | "x";

export type Strategy = "flex" | "grid";

export type Align = "center" | "end" | "start";
export type Justify = "center" | "end" | "start";

export type CSSVarKey =
	| "colSpan"
	| "colCount"
	| "colStart"
	| "order"
	| "gap"
	| "margin"
	| "breakoutLeft"
	| "breakoutRight";

export type AtMediaquery = `@media${string}(min-width:${string})`;

export type BreakpointValues<T = string | number> = Record<BreakpointKey, T>;

export type MediaQueries = Record<BreakpointKey, AtMediaquery>;

export interface GridContextShape {
	strategy: Strategy;
}

export interface BaseProps<T> {
	as?: ElementType;
	children?: ReactNode;
	strategy: T;
	style?: CSSProperties;
	align?: Align;
	justify?: Justify;
}

export interface BaseColumnProps<T = "flex"> extends BaseProps<T> {
	colSpan?: Partial<BreakpointValues>;
	colStart?: Partial<BreakpointValues>;
	order?: Partial<BreakpointValues>;
	flex?: boolean;
}

export interface BaseGridProps<T = "flex"> extends BaseProps<T> {
	colCount?: Partial<BreakpointValues>;
	gap?: Partial<BreakpointValues>;
	margin?: Partial<BreakpointValues>;
}

export interface BaseRowProps<T = "flex"> extends BaseGridProps<T> {}

export interface FlexColumnProps extends BaseColumnProps {}

export interface GridColumnProps extends BaseColumnProps<"grid"> {}

export interface BreakoutColumnProps extends NoStrategy<BaseColumnProps> {
	left?: Partial<BreakpointValues<number>>;
	right?: Partial<BreakpointValues<number>>;
}

export interface FlexRowProps extends BaseRowProps {}

export interface GridRowProps extends BaseRowProps<"grid"> {}

export interface FlexGridProps extends BaseGridProps {}

export interface GridGridProps extends BaseGridProps<"grid"> {}

export type NoStrategy<T extends { strategy: Strategy }> = Except<T, "strategy">;

export type OptionalStrategy<T extends { strategy: Strategy }> = NoStrategy<T> & {
	strategy?: Strategy;
};

export type ColumnProps = FlexColumnProps | GridColumnProps;

export type GridProps = FlexGridProps | GridGridProps;

export type RowProps = FlexRowProps | GridRowProps;

export interface Theme {
	contour: {
		breakpoints: BreakpointValues<number>;
		colCount: BreakpointValues<number>;
		gap: BreakpointValues<number>;
		margin: BreakpointValues<number>;
		mq: MediaQueries;
	};
}

export interface PartialTheme {
	contour: {
		breakpoints?: Partial<BreakpointValues<number>>;
		colCount?: Partial<BreakpointValues<number>>;
		gap?: Partial<BreakpointValues<number>>;
		margin?: Partial<BreakpointValues<number>>;
		mq?: Partial<MediaQueries>;
	};
}

export interface GridProviderProps {
	children?: ReactNode;
	theme?: Theme;
}
