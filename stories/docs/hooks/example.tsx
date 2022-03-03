import useViewport from "@contour/hooks/viewport";
import BreakoutColumn from "@contour/react/breakout-column";
import Grid from "@contour/react/grid";
import { DebugBox } from "../../helpers";

export default function Example() {
	useViewport();
	return (
		<Grid>
			<BreakoutColumn left={{ m: 1, l: 1, xl: 1 }} right={{ m: 1, l: 1, xl: 1 }}>
				<DebugBox>1</DebugBox>
			</BreakoutColumn>
		</Grid>
	);
}
