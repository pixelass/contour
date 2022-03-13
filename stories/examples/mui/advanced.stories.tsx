import { Column, Grid, Row } from "@contour/react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { red, teal } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import { Story } from "@storybook/react";
import React, { useRef } from "react";
import { ThemeProvider } from "./helpers";

export const Advanced: Story = () => {
	const ref = useRef<HTMLDivElement>(null);
	return (
		<ThemeProvider>
			<Grid ref={ref} strategy="grid">
				<Column>
					<Typography variant="h1">Advanced</Typography>
					<Typography variant="h2">No additional markup</Typography>
				</Column>
				<Column colSpan={{ sm: 4 }} as={Card} elevation={2} sx={{ bgcolor: teal[50] }}>
					<Row sx={{ py: 0 }}>
						<Column flex colSpan={{ sm: 2 }}>
							<img
								width="100%"
								alt="Four hot air balloons in the sky"
								src="https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&w=200&h=200&q=80"
							/>
						</Column>
						<Column colSpan={{ sm: 2 }}>
							<CardContent>
								<Typography variant="h5" component="div" marginBottom={1}>
									Flamingo
								</Typography>
								<Typography variant="body2" component="div">
									Flamingos or flamingoes /fləˈmɪŋɡoʊz/ are a type of wading bird.
								</Typography>
							</CardContent>
						</Column>
					</Row>
				</Column>
				<Column
					colSpan={{ sm: 2 }}
					as={Card}
					elevation={4}
					sx={{ minHeight: 100, bgcolor: teal[100] }}
				/>
				<Column
					colSpan={{ sm: 2 }}
					as={Card}
					elevation={6}
					sx={{ minHeight: 100, bgcolor: teal[200] }}
				/>
				<Column
					colSpan={{ sm: 2 }}
					as={Card}
					elevation={8}
					sx={{ minHeight: 100, bgcolor: teal[300] }}
				/>
				<Column
					colSpan={{ sm: 2 }}
					as={Card}
					elevation={10}
					sx={{ minHeight: 100, bgcolor: teal[400] }}
				/>
				<Column>
					<Typography variant="h2">Standalone</Typography>
				</Column>
				<Card sx={{ gridColumnEnd: "span 2" }} elevation={2}>
					<CardContent sx={{ minHeight: 100, bgcolor: red[50] }} />
				</Card>
				<Card sx={{ gridColumnEnd: "span 2" }} elevation={4}>
					<CardContent sx={{ minHeight: 100, bgcolor: red[100] }} />
				</Card>
				<Card sx={{ gridColumnEnd: "span 2" }} elevation={6}>
					<CardContent sx={{ minHeight: 100, bgcolor: red[200] }} />
				</Card>
				<Card sx={{ gridColumnEnd: "span 2" }} elevation={8}>
					<CardContent sx={{ minHeight: 100, bgcolor: red[300] }} />
				</Card>
				<Card sx={{ gridColumnEnd: "span 2" }} elevation={10}>
					<CardContent sx={{ minHeight: 100, bgcolor: red[400] }} />
				</Card>
				<Card sx={{ gridColumnEnd: "span 2" }} elevation={12}>
					<CardContent sx={{ minHeight: 100, bgcolor: red[500] }} />
				</Card>
			</Grid>
		</ThemeProvider>
	);
};

Advanced.parameters = {
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
