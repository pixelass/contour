import "@emotion/react";
import { Theme as ThemeType } from "@contour/utils/theme";

declare module "@emotion/react" {
	export interface Theme extends ThemeType {}
}
