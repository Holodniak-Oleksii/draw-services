import { Dispatch, SetStateAction } from "react";
import { ITree } from "../../types/general";

export interface IControls {
  branch: ITree;
}

export interface IPortal {
  setInputCategory: Dispatch<SetStateAction<string>>;
  inputCategory: string;
  isEditable: boolean;
  submit: () => void;
  cancel: () => void;
}
