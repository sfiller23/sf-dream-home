import { Inline } from "@sfiller23/sf-component-library";
import Text from "../../../../components/common/typography/Text";
import { theme } from "../../../../utils/theme";

interface ILebalValue {
  label: string;
  value: string;
  labelColor?: keyof typeof theme.colors;
  valueColor?: keyof typeof theme.colors;
  gap?: keyof typeof theme.spaceSchema;
  size?: keyof typeof theme.fontSizes;
  weight?: number;
  justify?: string;
  width?: string;
}

const LabelValue = (props: ILebalValue) => {
  const {
    label,
    value,
    labelColor,
    valueColor,
    gap,
    size,
    weight,
    justify,
    width,
  } = props;
  return (
    <Inline gap={gap} justify={justify} width={width}>
      <Text color={labelColor} size={size} weight={weight}>
        {label}:
      </Text>
      <Text color={valueColor} size={size} weight={weight}>
        {value.toLocaleString()}
      </Text>
    </Inline>
  );
};

export default LabelValue;
