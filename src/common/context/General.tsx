import { createContext, useContext } from "react";
import { IGeneralContext } from "./types";

export const GeneralContext = createContext<IGeneralContext>({
  canvas: null,
  diagram: null,
  selectedZoom: 100,
  setSelectedZoom: () => {},
  tree: [],
  setTree: () => {},
  count: { categories: 0, id: 0 },
  setCount: () => {},
});

export const useGeneralContext = () =>
  useContext<IGeneralContext>(GeneralContext);
