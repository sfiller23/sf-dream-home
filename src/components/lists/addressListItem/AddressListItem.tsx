import { Rows } from "@sfiller23/sf-component-library";
import Text from "../../common/typography/Text";
import { IAddressInfo } from "./addressInfo";

const AddressTitle = (props: {title:string}) => {
  const { title } = props;
  return (
    <Text size="footerTextSub" color="textNote" weight={200}>
      {title}
    </Text>
  );
};

const AddressInfo = (props: IAddressInfo) => {
  const { description, weight = 200 } = props;
  return (
    <Text size="footerText" color="footerText" weight={weight}>
      {description}
    </Text>
  );
};

const AddressListItem = (props: IAddressInfo) => {
  const { title, description, weight } = props;
  return (
    <Rows justify="start">
      {title && <AddressTitle title={title} />}
      <AddressInfo description={description} weight={weight} />
    </Rows>
  );
};

export default AddressListItem;
