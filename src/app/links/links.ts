import {IconDefinition} from "@fortawesome/angular-fontawesome";
import {faLinkedin, faTelegram, faWhatsapp, faGithub} from "@fortawesome/free-brands-svg-icons";
import {faPhone, faEnvelope, faGlobe} from "@fortawesome/free-solid-svg-icons";

export class Link {
  public name: string;
  public link: string;
  public icon: IconDefinition;
  public color: string;
  public target?: string;
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
    color: '#760A76'
  },
  {
    link: 'tel:+5541991421020',
    icon: faPhone,
    name: 'Fone',
    color: '#32746D'
  },
  {
    link: 'mailto:contato.rafael.chicovis@gmail.com',
    icon: faEnvelope,
    name: 'Email',
    color: '#EE6C4D'
  },
  {
    link: '/',
    icon: faGlobe,
    name: 'Personal site',
    color: '#5863F8',
    target: '_self'
  },
]
