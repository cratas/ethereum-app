export type User = {
  address: string;
  balance: number;
  gasPrice: number;
  transactionsCount: number;
  chainId: number;
};

export type Project = {
  title: string;
  description: string;
  goal: number;
  date: Date;
  currentValue: number;
  imageURL: string;
  owner: string;
  donators: { name: string; value: number }[];
};
