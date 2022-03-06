import { defaultTheme } from "@contour/theme";
import { GridProviderProps } from "@contour/utils";
import { ThemeProvider } from "@emotion/react";
import React from "react";

const GridProvider = ({ children, theme }: GridProviderProps) => (
	<ThemeProvider theme={theme ?? defaultTheme}>{children}</ThemeProvider>
);

export default GridProvider;
