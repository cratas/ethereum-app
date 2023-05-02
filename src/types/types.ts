export type User = {
  address: string;
  balance: number;
  gasPrice: number;
  transactionsCount: number;
  chainId: number;
};

export type Project = {
  id: number;
  owner: string;
  title: string;
  description: string;
  deadline: Date;
  goal: number;
  currentValue: number;
  image: string;
  investors: string[],
  investments: number[]
};
