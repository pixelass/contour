import { PartialTheme, Theme } from "@contour/utils/types";
import deepmerge from "deepmerge";
import defaultTheme from "./theme";

const createTheme = (partialTheme: PartialTheme): Theme =>
	deepmerge<Theme, PartialTheme>(defaultTheme, partialTheme);

export default createTheme;
