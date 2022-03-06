import { Theme as ThemeType } from "@contour/utils";

declare module "@emotion/react" {
	export interface Theme extends ThemeType {}
}
