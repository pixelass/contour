import {
	ColumnProps,
	OverrideableFlexColumnProps,
	OverrideableGridColumnProps,
} from "@contour/utils";
import React, { ElementType, forwardRef, Ref } from "react";
import FlexColumn from "./column/components/flex";
import GridColumn from "./column/components/grid";
import { useGridContext } from "./context";

// eslint-disable-next-line react/function-component-definition
function ColumnBase<T extends ElementType = "div">(
	props: ColumnProps<T>,
	ref: Ref<HTMLDivElement>
) {
	const { strategy } = useGridContext();
	switch (strategy) {
		case "grid":
			return <GridColumn ref={ref} {...(props as OverrideableGridColumnProps<T>)} />;
		case "flex":
		default:
			return <FlexColumn ref={ref} {...(props as OverrideableFlexColumnProps<T>)} />;
	}
}

const Column = forwardRef<HTMLDivElement>(ColumnBase) as typeof ColumnBase;

export default Column;
