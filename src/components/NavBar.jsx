import { BsLinkedin } from "react-icons/bs";
import { useState } from "react";
import { BiX, BiMenu } from "react-icons/bi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationLinks = [
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://www.linkedin.com/in/d-rav/", Icon: BsLinkedin, hoverColor: "hover:text-blue-500" }
  ];

  const NavLinks = ({ className = "" }) => (
    <ul className={className}>
      {navigationLinks.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );

  const SocialLinks = ({ className = "" }) => (
    <ul className={className}>
      {socialLinks.map(({ href, Icon, hoverColor }, index) => (
        <li key={index}>
          <a
            href={href}
            className={`cursor-pointer opacity-70 transition-all duration-300 ${hoverColor} hover:opacity-100`}
          >
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      <a
        href="#home"
        className="bg-gradient-to-r from-cyan-600 to-teal-400 bg-clip-text text-2xl font-semibold text-transparent opacity-80 transition-all duration-300 hover:opacity-100"
      >
        Daniel
      </a>
      
      <NavLinks className="hidden md:flex gap-10" />
      <SocialLinks className="hidden md:flex gap-5" />

      {isOpen ? (
        <BiX className="block text-4xl md:hidden" onClick={() => setIsOpen(false)} />
      ) : (
        <BiMenu className="block text-4xl md:hidden" onClick={() => setIsOpen(true)} />
      )}

      {isOpen && (
        <div className="fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justiy-start gap-10 border-l border-gray-800 bg-black/90 p-12">
          <NavLinks className="flex flex-col gap-8" />
          <SocialLinks className="flex flex-wrap gap-5" />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
