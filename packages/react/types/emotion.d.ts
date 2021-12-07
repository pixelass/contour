import { Theme as ThemeType } from "@contour/utils/types";

declare module "@emotion/react" {
	export interface Theme extends ThemeType {}
}
