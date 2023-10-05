import { Dispatch, SetStateAction } from "react";
import { ICount, ITree } from "../../types/general";

export const findParent = (
  currentBranch: ITree[],
  parentId: number,
  count: number
) => {
  for (const branch of currentBranch) {
    if (branch.id === parentId) {
      branch.children = [
        ...(branch.children || []),
        {
          hierarchy: branch.hierarchy + 1,
          id: count + 1,
          value: `category ${branch.hierarchy + 1} id = ${count + 1}`,
          children: [],
        },
      ];
    } else if (branch.children && branch.children.length > 0) {
      findParent(branch.children, parentId, count);
    }
  }
};

export const findAndRemoveBranch = (
  currentBranch: ITree[],
  branchId: number,
  setCount: Dispatch<SetStateAction<ICount>>
) => {
  for (const branch of currentBranch) {
    if (branch.id === branchId) {
      setCount((prev) => ({
        ...prev,
        categories: prev.categories - (countNodes(branch) + 1),
      }));
      const elementIndex = currentBranch.indexOf(branch);
      currentBranch.splice(elementIndex, 1);
    } else if (branch.children && branch.children.length > 0) {
      findAndRemoveBranch(branch.children, branchId, setCount);
    }
  }
};

export const countNodes = (branch: ITree): number => {
  let count = 0;
  if (branch.children && branch.children.length > 0) {
    count += branch.children.length;
    for (const child of branch.children) {
      count += countNodes(child);
    }
  }
  return count;
};
