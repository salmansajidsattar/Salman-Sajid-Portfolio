import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiPinterestLine,
} from "react-icons/ri";
import { FaSquareXTwitter,FaWhatsapp  } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";

export const socialData = [
  {
    name: "Whatsapp Business", 
    link: "https://wa.me/message/CM73AJUSGB56M1 ",
    Icon: FaWhatsapp,
  },
  {
    name: "Twitter",
    link: "https://x.com/Salmantsajid?t=rSIw66hkvp0nHw62zz0JuA&s=08",
    Icon: FaSquareXTwitter,
  },
  {
    name: "Instagram",
    link: "https://instagram.com",
    Icon: RiInstagramLine,
  },
  {
    name: "Facebook",
    link: "https://facebook.com",
    Icon: RiFacebookLine,
  },
  {
    name: "Fiverr",
    link: "http://fiverr.com/users/salmansajid306/",
    Icon: TbBrandFiverr,
  },
  {
    name: "Pinterest",
    link: "https://pinterest.com",
    Icon: RiPinterestLine,
  },
  {
    name: "Github",
    link: "https://github.com/salmansajidsattar",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
