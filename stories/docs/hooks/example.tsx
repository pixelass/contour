import useViewport from "@contour/hooks/viewport";
import { BreakoutColumn, Grid } from "@contour/react";
import React from "react";

import { DebugBox } from "../../helpers";

export const Example = () => {
	useViewport();
	return (
		<Grid>
			<BreakoutColumn left={{ m: 1, l: 1, xl: 1 }} right={{ m: 1, l: 1, xl: 1 }}>
				<DebugBox>1</DebugBox>
			</BreakoutColumn>
		</Grid>
	);
};
