import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slider from "@mui/material/Slider";
import Switch from "@mui/material/Switch";
import { Story } from "@storybook/react";
import Abcq from "abcq";
import React, { useState } from "react";
import Column from "../../packages/react/src/column";
import Grid from "../../packages/react/src/grid";
import defaultTheme from "../../packages/theme/src/theme";

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
	const [colCount, setColCount] = useState(defaultTheme.contour.colCount);
	const [margin, setMargin] = useState(defaultTheme.contour.margin);
	const [gap, setGap] = useState(defaultTheme.contour.gap);
	const [columns, setColumns] = useState([id.generate(), id.generate()]);
	return (
		<>
			<Dialog open={gridConfigOpen}>
				<DialogContent>
					{Object.keys(colCount).map(breakpointKey => {
						return (
							<div key={`colCount:${breakpointKey}`}>
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
											width: 250,
										}}
										onChange={(event_, value) => {
											setColCount(previousState => ({
												...previousState,
												[breakpointKey]: value as number,
											}));
										}}
									/>
								</label>
							</div>
						);
					})}
					{Object.keys(colCount).map(breakpointKey => {
						return (
							<div key={`margin:${breakpointKey}`}>
								<label>
									<div>
										<code>Margin {breakpointKey}</code>
									</div>
									<Slider
										marks
										size="small"
										valueLabelDisplay="on"
										min={0}
										max={96}
										value={margin[breakpointKey]}
										sx={{
											maxWidth: "100%",
											width: 250,
										}}
										onChange={(event_, value) => {
											setMargin(previousState => ({
												...previousState,
												[breakpointKey]: value as number,
											}));
										}}
									/>
								</label>
							</div>
						);
					})}
					{Object.keys(colCount).map(breakpointKey => {
						return (
							<div key={`gap:${breakpointKey}`}>
								<label>
									<div>
										<code>Gap {breakpointKey}</code>
									</div>
									<Slider
										marks
										size="small"
										valueLabelDisplay="on"
										min={0}
										max={96}
										value={gap[breakpointKey]}
										sx={{
											maxWidth: "100%",
											width: 250,
										}}
										onChange={(event_, value) => {
											setGap(previousState => ({
												...previousState,
												[breakpointKey]: value as number,
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

			<Grid colCount={colCount} margin={margin} gap={gap}>
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
