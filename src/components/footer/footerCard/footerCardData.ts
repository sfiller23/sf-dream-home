import { BsHouseAdd, BsHouseCheck } from "react-icons/bs";
import {
  default as bannerImg,
  default as house1,
} from "../../../assets/images/banner-img.jpeg";
import { IFooterCardProps } from "./FooterCard";

export const footerCardData: IFooterCardProps[] = [
  {
    image: house1,
    title: "You need a house?",
    description:
      "Tell us your needs, we will give you thousands of suggestions for the dream home.",
    ActionButtonIcon: BsHouseAdd,
    actionButtonText: "Buy Property",
  },
  {
    image: bannerImg,
    title: "Sell your house",
    description:
      "We will connect you to thousands of people who need to buy a home.",
    ActionButtonIcon: BsHouseCheck,
    actionButtonText: "Sell Property",
  },
];
