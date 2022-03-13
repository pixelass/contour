import { createTheme as createContourTheme } from "@contour/theme";
import { css, Global } from "@emotion/react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import {
	createTheme as createMuiTheme,
	ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import React, { ReactNode } from "react";

const muiBaseTheme = createMuiTheme({});

const muiGap = Number.parseInt(muiBaseTheme.spacing(1), 10);

export const { contour } = createContourTheme({
	breakpoints: {
		values: muiBaseTheme.breakpoints.values,
		keys: muiBaseTheme.breakpoints.keys,
	},
	gap: {
		x: {
			xs: muiGap * 2,
			sm: muiGap * 2,
			md: muiGap * 2,
			lg: muiGap * 2,
			xl: muiGap * 2,
		},
		y: {
			xs: muiGap * 2,
			sm: muiGap * 2,
			md: muiGap * 2,
			lg: muiGap * 2,
			xl: muiGap * 2,
		},
	},
	margin: {
		x: {
			xs: muiGap * 2,
			sm: muiGap * 2,
			md: muiGap * 4,
			lg: muiGap * 4,
			xl: muiGap * 4,
		},
		y: {
			xs: muiGap * 2,
			sm: muiGap * 2,
			md: muiGap * 2,
			lg: muiGap * 4,
			xl: muiGap * 4,
		},
	},
});

export const bull = (
	<Box component="span" sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
		•
	</Box>
);

export const theme = createMuiTheme({ contour });

export const ThemeProvider = ({ children }: { children?: ReactNode }) => (
	<MuiThemeProvider theme={theme}>
		<CssBaseline />
		<Global
			styles={css`
				body,
				.sb-show-main.sb-main-padded {
					margin: 0;
					padding: 0;
				}
			`}
		/>
		{children}
	</MuiThemeProvider>
);
