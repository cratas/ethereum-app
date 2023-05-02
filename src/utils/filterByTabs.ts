import { Project } from "../types";
import { getDaysTo } from "./getDaysTo";

export const filterByTabs = (
  item: Project,
  mode: number,
  currentUser?: string
) => {
  switch (mode) {
    case 1:
      return true;
    case 3:
      return item.investors.includes(currentUser ?? "");
    case 5:
      return item.currentValue >= item.goal;
    case 7:
      return getDaysTo(item.deadline) <= 1 && item.currentValue < item.goal;
    default:
      return false;
  }
};
