import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import amber from "@mui/material/colors/amber";
import Slider from "@mui/material/Slider";
import Switch from "@mui/material/Switch";
import Grid from "../../packages/react/src/grid";
import Column from "../../packages/react/src/column";
import { Story } from "@storybook/react";
import React, { useState } from "react";
import Abcq from "abcq";
import { DebugBox } from "../helpers";

const id = new Abcq();

const breakpointKeys = ["xs", "s", "m", "l", "xl"];

const ConfigurableColumn = ({ colCount }: { colCount: Record<string, number> }) => {
	const [colSpan, setColSpan] = useState({});
	const [open, setOpen] = useState(false);
	return (
		<>
			<Dialog open={open}>
				<DialogContent sx={{ minWidth: 250 }}>
					{breakpointKeys.map(breakpointKey => {
						return (
							<div key={breakpointKey}>
								<div>
									<Switch
										size="small"
										checked={Boolean(colSpan[breakpointKey])}
										onChange={(event_, value) => {
											setColSpan(previousState => ({
												...previousState,
												[breakpointKey]: value ? 2 : undefined,
											}));
										}}
									/>
									<code>
										colSpan {breakpointKey} ={" "}
										{colSpan[breakpointKey] ?? "undefined"}
									</code>
								</div>

								<Slider
									marks
									disabled={!colSpan[breakpointKey]}
									size="small"
									min={1}
									max={colCount[breakpointKey]}
									value={colSpan[breakpointKey] ?? -1}
									sx={{
										maxWidth: "100%",
										width: 150,
									}}
									onChange={(event_, value) => {
										setColSpan(previousState => ({
											...previousState,
											[breakpointKey]: value,
										}));
									}}
								/>
							</div>
						);
					})}
				</DialogContent>
				<DialogActions>
					<Button
						onClick={() => {
							setOpen(false);
						}}
					>
						Close
					</Button>
				</DialogActions>
			</Dialog>
			<Column colSpan={colSpan}>
				<DebugBox>
					<Card elevation={0}>
						<CardContent>
							<pre>
								<code>{JSON.stringify(colSpan, null, 2)}</code>
							</pre>
						</CardContent>
						<CardActions>
							<Button
								onClick={() => {
									setOpen(true);
								}}
							>
								Configure
							</Button>
						</CardActions>
					</Card>
				</DebugBox>
			</Column>
		</>
	);
};

export const Playground: Story = () => {
	const [gridConfigOpen, setGridConfigOpen] = useState(false);
	const [colCount, setColCount] = useState({
		xs: 2,
		s: 4,
		m: 8,
		l: 12,
		xl: 12,
	});
	const [columns, setColumns] = useState([id.generate(), id.generate()]);
	return (
		<>
			<Dialog open={gridConfigOpen}>
				<DialogContent>
					{Object.keys(colCount).map(breakpointKey => {
						return (
							<div key={breakpointKey}>
								<label>
									<div>
										<code>colCount {breakpointKey}</code>
									</div>
									<Slider
										marks
										size="small"
										valueLabelDisplay="on"
										min={1}
										max={16}
										value={colCount[breakpointKey]}
										sx={{
											maxWidth: "100%",
											width: 150,
										}}
										onChange={(event_, value) => {
											setColCount(previousState => ({
												...previousState,
												[breakpointKey]: value,
											}));
										}}
									/>
								</label>
							</div>
						);
					})}
				</DialogContent>
				<DialogActions>
					<Button
						onClick={() => {
							setGridConfigOpen(false);
						}}
					>
						Close
					</Button>
				</DialogActions>
			</Dialog>

			<Grid colCount={colCount}>
				<Column>
					<Button
						onClick={() => {
							setGridConfigOpen(true);
						}}
					>
						Configure
					</Button>
				</Column>
				<Column>
					<Button
						variant="contained"
						onClick={() => {
							setColumns(previousState => [...previousState, id.generate()]);
						}}
					>
						Add Column
					</Button>
				</Column>
				{Object.keys(columns)
					.sort((a, b) => id.decode(a) - id.decode(b))
					.map(key => {
						return <ConfigurableColumn key={key} colCount={colCount} />;
					})}
			</Grid>
		</>
	);
};

const story = {
	component: Playground,
	title: "Playground",
};

export default story;
