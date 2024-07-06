import { Columns, Button as SFButton } from "@cman430/sf-component-library";
import { styled } from "styled-components";
import { theme } from "../../../utils/theme";
import Text from "../../common/typography/Text";

interface SwitchButtonsProps {
  type: "rent" | "buy";
  setType: (type: "rent" | "buy") => void;
  page: string;
  onSwitch: () => void;
}

const BarSwitch = styled(SFButton)<{ page?: string }>`
  justify-content: center;
  padding: 5px;
  width: 100px;
`;

const SwitchButtons = (props: SwitchButtonsProps) => {
  const { type, setType, page, onSwitch } = props;
  const handleSwitch = (type: "rent" | "buy") => {
    setType(type);
    onSwitch();
  };
  return (
    <Columns>
      <BarSwitch
        radius={`${page !== "/properties" ? "10px 0px 0px 0px" : "10px"}`}
        background={type === "rent" ? theme.colors.main : theme.colors.sub}
        onClick={() => handleSwitch("rent")}
      >
        <Text color={type === "rent" ? "white" : "heading"}>Rent</Text>
      </BarSwitch>
      <BarSwitch
        radius={`${page !== "/properties" ? "0px 10px 0px 0px" : "10px"}`}
        background={type === "buy" ? theme.colors.main : theme.colors.sub}
        onClick={() => handleSwitch("buy")}
      >
        <Text weight={500} color={type === "buy" ? "white" : "heading"}>
          Buy
        </Text>
      </BarSwitch>
    </Columns>
  );
};

export default SwitchButtons;
