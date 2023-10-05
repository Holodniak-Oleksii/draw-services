import { Dispatch, RefObject, SetStateAction } from "react";
import { ICount, ITree } from "../types/general";

export interface IGeneralContext {
  canvas: RefObject<HTMLDivElement> | null;
  diagram: RefObject<HTMLDivElement> | null;
  selectedZoom: number;
  setSelectedZoom: Dispatch<SetStateAction<number>>;
  tree: ITree[];
  setTree: Dispatch<SetStateAction<ITree[]>>;
  count: ICount;
  setCount: Dispatch<SetStateAction<ICount>>;
}
