import githubIcon from "../../assets/github_icon.svg";
import linkedInIcon from "../../assets/linkedin_icon.svg";
import emailIcon from "../../assets/email_icon.svg";

const Footer = () => {
  return (
    <footer>
      <p>Created by 🌟 Magdalena Kuśmierczak</p>
      <address>
        <ul>
          <li>
            <a
              href="https://github.com/MagdalenaKusmierczak"
              rel="noopener"
              target="_blank"
            >
              <img
                src={githubIcon}
                alt="Github link"
                width="25px"
                height="25px"
              ></img>
            </a>
          </li>
          <li>
            <a
              href="linkedin.com/in/magdalena-kusmierczak-4b94a7303"
              rel="noopener"
              target="_blank"
            >
              <img
                src={linkedInIcon}
                alt="LinkedIn link"
                width="25px"
                height="25px"
              ></img>
            </a>
          </li>
          <li>
            <a href="mailto:magdalenaxjare@gmail.com">
              <img
                src={emailIcon}
                alt="Email address"
                width="25px"
                height="25px"
              ></img>
            </a>
          </li>
        </ul>
      </address>
    </footer>
  );
};
export default Footer;
