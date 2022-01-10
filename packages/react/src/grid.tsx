import { GridContext, useGridContext } from "@contour/react/context";
import {
	FlexGridProps,
	GridContextShape,
	GridGridProps,
	GridProps,
	NoStrategy,
	OptionalStrategy,
} from "@contour/utils/types";
import React, { memo, useMemo } from "react";
import FlexGrid from "./grid/components/flex";
import GridGrid from "./grid/components/grid";

const Grid = ({ strategy: assignedStrategy, ...props }: OptionalStrategy<GridProps>) => {
	const { strategy } = useGridContext();
	const strategy_ = assignedStrategy ?? strategy;
	const gridContext: GridContextShape = useMemo(() => ({ strategy: "grid" }), []);
	const flexContext: GridContextShape = useMemo(() => ({ strategy: "flex" }), []);
	switch (strategy_) {
		case "grid":
			return (
				<GridContext.Provider value={gridContext}>
					<GridGrid {...(props as NoStrategy<GridGridProps>)} strategy="grid" />
				</GridContext.Provider>
			);
		case "flex":
		default:
			return (
				<GridContext.Provider value={flexContext}>
					<FlexGrid {...(props as NoStrategy<FlexGridProps>)} strategy="flex" />
				</GridContext.Provider>
			);
	}
};

export default memo(Grid);
