import { Inline, Rows } from "@sfiller23/sf-component-library";
import { PiAddressBookThin } from "react-icons/pi";
import Text, {
  ITextProps,
} from "../../../../components/common/typography/Text";
import IconLabel from "./iconLabel/IconLabel";

interface ICardHeader {
  imgSrc: string;
  title: string;
  subTitle: string;
  titleTextValues: Omit<ITextProps, "children">;
  subTitleTextValues: Omit<ITextProps, "children">;
}

const CardHeader = (props: ICardHeader) => {
  const { imgSrc, title, subTitle, titleTextValues, subTitleTextValues } =
    props;
  const { size, weight } = titleTextValues;

  return (
    <Rows justify="start">
      <img className="main-img" src={imgSrc} alt="house" />
      <Text size={size} weight={weight}>
        {title}
      </Text>
      <Inline>
        <IconLabel
          Icon={PiAddressBookThin}
          label={subTitle}
          labelTextValues={subTitleTextValues}
        />
      </Inline>
    </Rows>
  );
};

export default CardHeader;
