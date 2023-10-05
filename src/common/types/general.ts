export interface ITree {
  id: number;
  value: string;
  hierarchy: number;
  children?: ITree[];
}
