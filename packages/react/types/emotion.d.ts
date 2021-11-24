import { Theme as ThemeType } from "@contour/utils/theme";
import "@emotion/react";

declare module "@emotion/react" {
	export interface Theme extends ThemeType {}
}
