import { Divider, Inline, Pad } from "@sfiller23/sf-component-library";
import Text from "../../../components/common/typography/Text";
import PathIndicator from "../../../components/pathIndicator/PathIndicator";
import OrderByForm from "./orderByForm/OrderByForm";

const PropertyListHeader = () => {
  return (
    <>
      <PathIndicator />
      <Pad space="l none" width="100%">
        <Divider />
      </Pad>
      <Inline width="100%" align="start" justify="maxSpace">
        <Text size="subTitle" weight={600}>
          Property Listing
        </Text>
        <OrderByForm />
      </Inline>
    </>
  );
};

export default PropertyListHeader;
