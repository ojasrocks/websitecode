import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <img src={"img/svg/"+src} alt={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
              <img src="img/svg/logo.svg" aria-label="homepage" alt={"logo.svg"} width="120px" height="64px" />
              </LogoContainer>
            </NavLink>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Policy")}</Title>
              <Large  onClick={() => window.open('https://shrinke.me/WebTerms', '_blank', 'noopener,noreferrer')} to="/" left="true">
                {t("Terms & Conditions")}
              </Large>
              <Large left="true" onClick={() => window.open('https://shrinke.me/WebPolicy', '_blank', 'noopener,noreferrer')} to="/">
                {t("Privacy Policy")}
              </Large>
            </Col>
            <FooterContainer>
              <SocialLink
                href="https://shrinke.me/Github_Ojas"
                src="github.svg"
              />
              <SocialLink
                href="https://shrinke.me/Twitter_Ojas"
                src="twitter.svg"
              />
              <SocialLink
                href="https://shrinke.me/Medium_Ojas"
                src="medium.svg"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);

/**
 *               <a href="https://cshrink.live/buy_me_a_pizza">
                <img
                  src="https://img.buymeacoffee.com/button-api/?text=Buy me a ghee&emoji=🧈&slug=kalabhairava&button_colour=FF5F5F&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00"
                  alt="Buy me a ghee"
                />
              </a>
 */