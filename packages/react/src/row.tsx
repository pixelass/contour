import { FlexRowProps, GridContextShape, GridRowProps, RowProps } from "@contour/utils";
import React, { ElementType, forwardRef, Ref, useMemo } from "react";
import { GridContext, useGridContext } from "./context";
import FlexRow from "./row/components/flex";
import GridRow from "./row/components/grid";

// eslint-disable-next-line react/function-component-definition
function RowBase<T extends ElementType = "div">(
	{ strategy: assignedStrategy, ...props }: RowProps<T>,
	ref: Ref<HTMLDivElement>
) {
	const { strategy } = useGridContext();
	const strategy_ = assignedStrategy ?? strategy;
	const gridContext: GridContextShape = useMemo(() => ({ strategy: "grid" }), []);
	const flexContext: GridContextShape = useMemo(() => ({ strategy: "flex" }), []);
	switch (strategy_) {
		case "grid":
			return (
				<GridContext.Provider value={gridContext}>
					<GridRow ref={ref} {...(props as GridRowProps<T>)} />
				</GridContext.Provider>
			);
		case "flex":
		default:
			return (
				<GridContext.Provider value={flexContext}>
					<FlexRow ref={ref} {...(props as FlexRowProps<T>)} />
				</GridContext.Provider>
			);
	}
}

const Row = forwardRef(RowBase) as typeof RowBase;

export default Row;
