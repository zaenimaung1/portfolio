import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import SmartToyIcon from "@mui/icons-material/SmartToy";

const iconComponents = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mail: MailIcon,
  phone: PhoneIcon,
  facebook: FacebookIcon,
  aibot: SmartToyIcon,
};

export default function SocialIcon({ name, className = "" }) {
  const normalizedName = name?.toLowerCase() ?? "mail";
  const Icon = iconComponents[normalizedName] ?? MailIcon;

  return <Icon className={className} fontSize="inherit" aria-hidden="true" />;
}
