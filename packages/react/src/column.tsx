import { ColumnProps, FlexColumnProps, GridColumnProps, NoStrategy } from "@contour/utils/types";
import React from "react";
import FlexColumn from "./column/components/flex";
import GridColumn from "./column/components/grid";
import { useGridContext } from "./context";

const Column = (props: NoStrategy<ColumnProps>) => {
	const { strategy } = useGridContext();
	console.log(strategy);
	switch (strategy) {
		case "grid":
			return <GridColumn {...(props as NoStrategy<GridColumnProps>)} strategy="grid" />;
		case "flex":
		default:
			return <FlexColumn {...(props as NoStrategy<FlexColumnProps>)} strategy="flex" />;
	}
};

export default Column;
