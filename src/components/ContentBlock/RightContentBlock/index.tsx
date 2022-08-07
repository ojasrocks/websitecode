import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { Button } from "../../../common/Button";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  RightBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
} from "./styles";

const RightBlock = ({
  title,
  content,
  button,
  icon,
  t,
  qr,
  id,
  link
}: ContentBlockProps) => {
  
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <RightBlockContainer>
      <Fade direction="right">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={11} xs={24} >
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Row justify="center" align="middle">
              { qr ? <img style={{width:"70%",height:"70%",marginTop:10}} src="img/icons/No_border.png" alt="https://shrinke.me/Ojas_App" /> : <></>
                }
              </Row>
              <Content>{t(content)}</Content>
              <ButtonWrapper >
                {typeof button === "object" &&
                  button.map((item: any, id: number) => {
                    return (
                      <Button
                        key={id}
                        color={item.color}
                        fixedWidth={true}
                        onClick={item.link ? ()=>{window.open(item.link, '_blank', 'noopener,noreferrer')} : id === 0 ? () => scrollTo("expo") : () => scrollTo("vision")}
                      >
                        {t(item.title)}
                      </Button>
                    );
                  })}
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={12} xs={24}>
          <img src={"img/svg/"+icon} alt={icon} width="100%" height="100%" />
          </Col>
        </Row>
      </Fade>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
