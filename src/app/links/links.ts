import {IconDefinition} from "@fortawesome/angular-fontawesome";
import {faLinkedin, faTelegram, faWhatsapp, faGithub} from "@fortawesome/free-brands-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";

export class Link {
  public name: string;
  public link: string;
  public icon: IconDefinition;
  public color: string;
}


export const links: Link[] = [
  {
    link: 'https://t.me/RafaelChicovis',
    icon: faTelegram,
    name: 'Telegram',
    color: '#1A93E3'
  },
  {
    link: 'https://api.whatsapp.com/send?phone=5541991421020',
    icon: faWhatsapp,
    name: 'WhatsApp',
    color: '#27D366'
  },
  {
    link: 'https://www.linkedin.com/in/rafael-kaua-chicovis/',
    icon: faLinkedin,
    name: 'LinkedIn',
    color: '#0D66C2'
  },
  {
    link: 'https://github.com/RafaelKC',
    icon: faGithub,
    name: 'GitHub',
    color: '#010409'
  },
]
