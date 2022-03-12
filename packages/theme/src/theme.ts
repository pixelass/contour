import { BreakpointKey, BreakpointValues, pxToRem, Theme } from "@contour/utils";
import createMediaQueries from "./create-media-queries";

const defaultBreakpointNames = ["xs", "s", "m", "l", "xl"];

const [xs, s, m, l, xl] = defaultBreakpointNames;

const defaultBreakpointValues: BreakpointValues<number> = {
	[xs]: 0,
	[s]: 360,
	[m]: 600,
	[l]: 905,
	[xl]: 1240,
};

const defaultTheme: Theme = {
	contour: {
		mq: createMediaQueries(defaultBreakpointValues),
		breakpoints: {
			values: defaultBreakpointValues,
			keys: defaultBreakpointNames as BreakpointKey[],
		},
		spacing: multiplier => pxToRem(multiplier * 8),
		colCount: {
			[xs]: 2,
			[s]: 4,
			[m]: 8,
			[l]: 12,
			[xl]: 12,
		},
		gap: {
			x: {
				[xs]: 16,
				[s]: 16,
				[m]: 16,
				[l]: 16,
				[xl]: 16,
			},
			y: {
				[xs]: 16,
				[s]: 16,
				[m]: 16,
				[l]: 16,
				[xl]: 16,
			},
		},
		margin: {
			x: {
				[xs]: 16,
				[s]: 16,
				[m]: 32,
				[l]: 64,
				[xl]: 64,
			},
			y: {
				[xs]: 16,
				[s]: 16,
				[m]: 16,
				[l]: 16,
				[xl]: 16,
			},
		},
	},
};

export default defaultTheme;
