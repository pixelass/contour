import { Theme as ContourTheme } from "@contour/utils";

declare module "@contour/utils" {
	export interface BreakpointKeyOverrides {
		sm: true;
		md: true;
		lg: true;
	}
}

declare module "@mui/material/styles" {
	export interface Theme {
		contour: ContourTheme["contour"];
	}
	// Allow configuration using `createTheme`
	export interface ThemeOptions {
		contour?: ContourTheme["contour"];
	}
}
