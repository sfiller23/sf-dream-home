import { Rows } from "@cman430/sf-component-library";
import Text, { ITextProps } from "../../common/typography/Text";
import { IAddressInfo } from "./addressInfo";

const AddressTitle = (props: IAddressInfo) => {
  const { text } = props;
  return (
    <Text size="footerTextSub" color="textNote" weight={200}>
      {text}
    </Text>
  );
};

const AddressInfo = (props: IAddressInfo) => {
  const { text, weight = 200 } = props;
  return (
    <Text size="footerText" color="footerText" weight={weight}>
      {text}
    </Text>
  );
};

const AddressListItem = (props: IAddressInfo) => {
  const { title, description, weight } = props;
  return (
    <Rows justify="start">
      {title && <AddressTitle text={title} />}
      <AddressInfo text={description} weight={weight} />
    </Rows>
  );
};

export default AddressListItem;
