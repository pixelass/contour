import BreakoutColumn from "@contour/react/breakout-column";
import Grid from "@contour/react/grid";
import GridProvider from "@contour/react/provider";
import useViewport from "@contour/hooks/viewport";
import { DebugBox } from "../../helpers";

export default function Example() {
	useViewport();
	return (
		<GridProvider>
			<Grid>
				<BreakoutColumn left={{ m: 1, l: 1, xl: 1 }} right={{ m: 1, l: 1, xl: 1 }}>
					<DebugBox>1</DebugBox>
				</BreakoutColumn>
			</Grid>
		</GridProvider>
	);
}
