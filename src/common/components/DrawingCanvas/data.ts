import { ITree } from "./interfaces";

export const treeData: ITree[] = [
  {
    id: 1,
    value: "categories",
    hierarchy: 1,
    children: [
      {
        id: 10,
        value: "category 3",
        hierarchy: 2,
        children: [],
      },
      {
        id: 2,
        value: "category 1",
        hierarchy: 2,
        children: [
          {
            id: 8,
            value: "category 1.1",
            hierarchy: 3,
            children: [],
          },
          {
            id: 9,
            value: "category 1.2",
            hierarchy: 3,
            children: [],
          },
        ],
      },
      {
        id: 3,
        value: "category 2",
        hierarchy: 2,
        children: [
          {
            id: 4,
            value: "subcategory 2.1",
            hierarchy: 3,
            children: [],
          },
          {
            id: 5,
            value: "subcategory 2.2",
            hierarchy: 3,
            children: [],
          },
          {
            id: 6,
            value: "subcategory 2.3",
            hierarchy: 3,
            children: [
              {
                id: 3,
                value: "subcategory 2.3.1",
                hierarchy: 4,
                children: [],
              },
            ],
          },
          {
            id: 7,
            value: "category 2.4",
            hierarchy: 3,
            children: [],
          },
        ],
      },
    ],
  },
];
