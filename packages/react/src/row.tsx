import {
	FlexRowProps,
	GridContextShape,
	GridRowProps,
	NoStrategy,
	OptionalStrategy,
	RowProps,
} from "@contour/utils";
import React, { memo, useMemo } from "react";
import { GridContext, useGridContext } from "./context";
import FlexRow from "./row/components/flex";
import GridRow from "./row/components/grid";

const Row = ({ strategy: assignedStrategy, ...props }: OptionalStrategy<RowProps>) => {
	const { strategy } = useGridContext();
	const strategy_ = assignedStrategy ?? strategy;
	const gridContext: GridContextShape = useMemo(() => ({ strategy: "grid" }), []);
	const flexContext: GridContextShape = useMemo(() => ({ strategy: "flex" }), []);
	switch (strategy_) {
		case "grid":
			return (
				<GridContext.Provider value={gridContext}>
					<GridRow {...(props as NoStrategy<GridRowProps>)} strategy="grid" />
				</GridContext.Provider>
			);
		case "flex":
		default:
			return (
				<GridContext.Provider value={flexContext}>
					<FlexRow {...(props as NoStrategy<FlexRowProps>)} strategy="flex" />
				</GridContext.Provider>
			);
	}
};

export default memo(Row);
