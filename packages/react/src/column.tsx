import { ColumnProps, FlexColumnProps, GridColumnProps, NoStrategy } from "@contour/utils/types";
import { useGridContext } from "@contour/react/context";
import React from "react";
import FlexColumn from "./column/components/flex";
import GridColumn from "./column/components/grid";

const Column = (props: NoStrategy<ColumnProps>) => {
	const { strategy } = useGridContext();
	switch (strategy) {
		case "grid":
			return <GridColumn {...(props as NoStrategy<GridColumnProps>)} strategy="grid" />;
		case "flex":
		default:
			return <FlexColumn {...(props as NoStrategy<FlexColumnProps>)} strategy="flex" />;
	}
};

export default Column;
