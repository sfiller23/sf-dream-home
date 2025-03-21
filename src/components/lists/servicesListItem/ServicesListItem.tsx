import { Inline } from "@sfiller23/sf-component-library";
import { Link } from "react-router-dom";
import arrowToRight from "../../../assets/SVG/footerListIcon.svg";
import Text from "../../common/typography/Text";

const ServicesListItem = (props: {title: string}) => {
  const { title } = props;
  return (
    <Inline justify="start" gap={"m"}>
      <img src={arrowToRight} alt="Arrow-Icon" />
      <Link to="/">
        <Text weight={300} color="textNote" size="footerText">
          {title}
        </Text>
      </Link>
    </Inline>
  );
};

export default ServicesListItem;
