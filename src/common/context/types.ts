import { Dispatch, RefObject, SetStateAction } from "react";
import { ITree } from "../types/general";

export interface IGeneralContext {
  canvas: RefObject<HTMLDivElement> | null;
  diagram: RefObject<HTMLDivElement> | null;
  selectedZoom: number;
  setSelectedZoom: Dispatch<SetStateAction<number>>;
  treeData: ITree[];
}
