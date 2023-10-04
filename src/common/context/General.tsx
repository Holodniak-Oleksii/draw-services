import { createContext, useContext } from "react";
import { IGeneralContext } from "./types";

export const GeneralContext = createContext<IGeneralContext>({
  canvas: null,
  diagram: null,
  selectedZoom: 100,
  setSelectedZoom: () => {},
});

export const useGeneralContext = () =>
  useContext<IGeneralContext>(GeneralContext);
