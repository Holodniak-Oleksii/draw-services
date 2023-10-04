import { Dispatch, RefObject, SetStateAction } from "react";

export interface IGeneralContext {
  canvas: RefObject<HTMLDivElement> | null;
  diagram: RefObject<HTMLDivElement> | null;
  selectedZoom: number;
  setSelectedZoom: Dispatch<SetStateAction<number>>;
}
