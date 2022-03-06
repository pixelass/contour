import * as React from "react";
import { CSSProperties, ElementType, ReactNode } from "react";
import { Except } from "type-fest";

/* eslint-disable @typescript-eslint/ban-types */
/**
 * Remove properties `K` from `T`.
 * Distributive for union types.
 *
 * @internal
 */
export type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;

/**
 * Generate a set of string literal types with the given default record `T` and
 * override record `U`.
 *
 * If the property value was `true`, the property key will be added to the
 * string union.
 *
 * @internal
 */
export type OverridableStringUnion<T extends string | number, U = {}> = GenerateStringUnion<
	Overwrite<Record<T, true>, U>
>;

/**
 * @desc Utility type for getting props type of React component.
 * It takes `defaultProps` into an account - making props with defaults optional.
 *
 * @internal
 */
export type PropsOf<C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>> =
	JSX.LibraryManagedAttributes<C, React.ComponentProps<C>>;

/* eslint-enable @typescript-eslint/ban-types */

/**
 * Like `T & U`, but using the value types from `U` where their properties overlap.
 *
 * @internal
 */
export type Overwrite<T, U> = DistributiveOmit<T, keyof U> & U;

type GenerateStringUnion<T> = Extract<
	{
		[Key in keyof T]: true extends T[Key] ? Key : never;
	}[keyof T],
	string
>;

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface BreakpointKeyOverrides {}
/* eslint-enable @typescript-eslint/no-empty-interface */

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
	bgColor?: SXValue<string>;
}

export type SxFunction = (theme: Theme) => SXObject;

export type Sx = SxFunction | SXObject;

export interface BaseProps<T = "flex"> {
	as?: ElementType;
	children?: ReactNode;
	strategy: T;
	style?: CSSProperties;
	sx?: Sx;
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
	gap?: Partial<XYBreakpointValues<number>> | Partial<BreakpointValues<number>>;
	margin?: Partial<XYBreakpointValues<number>> | Partial<BreakpointValues<number>>;
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

export type ColumnProps =
	| (FlexColumnProps & PropsOf<BaseProps["as"]>)
	| (GridColumnProps & PropsOf<BaseProps<"grid">["as"]>);

export type GridProps =
	| (FlexGridProps & PropsOf<BaseProps["as"]>)
	| (GridGridProps & PropsOf<BaseProps<"grid">["as"]>);

export type RowProps =
	| (FlexRowProps & PropsOf<BaseProps["as"]>)
	| (GridRowProps & PropsOf<BaseProps<"grid">["as"]>);

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
		spacing: number;
		mq: MediaQueries;
	};
}

export interface PartialTheme {
	contour: {
		breakpoints?: Partial<Breakpoints>;
		colCount?: Partial<BreakpointValues<number>>;
		gap?: Partial<BreakpointValues<number>> | Partial<XYBreakpointValues<number>>;
		margin?: Partial<BreakpointValues<number>> | Partial<XYBreakpointValues<number>>;
		spacing?: number;
		mq?: Partial<MediaQueries>;
	};
}

export interface GridProviderProps {
	children?: ReactNode;
	theme?: Theme;
}
