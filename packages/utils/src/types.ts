import { CSSProperties, ElementType, HTMLProps, ReactNode } from "react";
import { Except } from "type-fest";
import { MergeElementProps, OverridableStringUnion } from "./types/utils";

export interface BreakpointKeyOverrides {}

export type OriginalBreakpointKey = "xs" | "s" | "m" | "l" | "xl";

export type BreakpointKey = OverridableStringUnion<
	"xs" | "s" | "m" | "l" | "xl",
	BreakpointKeyOverrides
>;

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
	| "gapX"
	| "gapY"
	| "marginX"
	| "marginY"
	| "breakoutLeft"
	| "breakoutRight";

export type AtMediaQuery = `@media${string}(min-width:${string})`;

export type BreakpointValues<V = string | number> = Record<BreakpointKey | string, V>;

export type MediaQueries = Record<BreakpointKey | string, AtMediaQuery>;

export interface GridContextShape {
	strategy: Strategy;
}

export type SXValue<T = number | string> = T | BreakpointValues<T>;

export interface SxProperties extends Record<AtMediaQuery, CSSProperties>, CSSProperties {}

export interface SXObject extends Record<string, SXValue> {
	m?: SXValue;
	mt?: SXValue;
	mr?: SXValue;
	mb?: SXValue;
	ml?: SXValue;
	mx?: SXValue;
	my?: SXValue;
	p?: SXValue;
	pt?: SXValue;
	pr?: SXValue;
	pb?: SXValue;
	pl?: SXValue;
	px?: SXValue;
	py?: SXValue;
	bgcolor?: SXValue<string>;
}

export type SxFunction = (theme: Theme) => SXObject;

export type Sx = SxFunction | SXObject;

export interface BaseProps extends Except<HTMLProps<HTMLElement>, "as" | "colSpan"> {
	sx?: Sx;
	alignItems?: Align;
	justifyContent?: Justify;
}

export interface BaseColumnProps<T extends Strategy = "flex"> extends BaseProps {
	colSpan?: Partial<BreakpointValues>;
	colStart?: T extends "flex" ? never : Partial<BreakpointValues>;
	order?: Partial<BreakpointValues>;
	flex?: boolean;
}

export interface BaseGridProps extends BaseProps {
	colCount?: Partial<BreakpointValues>;
	gap?: Partial<XYBreakpointValues<number>> | Partial<BreakpointValues<number>>;
	margin?: Partial<XYBreakpointValues<number>> | Partial<BreakpointValues<number>>;
}

export interface BaseRowProps extends BaseGridProps {}

export interface FlexColumnProps<P extends ElementType> extends BaseColumnProps {
	as?: P;
	fill?: boolean;
}

export type OverrideableFlexColumnProps<P extends ElementType> = {
	as?: P;
	fill?: boolean;
} & MergeElementProps<P, BaseColumnProps>;

export interface GridColumnProps<P extends ElementType> extends BaseColumnProps<"grid"> {
	as?: P;
}

export type OverrideableGridColumnProps<P extends ElementType> = {
	as?: P;
} & MergeElementProps<P, BaseColumnProps<"grid">>;

export interface BreakoutColumnProps<P extends ElementType> extends BaseColumnProps {
	left?: Partial<BreakpointValues<number>>;
	right?: Partial<BreakpointValues<number>>;
	as?: P;
}

export interface FlexRowProps<P extends ElementType> extends BaseRowProps {
	as?: P;
}

export interface GridRowProps<P extends ElementType> extends BaseRowProps {
	as?: P;
}

export interface FlexGridProps<P extends ElementType> extends BaseGridProps {
	as?: P;
}

export interface GridGridProps<P extends ElementType> extends BaseGridProps {
	as?: P;
}

export type ColumnProps<P extends ElementType> = {
	as?: P;
} & MergeElementProps<P, FlexColumnProps<P> | GridColumnProps<P>>;

export type GridProps<P extends ElementType> = {
	as?: P;
	strategy?: Strategy;
} & MergeElementProps<P, FlexGridProps<P> | GridGridProps<P>>;

export type RowProps<P extends ElementType> = {
	as?: P;
	strategy?: Strategy;
} & MergeElementProps<P, FlexRowProps<P> | GridRowProps<P>>;

export interface Breakpoints {
	values: BreakpointValues<number>;
	keys: BreakpointKey[];
}

export interface XYBreakpointValues<T = string | number> {
	x: BreakpointValues<T>;
	y: BreakpointValues<T>;
}

export interface Theme {
	contour: {
		breakpoints: Breakpoints;
		colCount: BreakpointValues<number>;
		gap: XYBreakpointValues<number>;
		margin: XYBreakpointValues<number>;
		spacing(multiplier: number): string;
		mq: MediaQueries;
	};
}

export interface PartialTheme {
	breakpoints?: Partial<Breakpoints>;
	colCount?: Partial<BreakpointValues<number>>;
	gap?: Partial<BreakpointValues<number>> | Partial<XYBreakpointValues<number>>;
	margin?: Partial<BreakpointValues<number>> | Partial<XYBreakpointValues<number>>;
	spacing?: number;
}

export interface GridProviderProps {
	children?: ReactNode;
	theme?: Theme;
}
