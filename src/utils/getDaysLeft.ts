import dayjs from "dayjs";

export const getDaysLeft = (targetDate: Date): number => {
  const today = dayjs();
  const target = dayjs(targetDate);
  const dayDiff = target.diff(today, "day");
  return dayDiff;
};
