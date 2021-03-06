import { createTheme } from "@contour/theme";
import { FlexGridProps, GridContextShape, GridGridProps, GridProps } from "@contour/utils";
import { useTheme } from "@emotion/react";
import React, { ElementType, forwardRef, Ref, useMemo } from "react";
import { GridContext, useGridContext } from "./context";
import FlexGrid from "./grid/components/flex";
import GridGrid from "./grid/components/grid";
import GridProvider from "./provider";

// eslint-disable-next-line react/function-component-definition
function GridBase<T extends ElementType = "div">(
	{ strategy: assignedStrategy, ...props }: GridProps<T>,
	ref: Ref<HTMLDivElement>
) {
	const outerTheme = useTheme();
	const { strategy } = useGridContext();
	const strategy_ = assignedStrategy ?? strategy;
	const gridContext: GridContextShape = useMemo(() => ({ strategy: "grid" }), []);
	const flexContext: GridContextShape = useMemo(() => ({ strategy: "flex" }), []);
	const theme = useMemo(() => (outerTheme.contour ? outerTheme : createTheme({})), [outerTheme]);
	switch (strategy_) {
		case "grid":
			return (
				<GridProvider theme={theme}>
					<GridContext.Provider value={gridContext}>
						<GridGrid ref={ref} {...(props as GridGridProps<T>)} />
					</GridContext.Provider>
				</GridProvider>
			);
		case "flex":
		default:
			return (
				<GridProvider theme={theme}>
					<GridContext.Provider value={flexContext}>
						<FlexGrid ref={ref} {...(props as FlexGridProps<T>)} />
					</GridContext.Provider>
				</GridProvider>
			);
	}
}
const Grid = forwardRef(GridBase) as typeof GridBase;

export default Grid;
