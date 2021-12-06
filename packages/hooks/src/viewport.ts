import { PUBLIC_CSS_VARS, pxToRem } from "@contour/utils";
import { useEffect } from "react";

const useViewport = () => {
	useEffect(() => {
		const scrollbarWidth = window.innerWidth - document.body.clientWidth;
		document.documentElement.style.setProperty(
			PUBLIC_CSS_VARS.vw,
			`calc(100vw - ${pxToRem(scrollbarWidth)})`
		);
		return () => {
			document.documentElement.style.removeProperty(PUBLIC_CSS_VARS.vw);
		};
	}, []);
};

export default useViewport;
