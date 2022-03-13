import { ComponentProps, ElementType, JSXElementConstructor } from "react";
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any  */

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
export type PropsOf<C extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> =
	JSX.LibraryManagedAttributes<C, ComponentProps<C>>;

/**
 * Like `T & U`, but using the value types from `U` where their properties overlap.
 *
 * @internal
 */
export type Overwrite<T, U> = DistributiveOmit<T, keyof U> & U;

/**
 * @internal
 */
export type GenerateStringUnion<T> = Extract<
	{
		[Key in keyof T]: true extends T[Key] ? Key : never;
	}[keyof T],
	string
>;

/**
 * @internal
 */
export type MergeElementProps<T extends ElementType, P extends object = {}> = Omit<
	PropsOf<T>,
	keyof P
> &
	P;

/* eslint-enable @typescript-eslint/ban-types  */
/* eslint-enable @typescript-eslint/no-explicit-any  */
