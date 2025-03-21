import { Inline, Pad, Rows, Select } from "@sfiller23/sf-component-library";
import { useContext, useState } from "react";
import { SingleValue } from "react-select";
import Text from "../../../../components/common/typography/Text";
import { PropertiesContext } from "../../../../context/propertiesContext/PropertiesContext";
import {
  Order,
  Property,
} from "../../../../context/propertiesContext/propertiesReducer";
import { propertyInfo } from "../../../../utils/selectData/orderBySelect";
import { ISelectOption } from "../../../../utils/theme";

const OrderByForm = () => {
  // @ts-ignore: Unreachable code error
  const [orderBy, setOrderBy] = useState<keyof Property>("price_in_USD");
  // @ts-ignore: Unreachable code error
  const [order, setOrder] = useState<Order>("ascending");

  const { dispatch } = useContext(PropertiesContext);
  // @ts-ignore: Unreachable code error
  const handelOrderChange = (currentVal: string) => {
    dispatch({
      type: "SET_ORDER_BY",
      payload: { orderBy: orderBy, order: order },
    });
  };
  return (
    <Rows as="form" justify="maxSpace" width="13rem">
      <Inline justify="maxSpace">
        <Text>Order By :</Text>
        <Select
          isMulti={false}
          options={propertyInfo}
          placeholder="Price"
          onChange={(e: SingleValue<ISelectOption>) => {
            handelOrderChange(e?.value as string);
          }}
        />
      </Inline>
      <Pad space="m none l">
        <Inline justify="maxSpace">
          <Inline>
            <input
              type="radio"
              id="ascending"
              value="ascending"
              name="order"
              defaultChecked
            />
            <label htmlFor="ascending">
              <Text size="bodyNote">Ascending</Text>
            </label>
          </Inline>
          <Inline>
            <input
              type="radio"
              id="descending"
              value="descending"
              name="order"
            />
            <label htmlFor="descending">
              <Text size="bodyNote">Descending</Text>
            </label>
          </Inline>
        </Inline>
      </Pad>
    </Rows>
  );
};

export default OrderByForm;
