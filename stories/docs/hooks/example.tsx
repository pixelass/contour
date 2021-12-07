import useViewport from "../../../packages/hooks/src/viewport";
import BreakoutColumn from "../../../packages/react/src/breakout-column";
import Grid from "../../../packages/react/src/grid";
import GridProvider from "../../../packages/react/src/provider";
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
