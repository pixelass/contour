import { Column, Grid, Row } from "@contour/react";
import { BaseColumnProps, PUBLIC_CSS_VARS } from "@contour/utils";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { amber, indigo } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Story } from "@storybook/react";
import React, { Children, ReactNode, useCallback, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { ThemeProvider } from "./helpers";

const Slider = ({
	children,
	initialSlide = 0,
}: {
	children?: ReactNode;
	initialSlide?: number;
}) => {
	const [currentSlide, setCurrentSlide] = useState(initialSlide);
	const ref = useRef<HTMLDivElement>(null);
	const items = Children.count(children);
	const handleDebouncedScroll = useDebouncedCallback(
		useCallback(event_ => {
			const childNodes = event_.target.childNodes;
			const firstVisible = Array.from<HTMLDivElement>(childNodes).findIndex(item => {
				const offset = item.offsetLeft + item.offsetWidth / 2 - ref.current.scrollLeft;
				return offset >= 0;
			});
			if (firstVisible > -1) {
				setCurrentSlide(firstVisible);
			}
		}, []),
		100
	);
	React.useEffect(() => {
		if (ref.current) {
			ref.current.children[currentSlide].scrollIntoView({
				behavior: "smooth",
				block: "center",
				inline: "center",
			});
		}
	}, [currentSlide, ref]);
	return (
		<Box sx={{ position: "relative" }}>
			<Box
				sx={theme => {
					const ob = `calc(100% - ${theme.spacing(3)})`;
					const or = "100%"; //`calc(100% + ${theme.spacing(0.5)})`;
					const ol = "0%"; //`calc(0% - ${theme.spacing(0.5)})`;
					return {
						position: "relative",
						clipPath: `polygon(${ol} 0, ${ol} ${ob}, ${or} ${ob}, ${or} 0)`,
					};
				}}
			>
				<Stack
					direction="row"
					justifyContent="space-between"
					sx={theme => ({
						position: "absolute",
						zIndex: 1,
						right: 0,
						left: 0,
						top: "50%",
						transform: `translateY(calc(-50% - ${theme.spacing(1.5)}))`,
						visibility: "hidden",
					})}
				>
					<IconButton
						disabled={currentSlide < 1}
						aria-label="previous"
						sx={{ visibility: "visible" }}
						onClick={() => {
							setCurrentSlide(previousState => Math.max(0, previousState - 1));
						}}
					>
						<ChevronLeftIcon />
					</IconButton>
					<IconButton
						disabled={currentSlide > items - 2}
						aria-label="next"
						sx={{ visibility: "visible" }}
						onClick={() => {
							setCurrentSlide(previousState =>
								Math.min(items - 1, previousState + 1)
							);
						}}
					>
						<ChevronRightIcon />
					</IconButton>
				</Stack>
				<Row
					ref={ref}
					strategy="flex"
					sx={theme => ({
						pb: 3,
						mb: -3,
						flexWrap: "nowrap",
						overflow: "auto",
						webkitOverflowScrolling: "touch",
						scrollSnapType: "x mandatory",
						scrollPadding: theme.contour.spacing(1),
					})}
					onScroll={handleDebouncedScroll}
				>
					{children}
				</Row>
			</Box>
		</Box>
	);
};

const Slide = ({
	children,
	colSpan,
	bgcolor,
	color,
	variant = "outlined",
	align = "center",
}: {
	children?: ReactNode;
	colSpan: BaseColumnProps["colSpan"];
	bgcolor?: string;
	color?: string;
	align?: "start" | "end" | "center" | "none";
	variant?: "elevation" | "outlined";
}) => (
	<Column colSpan={colSpan} sx={{ flexShrink: 0, scrollSnapAlign: align }}>
		<Card variant={variant} sx={{ color, bgcolor }}>
			<CardContent sx={{ px: 5 }}>{children}</CardContent>
		</Card>
	</Column>
);

export const Slideshow: Story = () => {
	return (
		<ThemeProvider>
			<Grid strategy="grid">
				<Column>
					<Typography variant="h1">Slider</Typography>
					<Row>
						{Array.from({ length: 12 }, (_, index) => ({ id: index })).map(
							(item, index) => (
								<Column
									key={item.id}
									colSpan={{
										xs: 1,
									}}
									sx={{
										display: {
											xs: index < 2 ? "block" : "none",
											sm: index < 4 ? "block" : "none",
											md: index < 8 ? "block" : "none",
											lg: "block",
										},
									}}
								>
									<Card
										variant="outlined"
										elevation={0}
										sx={{ height: 8, bgcolor: indigo[200] }}
									/>
								</Column>
							)
						)}
					</Row>

					<Slider>
						{Array.from({ length: 5 }, (_, index) => ({ id: index })).map(
							(item, index) => (
								<Slide
									key={item.id}
									colSpan={{
										sm: `calc(var(${PUBLIC_CSS_VARS.colCount}) / ${1 + 1 / 3})`,
										md: `calc(var(${PUBLIC_CSS_VARS.colCount}) / ${1 + 1 / 3})`,
										lg: `calc(var(${PUBLIC_CSS_VARS.colCount}) / ${1 + 1 / 5})`,
									}}
									bgcolor={amber[200]}
								>
									<Typography
										align="center"
										variant="h4"
										component="div"
										sx={{ py: 10 }}
									>
										Slide {index + 1}
									</Typography>
								</Slide>
							)
						)}
					</Slider>
				</Column>
			</Grid>
		</ThemeProvider>
	);
};

Slideshow.parameters = {
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
