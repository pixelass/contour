import { Column, Grid, Row } from "@contour/react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { amber, indigo, red } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import { Story } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "./helpers";

export const Breakpoints: Story = () => {
	return (
		<ThemeProvider>
			<Grid strategy="grid">
				<Column>
					<Typography variant="h1">Breakpoints</Typography>
					<Row>
						{Array.from({ length: 3 }, (_, index) => (
							<Column key={index} colSpan={{ xs: 2, sm: 2, md: 2, lg: 4, xl: 4 }}>
								<Card sx={{ background: amber[100 * (index + 1)] }}>
									<CardContent sx={{ height: 200 }} />
								</Card>
							</Column>
						))}
					</Row>
					<Row colCount={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 4 }}>
						{Array.from({ length: 4 }, (_, index) => (
							<Column
								key={index}
								colSpan={{ xs: 1 }}
								onClick={event_ => {
									console.log(event_);
								}}
							>
								<Card sx={{ background: indigo[100 * (index + 1)] }}>
									<CardContent sx={{ height: 200 }} />
								</Card>
							</Column>
						))}
					</Row>
					<Row colCount={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}>
						{Array.from({ length: 4 }, (_, index) => (
							<Column
								key={index}
								colSpan={{ xs: 1 }}
								onClick={event_ => {
									console.log(event_);
								}}
							>
								<Card sx={{ background: red[100 * (index + 1)] }}>
									<CardContent sx={{ height: 200 }} />
								</Card>
							</Column>
						))}
					</Row>
				</Column>
			</Grid>
		</ThemeProvider>
	);
};

Breakpoints.parameters = {
	controls: { hideNoControlsWarning: true },
	options: {
		actions: {
			disable: true, // do not show the knobs addon on this story
		},
	},
};

const story = {
	component: () => null,
	title: "Examples / With other Libraries / MUI",
};

export default story;
