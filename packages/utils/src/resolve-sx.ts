import { defaultTheme } from "@contour/theme";
import { pxToRem } from "@contour/utils/css";
import { Sx, SxObject, Theme } from "@contour/utils/types";

export const aliases: Record<string, string[]> = {
	m: ["margin"],
	mt: ["marginTop"],
	mr: ["marginRight"],
	mb: ["marginBottom"],
	ml: ["marginLeft"],
	mx: ["marginRight", "marginLeft"],
	my: ["marginTop", "marginBottom"],
	p: ["padding"],
	pt: ["paddingTop"],
	pr: ["paddingRight"],
	pb: ["paddingBottom"],
	pl: ["paddingLeft"],
	px: ["paddingRight", "paddingLeft"],
	py: ["paddingTop", "paddingBottom"],
};

export const resolveSx = (sx: Sx) => (theme: Theme) => {
	if (!theme.contour) {
		theme.contour = defaultTheme.contour;
	}

	const sxResult: SxObject = typeof sx === "function" ? sx(theme) : sx;
	for (const key in sxResult) {
		if (Object.prototype.hasOwnProperty.call(aliases, key)) {
			const value = sxResult[key] as string | number;
			for (const property of aliases[key]) {
				sxResult[property] =
					typeof value === "number" ? pxToRem(value * theme.contour.spacing) : value;
			}

			sxResult[key] = undefined;
		}
	}

	return sxResult;
};
