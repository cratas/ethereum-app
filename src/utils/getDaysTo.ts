import dayjs from "dayjs";

export const getDaysTo = (deadline: Date) => {

  const date = dayjs(deadline)
  return date.diff(new Date(), 'day')
};
