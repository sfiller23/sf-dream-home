import Text, {
  ITextProps,
} from "../../../../components/common/typography/Text";
import IconLabel, { IIconLabel } from "../cardHeader/iconLabel/IconLabel";

interface IIconLabelValue extends IIconLabel {
  value: string;
  ValueTextValues: Omit<ITextProps, "children">;
}

const IconLabelValue = (props: IIconLabelValue) => {
  const { Icon, label, labelTextValues, value, ValueTextValues } = props;
  const { size, weight } = ValueTextValues;
  return (
    <>
      <IconLabel Icon={Icon} label={label} labelTextValues={labelTextValues} />
      <Text size={size} weight={weight}>
        {value}
      </Text>
    </>
  );
};

export default IconLabelValue;
