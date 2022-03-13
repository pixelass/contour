import { BreakpointKey, BreakpointValues, OriginalBreakpointKey } from "@contour/utils/types";

const remapObject = <T>(
	originalObject: Record<OriginalBreakpointKey | string, T>,
	[xs, s, m, l, xl]: BreakpointKey[]
): BreakpointValues<T> => ({
	[xs]: originalObject.xs,
	[s]: originalObject.s,
	[m]: originalObject.m,
	[l]: originalObject.l,
	[xl]: originalObject.xl,
});

export default remapObject;
