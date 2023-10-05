export interface ITree {
  id: number;
  value: string;
  hierarchy: number;
  children?: ITree[];
}

export interface ICount {
  categories: number;
  id: number;
}
