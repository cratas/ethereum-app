export const calcProgressStatus = (currentValue: number, goal: number) =>
  (Math.min(currentValue, goal) / goal) * 100;
