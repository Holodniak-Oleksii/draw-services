import { Dispatch, SetStateAction } from "react";
import { ICount, ITree } from "../../../../types/general";
const countNodes = (branch: ITree): number => {
  let count = 0;
  if (branch.children && branch.children.length > 0) {
    count += branch.children.length;
    for (const child of branch.children) {
      count += countNodes(child);
    }
  }
  return count;
};

export const findParent = (
  currentBranch: ITree[],
  parentId: number,
  count: number,
  categoryName: string
) => {
  for (const branch of currentBranch) {
    if (branch.id === parentId) {
      branch.children = [
        ...(branch.children || []),
        {
          hierarchy: branch.hierarchy + 1,
          id: count + 1,
          value: categoryName,
          children: [],
        },
      ];
    } else if (branch.children && branch.children.length > 0) {
      findParent(branch.children, parentId, count, categoryName);
    }
  }
};

export const findAndEditBranch = (
  currentBranch: ITree[],
  branchId: number,
  newValue: string
) => {
  for (const branch of currentBranch) {
    if (branch.id === branchId) {
      branch.value = newValue;
    } else if (branch.children && branch.children.length > 0) {
      findAndEditBranch(branch.children, branchId, newValue);
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
