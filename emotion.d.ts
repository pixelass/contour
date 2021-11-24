import "@emotion/react";
import { Theme as LibTheme } from "./packages/utils/src/types";

declare module "@emotion/react" {
	export interface Theme extends LibTheme {}
}
