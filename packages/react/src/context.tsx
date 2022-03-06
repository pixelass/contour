import { GridContextShape } from "@contour/utils";
import { createContext, useContext } from "react";

export const GridContext = createContext<GridContextShape>({
	strategy: "flex",
});

export const useGridContext = () => useContext(GridContext);
