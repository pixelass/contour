import { Column, Grid } from "@contour/react";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Story } from "@storybook/react";
import React from "react";
import { bull, ThemeProvider } from "./helpers";

export const Basics: Story = () => {
	return (
		<ThemeProvider>
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
			<Grid strategy="grid">
				<Column colSpan={{ md: 4 }}>
					<Card>
						<CardContent>
							<Typography gutterBottom sx={{ fontSize: 14 }} color="text.secondary">
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
								&quot;a benevolent smile&quot;
							</Typography>
						</CardContent>
						<CardActions>
							<Button size="small">Learn More</Button>
						</CardActions>
					</Card>
				</Column>
				<Column colSpan={{ md: 4 }}>
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
								Lizards are a widespread group of squamate reptiles, with over 6,000
								species, ranging across all continents except Antarctica
							</Typography>
						</CardContent>
						<CardActions>
							<Button size="small">Share</Button>
							<Button size="small">Learn More</Button>
						</CardActions>
					</Card>
				</Column>
				<Column colSpan={{ md: 4 }}>
					<Card>
						<CardContent sx={{ height: 200 }}>
							<Typography>Contour</Typography>
						</CardContent>
					</Card>
				</Column>
			</Grid>
		</ThemeProvider>
	);
};

Basics.parameters = {
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
