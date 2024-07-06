import { ITextProps } from "../../common/typography/Text";

export interface IAddressInfo extends ITextProps {
  title?: string;
  description: string;
}

export const addressInfo: IAddressInfo[] = [
  {
    title: "Head office:",
    description: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    weight: 400,
  },
  {
    title: "Branch:",
    description: "3891 Ranchview Dr. Richardson, California 62639",
  },

  {
    description: "3517 W. Gray St. Utica, Pennsylvania 57867",
  },
];
