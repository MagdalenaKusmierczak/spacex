import githubIcon from "../../assets/github_icon.svg";
import linkedInIcon from "../../assets/linkedin_icon.svg";
import emailIcon from "../../assets/email_icon.svg";
import {
  FooterContainer,
  AddressContainer,
  AddressList,
  Icon,
  Paragraph
} from "./Footer.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <Paragraph>Created by: <span>Magdalena Kuśmierczak</span></Paragraph>
      <AddressContainer>
        <AddressList>
          <li>
            <a
              href="https://github.com/MagdalenaKusmierczak"
              rel="noopener"
              target="_blank"
            >
              <Icon
                src={githubIcon}
                alt="Github link"
                width="25px"
                height="25px"
              />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/magdalena-kusmierczak-4b94a7303"
              rel="noopener"
              target="_blank"
            >
              <Icon
                src={linkedInIcon}
                alt="LinkedIn link"
                width="25px"
                height="25px"
              />
            </a>
          </li>
          <li>
            <a href="mailto:magdalenaxjare@gmail.com">
              <Icon
                src={emailIcon}
                alt="Email address"
                width="25px"
                height="25px"
              />
            </a>
          </li>
        </AddressList>
      </AddressContainer>
    </FooterContainer>
  );
};

export default Footer;
