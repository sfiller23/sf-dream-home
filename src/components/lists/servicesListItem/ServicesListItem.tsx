import { Inline } from "@cman430/sf-component-library";
import { Link } from "react-router-dom";
import arrowToRight from "../../../assets/SVG/footerListIcon.svg";
import Text from "../../common/typography/Text";

interface FooterListItemProps {
  title: string;
}

const ServicesListItem = (props: FooterListItemProps) => {
  const { title } = props;
  return (
    <Inline justify="start" gap={"m"}>
      <img src={arrowToRight} alt="Arrow-Icon" />
      <Text weight={300} as={Link} to="/" color="textNote" size="footerText">
        {title}
      </Text>
    </Inline>
  );
};

export default ServicesListItem;
