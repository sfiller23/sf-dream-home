import { IconType } from "react-icons";
import Text, {
  ITextProps,
} from "../../../../../components/common/typography/Text";

export interface IIconLabel {
  Icon: IconType;
  label: string;
  labelTextValues: Omit<ITextProps, "children">;
}

const IconLabel = (props: IIconLabel) => {
  const { Icon, label, labelTextValues } = props;
  const { size, weight } = labelTextValues;
  return (
    <>
      <Icon />
      <Text weight={weight} size={size}>
        {label}
      </Text>
    </>
  );
};

export default IconLabel;
