import { Inline, Pad, Rows, Select } from "@sfiller23/sf-component-library";
import { useCallback, useContext, useEffect, useState } from "react";
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
  const [orderBy, setOrderBy] = useState<keyof Property>("price_in_USD");

  const [order, setOrder] = useState<Order>("ascending");

  const { dispatch } = useContext(PropertiesContext);

  const handelOrderChange = useCallback(() => {
    dispatch({
      type: "SET_ORDER_BY",
      payload: { orderBy: orderBy, order: order },
    });
  }, [dispatch, orderBy, order]);

  useEffect(() => {
    handelOrderChange();
  }, [orderBy, order, handelOrderChange]);

  return (
    <Rows as="form" justify="maxSpace" width="13rem">
      <Inline justify="maxSpace">
        <Text>Order By :</Text>
        <Select
          isMulti={false}
          options={propertyInfo}
          placeholder="Price"
          onChange={(e: SingleValue<ISelectOption>) => {
            setOrderBy(e?.value as keyof Property);
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setOrder(e.target.value as Order);
              }}
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setOrder(e.target.value as Order);
              }}
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
