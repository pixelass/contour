import Column from "@contour/react/column";
import Grid from "@contour/react/grid";
import GridProvider from "@contour/react/provider";
import {
	createMediaqueries,
	createTheme as createContourTheme,
	defaultTheme,
} from "@contour/theme";
import { BreakpointValues } from "@contour/utils";
import { css, Global } from "@emotion/react";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { red, teal } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Story } from "@storybook/react";
import React from "react";
import { Page } from "./page.stories";

const muiTheme = createTheme({});
const keyMap = {
	xs: "xs",
	sm: "s",
	md: "m",
	lg: "l",
	xl: "xl",
};
const breakpoints: BreakpointValues<number> = Object.entries(muiTheme.breakpoints.values).reduce(
	(previousValue, [key, value]) => {
		return {
			...previousValue,
			[keyMap[key]]: value,
		};
	},
	defaultTheme.contour.breakpoints
);

const muiGap = Number.parseInt(muiTheme.spacing(1), 10);
const contourTheme = createContourTheme({
	contour: {
		mq: createMediaqueries(breakpoints),
		breakpoints,
		gap: {
			xs: muiGap * 2,
			s: muiGap * 2,
			m: muiGap * 2,
			l: muiGap * 2,
			xl: muiGap * 2,
		},
		margin: {
			xs: muiGap * 2,
			s: muiGap * 2,
			m: muiGap * 2,
			l: muiGap * 2,
			xl: muiGap * 2,
		},
	},
});

const bull = (
	<Box component="span" sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
		•
	</Box>
);

export const MaterialUI: Story = args => {
	return (
		<ThemeProvider theme={muiTheme}>
			<Global
				styles={css`
					body,
					.sb-show-main.sb-main-padded {
						margin: 0;
						padding: 0;
					}
					* {
						box-sizing: border-box;
					}
				`}
			/>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						News
					</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
			<GridProvider theme={contourTheme}>
				<Grid strategy="grid">
					<Column colSpan={{ m: 4 }}>
						<Card>
							<CardContent>
								<Typography
									sx={{ fontSize: 14 }}
									color="text.secondary"
									gutterBottom
								>
									Word of the Day
								</Typography>
								<Typography variant="h5" component="div">
									be{bull}nev{bull}o{bull}lent
								</Typography>
								<Typography sx={{ mb: 1.5 }} color="text.secondary">
									adjective
								</Typography>
								<Typography variant="body2">
									well meaning and kindly.
									<br />
									{'"a benevolent smile"'}
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small">Learn More</Button>
							</CardActions>
						</Card>
					</Column>
					<Column colSpan={{ m: 4 }}>
						<Card>
							<CardMedia
								component="img"
								height="300"
								image="https://source.unsplash.com/7xm5J9FbZmw/600x600"
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Lizard
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small">Share</Button>
								<Button size="small">Learn More</Button>
							</CardActions>
						</Card>
					</Column>
					<Column colSpan={{ m: 4 }}>
						<Card>
							<CardContent sx={{ height: 200 }}>
								<Typography>Contour</Typography>
							</CardContent>
						</Card>
					</Column>
					<Column>
						<Typography variant="h2">Advanced</Typography>
						<Typography variant="h3">No additional markup</Typography>
					</Column>
					<Column colSpan={{ s: 2 }} as={Card}>
						<CardContent sx={{ height: 200, background: teal[50] }} />
					</Column>
					<Column colSpan={{ s: 2 }} as={Card}>
						<CardContent sx={{ height: 200, background: teal[100] }} />
					</Column>
					<Column colSpan={{ s: 2 }} as={Card}>
						<CardContent sx={{ height: 200, background: teal[200] }} />
					</Column>
					<Column colSpan={{ s: 2 }} as={Card}>
						<CardContent sx={{ height: 200, background: teal[300] }} />
					</Column>
					<Column colSpan={{ s: 2 }} as={Card}>
						<CardContent sx={{ height: 200, background: teal[400] }} />
					</Column>
					<Column colSpan={{ s: 2 }} as={Card}>
						<CardContent sx={{ height: 200, background: teal[500] }} />
					</Column>
					<Column>
						<Typography variant="h3">Standalone</Typography>
					</Column>
					<Card sx={{ gridColumnEnd: "span 2" }}>
						<CardContent sx={{ height: 200, background: red[50] }} />
					</Card>
					<Card sx={{ gridColumnEnd: "span 2" }}>
						<CardContent sx={{ height: 200, background: red[100] }} />
					</Card>
					<Card sx={{ gridColumnEnd: "span 2" }}>
						<CardContent sx={{ height: 200, background: red[200] }} />
					</Card>
					<Card sx={{ gridColumnEnd: "span 2" }}>
						<CardContent sx={{ height: 200, background: red[300] }} />
					</Card>
					<Card sx={{ gridColumnEnd: "span 2" }}>
						<CardContent sx={{ height: 200, background: red[400] }} />
					</Card>
					<Card sx={{ gridColumnEnd: "span 2" }}>
						<CardContent sx={{ height: 200, background: red[500] }} />
					</Card>
				</Grid>
			</GridProvider>
		</ThemeProvider>
	);
};

MaterialUI.parameters = {
	controls: { hideNoControlsWarning: true },
	options: {
		actions: {
			disable: true, // do not show the knobs addon on this story
		},
	},
};

const story = {
	component: () => null,
	title: "Examples/With Other Libraries",
};

export default story;
