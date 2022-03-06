import { createTheme } from "@contour/theme";
import {
	FlexGridProps,
	GridContextShape,
	GridGridProps,
	GridProps,
	NoStrategy,
	OptionalStrategy,
	Theme,
} from "@contour/utils";
import { useTheme } from "@emotion/react";
import React, { memo, useMemo } from "react";
import { GridContext, useGridContext } from "./context";
import FlexGrid from "./grid/components/flex";
import GridGrid from "./grid/components/grid";
import GridProvider from "./provider";

const Grid = ({ strategy: assignedStrategy, ...props }: OptionalStrategy<GridProps>) => {
	const theme = useTheme();
	const { strategy } = useGridContext();
	const strategy_ = assignedStrategy ?? strategy;
	const gridContext: GridContextShape = useMemo(() => ({ strategy: "grid" }), []);
	const flexContext: GridContextShape = useMemo(() => ({ strategy: "flex" }), []);
	const outerTheme = useMemo(
		() => createTheme({ contour: { ...((theme as Partial<Theme>).contour ?? {}) } }),
		[theme]
	);
	switch (strategy_) {
		case "grid":
			return (
				<GridProvider theme={outerTheme}>
					<GridContext.Provider value={gridContext}>
						<GridGrid {...(props as NoStrategy<GridGridProps>)} strategy="grid" />
					</GridContext.Provider>
				</GridProvider>
			);
		case "flex":
		default:
			return (
				<GridProvider theme={outerTheme}>
					<GridContext.Provider value={flexContext}>
						<FlexGrid {...(props as NoStrategy<FlexGridProps>)} strategy="flex" />
					</GridContext.Provider>
				</GridProvider>
			);
	}
};

export default memo(Grid);
