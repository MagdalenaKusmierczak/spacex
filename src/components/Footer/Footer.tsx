import githubIcon from "../../assets/github_icon.svg";
import linkedInIcon from "../../assets/linkedin_icon.svg";
import emailIcon from "../../assets/email_icon.svg";
import {
  FooterContainer,
  AddressContainer,
  AddressList,
  AddressItem,
  Icon,
  Paragraph,
  Link
} from "./Footer.styled";
const Footer = () => {
  return (
    <FooterContainer>
      <Paragraph>Created by: <span>Magdalena Kuśmierczak</span></Paragraph>
      <AddressContainer>
        <AddressList>
          <AddressItem>
            <Link
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
            </Link>
          </AddressItem>
          <AddressItem>
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
          </AddressItem>
          <AddressItem>
            <a href="mailto:magdalenaxjare@gmail.com">
              <Icon
                src={emailIcon}
                alt="Email address"
                width="25px"
                height="25px"
              />
            </a>
          </AddressItem>
        </AddressList>
      </AddressContainer>
    </FooterContainer>
  );
};
export default Footer;
