import { Card, Inline, Pad, Rows } from "@sfiller23/sf-component-library";
import { PropsWithChildren } from "react";
import { IconType } from "react-icons";
import { styled } from "styled-components";
import { theme } from "../../../utils/theme";
import Button from "../../common/button/Button";
import Text from "../../common/typography/Text";

export interface IFooterCardProps {
  image: string;
  title: string;
  description: string;
  ActionButtonIcon: IconType;
  actionButtonText: string;
}

const StyledText = styled(Text)`
  max-width: 17rem;
`;

const FooterCard = (props: PropsWithChildren<IFooterCardProps>) => {
  const { image, title, description, ActionButtonIcon, actionButtonText } =
    props;
  return (
    <Card width="25rem" background={theme.colors.sub} imageWidth="20%">
      <Pad space="l">
        <Inline align="maxSpace" justify="maxSpace">
          <img className="main-img" src={image} alt="house" />
          <Rows align="maxSpace" justify="start">
            <Text size="footerTitle" weight={700}>
              {title}
            </Text>
            <StyledText size="footerSub" weight={300}>
              {description}
            </StyledText>
          </Rows>
        </Inline>
      </Pad>
      <Button>
        <ActionButtonIcon size="1.1rem" />
        <Text size="bodyNote" color="white" weight={500}>
          {actionButtonText}
        </Text>
      </Button>
    </Card>
  );
};

export default FooterCard;
